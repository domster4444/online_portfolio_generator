import React from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from 'library/common/components/Toolbar/Navigation';
import LanguageSwitcher from './library/common/components/LanguageSwitcher';

// eslint-disable-next-line func-names
const App = function () {
  //* react international lang  middleware
  const { t } = useTranslation();
  return (
    <>
      <Navigation />
      <LanguageSwitcher />
      {t('loginRegisterPage.descritpionParagraph.firstLine')}
    </>
  );
};

export default App;
