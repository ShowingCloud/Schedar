import localeDataEn from 'react-intl/locale-data/en';
import localeDataEs from 'react-intl/locale-data/es';
import localeDataFr from 'react-intl/locale-data/fr';
import localeDataZh from 'react-intl/locale-data/zh';
import localeDataAr from 'react-intl/locale-data/ar';
import localeDataDe from 'react-intl/locale-data/de';
import localeDataHe from 'react-intl/locale-data/he';

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
    },
    ar: {
        name: 'العربية',
        localeData: localeDataAr,
        messages: messages.ar
    },
    de: {
        name: 'Deutsch',
        localeData: localeDataDe,
        messages: messages.de
    },
    he: {
        name: 'עִבְרִית',
        localeData: localeDataHe,
        messages: messages.he
    }
};
