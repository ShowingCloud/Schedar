import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import ButtonComponent from '../button/button.jsx';
import ShareModal from '../share-modal/share-modal.jsx';

import {
    openShareProject
} from '../../reducers/modals';

const ShareButtonComponent = props => {
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

ShareButtonComponent.propTypes = {
    className: PropTypes.string.isRequired,
    imgClassName: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    onShareProject: PropTypes.func.isRequired,
    shareProjectVisible: PropTypes.bool
};

const mapStateToProps = state => ({
    shareProjectVisible: state.modals.shareProject
});

const mapDispatchToProps = dispatch => ({
    onShareProject: () => {
        dispatch(openShareProject());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareButtonComponent);
