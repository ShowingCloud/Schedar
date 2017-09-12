import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import ButtonComponent from '../components/button/button.jsx';
import ShareModal from './share-modal.jsx';

import {
    openShareProject
} from '../reducers/modals';

class ShareButton extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            qrcode: null
        };
    }
    render () {
        const {
            className,
            imgClassName,
            imgSrc,
            onShareProject,
            shareProjectVisible,
            ...props
        } = this.props;

        return (
            <span
                className={className}
                {...props}
            >
                <ButtonComponent
                    onClick={onShareProject}
                    {...props}
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
    }
}

ShareButton.propTypes = {
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
)(ShareButton);
