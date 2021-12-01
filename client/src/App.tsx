import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'modules/Home/Home';

import Navigation from 'library/common/components/Toolbar/Navigation';
import LanguageSwitcher from 'library/common/components/LanguageSwitcher';
import Login from 'modules/Login/Login';
import Register from 'modules/Register/Register';

const App = () => {
  return (
    <>
      <LanguageSwitcher />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
