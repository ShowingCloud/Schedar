import PropTypes from 'prop-types';
import React from 'react';

import ButtonComponent from '../button/button.jsx';

import styles from './load-button.css';

const LoadButtonComponent = ({
    inputRef,
    onChange,
    onClick,
    imgSrc,
    imgClassName,
    className,
    ...props
}) => (
    <span
        className={className}
        {...props}
    >
        <ButtonComponent onClick={onClick}>
            <img
                className={imgClassName}
                src={imgSrc}
            />
        </ButtonComponent>
        <input
            className={styles.fileInput}
            ref={inputRef}
            type="file"
            onChange={onChange}
        />
    </span>
);

LoadButtonComponent.propTypes = {
    className: PropTypes.string,
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgClassName: PropTypes.string.isRequired
};
LoadButtonComponent.defaultProps = {
};
export default LoadButtonComponent;
