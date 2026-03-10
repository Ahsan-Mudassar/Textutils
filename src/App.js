// @ts-nocheck ;
import './App.css';

import Alert from './components/Alert';

import About from './components/About';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';

import { Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  // message: string aur type: string likhne se error chala jayega
  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      });
  };

  setTimeout(() => {
    setAlert(null);
  }, 1500);

  const toggletheme = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggletheme={toggletheme} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
