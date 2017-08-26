import PropTypes from 'prop-types';
import React from 'react';
import Box from '../box/box.jsx';
import Modal from '../modal/modal.jsx';
import styles from './share-modal.css';

const ShareModal = props => (
    <Modal
        visible
        className={styles.modalContent}
        contentLabel={'Share Your Project'}
        onRequestClose={props.onCancel}
    >
        <Box className={styles.body}>
        </Box>
    </Modal>
);

ShareModal.propTypes = {
    onCancel: PropTypes.func.isRequired
};

export default ShareModal;
