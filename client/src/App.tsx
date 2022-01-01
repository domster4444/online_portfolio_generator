/* eslint-disable react/jsx-wrap-multilines */

// lib
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from 'modules/Home/Home';

// commons
import Navigation from 'library/common/components/Toolbar/Navigation';
import LanguageSwitcher from 'library/common/components/LanguageSwitcher';
import Login from 'modules/Login/Login';
import Register from 'modules/Register/Register';
import Welcome from 'modules/Welcome/Welcome';
import PasswordResetFormEmail from 'modules/PasswordResetFormEmail/PasswordResetFormEmail';
import PasswordResetFormPassword from 'modules/PasswordResetFormPassword/PasswordResetFormPassword';
import Footer from 'library/common/components/Footer/Footer';
import ChatBox from 'library/common/components/ChatBox/ChatBox';

// themes
import FirstTheme from 'themes/1FirstTheme/FirstTheme';

const App = () => {
  return (
    <>
      <LanguageSwitcher />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route
          path="/passwordresetformemail"
          element={<PasswordResetFormEmail />}
        />
        <Route
          path="/password/reset/:token"
          // @ts-ignore
          element={<PasswordResetFormPassword />}
        />
        <Route path="/first-theme" element={<FirstTheme />} />
      </Routes>
      <Footer />
      <ChatBox />
    </>
  );
};

export default App;
