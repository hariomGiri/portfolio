import React from 'react';
import logo from '../assets/images/logo.png'; // Ensure this path is correct
import './Loader.css'; // Import the CSS file

const Loader = () => {
  return (
    <div className="loader">
      <div className="gradient-wave"></div>
      <img src={logo} alt="Loading..." className="logo" />
    </div>
  );
};

export default Loader; 