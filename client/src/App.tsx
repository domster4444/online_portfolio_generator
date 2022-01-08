/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-wrap-multilines */

// lib
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';

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
import Profile from 'modules/Welcome/Pages/Profile/Profile';
import Payment from 'modules/Welcome/Pages/Payment/Payment';

// themes
import FirstTheme from 'themes/1FirstTheme/FirstTheme';

const App = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state: RootStateOrAny) => state.login);
  useEffect(() => {
    if (loggedInUser !== null) {
      navigate('/welcome');
    }
  }, []);
  return (
    <>
      <LanguageSwitcher />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
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
