import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import LibraryItem from '../library-item/library-item.jsx';
import ModalComponent from '../modal/modal.jsx';

import styles from './library.css';

class LibraryComponent extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleFilterChange',
            'handleFilterClear',
            'handleMouseEnter',
            'handleMouseLeave',
            'handleSelect'
        ]);
        this.state = {
            selectedItem: null,
            filterQuery: ''
        };
    }
    handleSelect (id) {
        this.props.onRequestClose();
        this.props.onItemSelected(this.getFilteredData()[id]);
    }
    handleMouseEnter (id) {
        if (this.props.onItemMouseEnter) this.props.onItemMouseEnter(this.getFilteredData()[id]);
    }
    handleMouseLeave (id) {
        if (this.props.onItemMouseLeave) this.props.onItemMouseLeave(this.getFilteredData()[id]);
    }
    handleFilterChange (event) {
        this.setState({filterQuery: event.target.value});
    }
    handleFilterClear () {
        this.setState({filterQuery: ''});
    }
    getFilteredData () {
        return this.props.data.filter(dataItem =>
            dataItem.name.toLowerCase().indexOf(this.state.filterQuery.toLowerCase()) !== -1);
    }
    getTranslation (item) {
        return (('name_i18n' in item) && (this.props.locale in item.name_i18n)) ?
            item.name_i18n[this.props.locale] :
            item.name;
    }
    render () {
        return (
            <ModalComponent
                className={styles.modalContent}
                contentLabel={this.props.title}
                filterQuery={this.state.filterQuery}
                onFilterChange={this.handleFilterChange}
                onFilterClear={this.handleFilterClear}
                onRequestClose={this.props.onRequestClose}
            >
                <div className={styles.libraryScrollGrid}>
                    {this.getFilteredData().map((dataItem, index) => {
                        const scratchURL = dataItem.md5 ?
                            (dataItem.addons ?
                                `https://static.mmcode.org/${dataItem.md5}?origin=${encodeURIComponent(window.location.origin)}` :
                                `https://cdn.assets.scratch.mit.edu/internalapi/asset/${dataItem.md5}/get/`
                            ) :
                            dataItem.rawURL;
                        return (
                            <LibraryItem
                                iconURL={scratchURL}
                                id={index}
                                key={`item_${index}`}
                                name={this.getTranslation(dataItem)}
                                onMouseEnter={this.handleMouseEnter}
                                onMouseLeave={this.handleMouseLeave}
                                onSelect={this.handleSelect}
                            />
                        );
                    })}
                </div>
            </ModalComponent>
        );
    }
}

LibraryComponent.propTypes = {
    data: PropTypes.arrayOf(
        /* eslint-disable react/no-unused-prop-types, lines-around-comment */
        // An item in the library
        PropTypes.shape({
            // @todo remove md5/rawURL prop from library, refactor to use storage
            md5: PropTypes.string,
            name: PropTypes.string.isRequired,
            rawURL: PropTypes.string
        })
        /* eslint-enable react/no-unused-prop-types, lines-around-comment */
    ),
    locale: PropTypes.string,
    onItemMouseEnter: PropTypes.func,
    onItemMouseLeave: PropTypes.func,
    onItemSelected: PropTypes.func,
    onRequestClose: PropTypes.func,
    title: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    locale: state.intl.locale
});

export default connect(
    mapStateToProps,
    () => ({}) // omit dispatch prop
)(LibraryComponent);
