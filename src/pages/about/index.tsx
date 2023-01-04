import SelectLanguage from 'components/common/SelectLanguage';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Index: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SelectLanguage />
      <div>
        <p>{t('title', { name: 'John' })}</p>
        <p>{t('description.part1')}</p>
        <p>{t('description.part2')}</p>
      </div>
      <div>{t('footer.date', { date: new Date() })}</div>
    </>
  );
};

export default Index;
