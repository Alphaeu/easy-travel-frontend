// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Searching for:', query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search flights, destinations, etc."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
