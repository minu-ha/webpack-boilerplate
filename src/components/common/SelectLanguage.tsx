import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Language = {
  [key in string]: {
    nativeName: string;
  };
};

const languages: Language = {
  en: { nativeName: 'English' },
  kr: { nativeName: '한국어' },
} as const;

const SelectLanguage: FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguageHandler = (language: string) => {
    setSelectedLanguage(language);
    return i18n.changeLanguage(language);
  };

  return (
    <div>
      {t('selectLanguage')} :
      <select
        value={selectedLanguage}
        onChange={({ target: { value: language } }) =>
          changeLanguageHandler(language)
        }
      >
        {Object.entries(languages).map(([language, { nativeName }]) => (
          <option key={language} value={language}>
            {nativeName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectLanguage;
