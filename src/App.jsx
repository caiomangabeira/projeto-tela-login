import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Registro from './Components/Registro/Registro';
import Home from './Components/Home/Home';

function App() {

  return (
    <Router basename="/projeto-tela-login">
      <div className="divapp">
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App