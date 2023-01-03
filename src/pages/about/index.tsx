import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

type Language<T extends string> = {
  [key in T]: {
    nativeName: T;
  };
};

const Index: FC = () => {
  const { t, i18n } = useTranslation();

  const languages: Language<string> = {
    en: { nativeName: 'English' },
    kr: { nativeName: 'Korea' },
  };

  const changeLanguageHandler = (language: string) => {
    return i18n.changeLanguage(language);
  };

  return (
    <>
      <div>
        <p>{t('title', { name: 'John' })}</p>
        <p>{t('description.part1')}</p>
        <p>{t('description.part2')}</p>
      </div>
      <div>{t('footer.date', { date: new Date() })}</div>
      <div>
        {Object.keys(languages).map(language => (
          <button
            key={language}
            type={'submit'}
            onClick={() => changeLanguageHandler(language)}
          >
            {languages[language].nativeName}
          </button>
        ))}
      </div>
    </>
  );
};

export default Index;
