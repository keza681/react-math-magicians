/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Calculator from './component/Calculator';
import Quote from './component/Quote';
import NavBar from './component/NavBar';

function App() {
  return (
    <div className="mainDiv">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </div>
  );
}
export default App;
