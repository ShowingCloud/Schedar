import classNames from 'classnames';
import React from 'react';

import Box from '../box/box.jsx';
import LoadButton from '../../containers/load-button.jsx';
import SaveButton from '../../containers/save-button.jsx';
import LanguageSelector from '../../containers/language-selector.jsx';

import styles from './menu-bar.css';
import mammothLogo from './mammoth-logo.svg';

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
            <SaveButton className={styles.menuItem} />
            <LoadButton className={styles.menuItem} />
        </Box>
    );
};

export default MenuBar;
