import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import Box from '../box/box.jsx';
import Modal from '../modal/modal.jsx';
import styles from './share-modal.css';
import QRCodeImage from '../qrcode-image/qrcode-image.jsx';

import {
    closeShareProject
} from '../../reducers/modals';

const ShareModalComponent = props => (
    <Modal
        visible
        className={styles.modalContent}
        contentLabel={'Share Your Project'}
        onRequestClose={props.onClose}
    >
        <Box className={styles.body}>
            <QRCodeImage
                className={styles.qrcodeImage}
                content="http://www.google.com"
                height={550}
                width={550}
            />
        </Box>
    </Modal>
);

ShareModalComponent.propTypes = {
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
)(ShareModalComponent);
