import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import ShareModalComponent from '../components/share-modal/share-modal.jsx';

import {
    closeShareProject
} from '../reducers/modals';

class ShareModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleCancel'
        ]);
    }
    handleCancel () {
        this.props.onClose();
    }
    render () {
        return (
            <ShareModalComponent
                onCancel={this.handleCancel}
            />
        );
    }
}

ShareModal.propTypes = {
    onClose: PropTypes.func
};

const mapStateToProps = state => ({
    visible: state.modals.shareProject
});

const mapDispatchToProps = dispatch => ({
    onClose: () => {
        dispatch(closeShareProject());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareModal);
