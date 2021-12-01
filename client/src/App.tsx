import React from 'react';
import LanguageSwitcher from './library/common/components/LanguageSwitcher';

//? translation lib
import { useTranslation } from 'react-i18next';
const App = () => {
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
