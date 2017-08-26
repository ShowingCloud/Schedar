import classNames from 'classnames';
import React from 'react';

import Box from '../box/box.jsx';
import LoadButton from '../../containers/load-button.jsx';
import SaveButton from '../../containers/save-button.jsx';
import ShareButton from '../../containers/share-button.jsx';
import LanguageSelector from '../../containers/language-selector.jsx';

import styles from './menu-bar.css';
import mammothLogo from './mammoth-logo.svg';
import loadButtonIcon from './icon--load-button.svg';
import saveButtonIcon from './icon--save-button.svg';
import shareButtonIcon from './icon--share-button.svg';

const MenuBar = function MenuBar () {
    return (
        <Box
            className={classNames({
                [styles.menuBar]: true
            })}
        >
            <div className={classNames(styles.logoWrapper, styles.menuItem)}>
                <img
                    className={styles.mammothLogo}
                    src={mammothLogo}
                />
            </div>
            <LanguageSelector className={styles.menuItem} />
            <SaveButton imgSrc={saveButtonIcon} imgClassName={styles.iconMenuItem} className={styles.menuItem} />
            <LoadButton imgSrc={loadButtonIcon} imgClassName={styles.iconMenuItem} className={styles.menuItem} />
            <ShareButton imgSrc={shareButtonIcon} imgClassName={styles.iconMenuItem} className={styles.menuItem} />
        </Box>
    );
};

export default MenuBar;
