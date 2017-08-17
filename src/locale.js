import localeDataEn from 'react-intl/locale-data/en';
import localeDataEs from 'react-intl/locale-data/es';
import localeDataFr from 'react-intl/locale-data/fr';
import localeDataZh from 'react-intl/locale-data/zh';

import messages from '../locale/messages.json'; // eslint-disable-line import/no-unresolved

export default {
    en: {
        name: 'English',
        localeData: localeDataEn,
        messages: messages.en
    },
    es: {
        name: 'Español',
        localeData: localeDataEs,
        messages: messages.es
    },
    fr: {
        name: 'Français',
        localeData: localeDataFr,
        messages: messages.fr
    },
    zh: {
        name: '简体中文',
        localeData: localeDataZh,
        messages: messages.zh
    }
};
