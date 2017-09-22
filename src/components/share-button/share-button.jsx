import PropTypes from 'prop-types';
import React from 'react';

import ButtonComponent from '../button/button.jsx';
import ShareModal from '../../containers/share-modal.jsx';

const ShareButton = props => {
    const {
        className,
        imgClassName,
        imgSrc,
        onShareProject,
        shareProjectVisible,
        ...componentProps
    } = props;

    return (
        <span
            className={className}
            {...componentProps}
        >
            <ButtonComponent
                onClick={onShareProject}
                {...componentProps}
            >
                <img
                    className={imgClassName}
                    src={imgSrc}
                />
            </ButtonComponent>
            {shareProjectVisible ? (
                <ShareModal />
            ) : null}
        </span>
    );
};

ShareButton.propTypes = {
    className: PropTypes.string.isRequired,
    imgClassName: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    onShareProject: PropTypes.func.isRequired,
    shareProjectVisible: PropTypes.bool
};

export default ShareButton;
