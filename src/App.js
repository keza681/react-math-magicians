import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import NavBar from './components/NavBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
}
