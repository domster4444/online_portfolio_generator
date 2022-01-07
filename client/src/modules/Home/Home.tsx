import React from 'react';

import { useTranslation } from 'react-i18next';

const Home = () => {
  //* react international lang  middleware
  const { t } = useTranslation();
  return <div>{t('loginRegisterPage.descritpionParagraph.firstLine')}</div>;
};

export default Home;
