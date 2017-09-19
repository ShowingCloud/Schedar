import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import xhr from 'xhr';

import costumeLibraryContent from '../lib/libraries/costumes.json';
import LibraryComponent from '../components/library/library.jsx';


class CostumeLibrary extends React.PureComponent {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleItemSelected'
        ]);

        xhr({
            uri: `https://static.mmcode.org/remote_costumes.json?origin=${window.location.origin}`,
            json: true,
            useXDR: true
        }, (err, res, body) => {
            if (!err && body) {
                this.setState({costumes: body.concat(costumeLibraryContent)});
            }
        });

        this.state = {
            costumes: costumeLibraryContent
        };
    }
    handleItemSelected (item) {
        const vmCostume = {
            name: item.name,
            rotationCenterX: item.info[0],
            rotationCenterY: item.info[1],
            bitmapResolution: item.info.length > 2 ? item.info[2] : 1,
            skinId: null
        };
        this.props.vm.addCostume(item.md5, vmCostume);
    }
    render () {
        return (
            <LibraryComponent
                data={this.state.costumes}
                title="Costume Library"
                onItemSelected={this.handleItemSelected}
                onRequestClose={this.props.onRequestClose}
            />
        );
    }
}

CostumeLibrary.propTypes = {
    onRequestClose: PropTypes.func,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default CostumeLibrary;
