import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <h1>
        Math Magicians
      </h1>
      <ul className="navUl">
        <li className="navli"><Link to="/"><span>Home</span></Link></li>
        <span>|</span>
        <li className="navli"><Link to="/Calculator"><span>Calculator</span></Link></li>
        <span>|</span>
        <li className="navli"><Link to="/Quote"><span>Quote</span></Link></li>
      </ul>
    </nav>
  );
}
