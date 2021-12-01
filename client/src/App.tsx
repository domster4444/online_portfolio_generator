import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './library/common/components/LanguageSwitcher';
// eslint-disable-next-line func-names
const App = function () {
  //* react international lang  middleware
  const { t } = useTranslation();

  return (
    <>
      <LanguageSwitcher />
      {t('loginRegisterPage.descritpionParagraph.firstLine')}
    </>
  );
};

export default App;
