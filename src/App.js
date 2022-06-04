import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import ConfigState from './context/config/ConfigState';

import './App.css';

const App = () => {
  return (
    <ConfigState>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ConfigState>
  );
};

export default App;
