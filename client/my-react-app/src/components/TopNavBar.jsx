// components/TopNavbar.jsx
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './TopNavbar.css'; // Import your CSS file for styling

function TopNavbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Add logic for handling search here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="top-nav">
      <div >
        {/* <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer"> */}
        <img src={logo} className="logo" alt="App logo" />
        {/* </a> */}
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default TopNavbar;
