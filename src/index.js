import * as React from "react";
import './style.css'
import './fa.css'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Error from './pages/error/Error'


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<Error />} />
        <Route path="/*" element={<Navigate to="/404" />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
