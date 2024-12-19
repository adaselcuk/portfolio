import React from 'react';
import './VerticalNavbar.css';

const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      <div className="line"></div>
      <ul className="menu">
        <li>
          <span className="dot"></span>
          <a href="#about">about</a>
        </li>
        <li>
          <span className="dot"></span>
          <a href="#projects">projects</a>
        </li>
        <li>
          <span className="dot"></span>
          <a href="#notes">notes</a>
        </li>
        <li>
          <span className="dot"></span>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default VerticalNavbar;
