import PropTypes from 'prop-types';
import React from 'react';
import Box from '../box/box.jsx';
import Modal from '../modal/modal.jsx';
import styles from './share-modal.css';
import QRCodeImage from '../qrcode-image/qrcode-image.jsx';

const ShareModal = props => (
    <Modal
        visible
        className={styles.modalContent}
        contentLabel={'Share Your Project'}
        onRequestClose={props.onCancel}
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

ShareModal.propTypes = {
    onCancel: PropTypes.func.isRequired
};

export default ShareModal;
