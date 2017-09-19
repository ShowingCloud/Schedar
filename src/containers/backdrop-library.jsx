import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import xhr from 'xhr';

import backdropLibraryContent from '../lib/libraries/backdrops.json';
import LibraryComponent from '../components/library/library.jsx';


class BackdropLibrary extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleItemSelect'
        ]);

        xhr({
            uri: `https://static.mmcode.org/remote_backdrops.json?origin=${window.location.origin}`,
            json: true,
            useXDR: true
        }, (err, res, body) => {
            if (!err && body) {
                this.setState({backdrops: body.concat(backdropLibraryContent)});
            }
        });

        this.state = {
            backdrops: backdropLibraryContent
        };
    }
    handleItemSelect (item) {
        const vmBackdrop = {
            name: item.name,
            rotationCenterX: item.info[0] && item.info[0] / 2,
            rotationCenterY: item.info[1] && item.info[1] / 2,
            bitmapResolution: item.info.length > 2 ? item.info[2] : 1,
            skinId: null
        };
        this.props.vm.addBackdrop(item.md5, vmBackdrop);
    }
    render () {
        return (
            <LibraryComponent
                data={this.state.backdrops}
                title="Backdrop Library"
                onItemSelected={this.handleItemSelect}
                onRequestClose={this.props.onRequestClose}
            />
        );
    }
}

BackdropLibrary.propTypes = {
    onRequestClose: PropTypes.func,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default BackdropLibrary;
