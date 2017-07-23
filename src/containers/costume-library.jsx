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

        this.fullCostumeLibraryContent = [];
        xhr({
            uri: `https://elephant-data.oss-cn-shanghai.aliyuncs.com/remote_costumes.json`,
            json: true
        }, (err, res, body) => {
            if (!err && body) {
                this.fullCostumeLibraryContent = body.concat(costumeLibraryContent);
            }
        });
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
                data={this.fullCostumeLibraryContent}
                title="Costume Library"
                visible={this.props.visible}
                onItemSelected={this.handleItemSelected}
                onRequestClose={this.props.onRequestClose}
            />
        );
    }
}

CostumeLibrary.propTypes = {
    onRequestClose: PropTypes.func,
    visible: PropTypes.bool,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default CostumeLibrary;
