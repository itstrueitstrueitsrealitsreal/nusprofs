// components/TopNavbar.jsx
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './TopNavbar.css'; // Import your CSS file for styling

const allProfessors = [
  // Add your list of professors here
  { id: 1, name: 'Professor A' },
  { id: 2, name: 'Professor B' },
  // ...
];

function TopNavbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const filterProfessors = (query) => {
    const filteredProfessors = allProfessors.filter((professor) =>
      professor.name.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredProfessors);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterProfessors(query);
  };

  const handleSearch = () => {
    // Add logic for handling search here
    console.log('Searching for:', searchQuery);
  };

  return (
    // <div className="top-nav">
    //   <div >
    //     <img src={logo} className="logo" alt="App logo" />
    //   </div>
    //   <div className="search-bar">
    //   <input
    //       type="text"
    //       placeholder="Search Professor's Name"
    //       value={searchQuery}
    //       onChange={(e) => setSearchQuery(e.target.value)}
    //       className="search-input" 
    //     />
    //     <button onClick={handleSearch}>Search</button>
    //   </div>
    // </div>
    <div className="top-nav">
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Professor's Name"
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display filtered suggestions */}
      <div className="suggestions">
        {suggestions.map((professor) => (
          <div key={professor.name}>{professor.name}</div>
        ))}
      </div>
  </div>
  );
}

export default TopNavbar;
