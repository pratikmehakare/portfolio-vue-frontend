import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/authPage/Login';
import ForgotPassword from './pages/authPage/ForgotPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
      </Routes>
    </Router>
  );
};

export default App;
