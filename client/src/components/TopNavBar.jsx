// components/TopNavbar.jsx
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './TopNavbar.css'; // Import your CSS file for styling
// import ProfessorSearch from './ProfessorSearch.js';

function TopNavbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    // Add logic for handling search here
    console.log('Searching for:', searchQuery);
  };

  // useEffect(() => {
  //   const fetchSuggestions = async () => {
  //     const suggestions = await ProfessorService.getProfessorSuggestions(searchQuery);
  //     setSuggestions(suggestions);
  //   };

  //   if (searchQuery.trim() !== '') {
  //     fetchSuggestions();
  //   } else {
  //     setSuggestions([]);
  //   }
  // }, [searchQuery]);

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
          placeholder="Search Professor's Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input" 
        />
        {/* <div className="suggestions-container">
          {suggestions.map((professor) => (
            <div key={professor.id} className="suggestion-item" onClick={() => setSearchQuery(professor.name)}>
              {professor.name}
            </div>
          ))}
        </div> */}
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default TopNavbar;
