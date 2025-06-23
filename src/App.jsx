import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/authPage/Login';
import ForgotPassword from './pages/authPage/ForgotPassword';
import VerifyEmail from './pages/authPage/VerifyEmail';
import UpdatePassword from './pages/authPage/updatePassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/update-password/:token" element={<UpdatePassword/>} />
        <Route path="/" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
      </Routes>
    </Router>
  );
};

export default App;
