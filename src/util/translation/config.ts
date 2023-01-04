import i18next from 'i18next';
import Detector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line import/no-named-as-default-member
i18next
  .use(Backend)
  .use(Detector)
  .use(initReactI18next)
  .init({
    debug: true,
    detection: { caches: ['localStorage', 'cookie'] },
    fallbackLng: ['kr', 'en'],
  });
