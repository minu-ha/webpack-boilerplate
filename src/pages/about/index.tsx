import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Language {
  [key: string]: {
    nativeName: string;
  };
}

const languages: Language = {
  en: { nativeName: 'English' },
  kr: { nativeName: 'Korea' },
};

const Index: FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <p>{t('title', { name: 'John' })}</p>
        <p>{t('description.part1')}</p>
        <p>{t('description.part2')}</p>
      </div>
      <div>
        {Object.keys(languages).map(language => (
          <button
            key={language}
            type={'submit'}
            onClick={() => i18n.changeLanguage(language)}
          >
            {languages[language].nativeName}
          </button>
        ))}
      </div>
    </>
  );
};

export default Index;
