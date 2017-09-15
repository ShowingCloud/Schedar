import PropTypes from 'prop-types';
import React from 'react';
import log from '../../lib/log';
import QRCode from 'qrcode';

class QRCodeImage extends React.Component {
    componentDidMount () {
        this.load();
    }
    componentDidUpdate () {
        this.load();
    }
    load () {
        const content = this.props.content;

        QRCode.toDataURL(content, (err, url) => {
            if (err) log.error(err);
            else this.image.src = url;
        });
    }
    render () {
        return (
            <img
                className={this.props.className}
                height={this.props.height}
                width={this.props.width}
                ref={c => (this.image = c)} // eslint-disable-line react/jsx-sort-props
            />
        );
    }
}

QRCodeImage.defaultProps = {
    width: 550,
    height: 550
};

QRCodeImage.propTypes = {
    className: PropTypes.string,
    content: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number
};

export default QRCodeImage;
