import React, { useState } from 'react';

const AdvancedSearch = () => {
  const [searchParams, setSearchParams] = useState({
    destination: '',
    date: '',
    airline: '',
    class: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = () => {
    // Implement search logic
  };

  return (
    <div>
      <h3>Advanced Flight Search</h3>
      <form>
        <label>
          Destination:
          <input type="text" name="destination" value={searchParams.destination} onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={searchParams.date} onChange={handleChange} />
        </label>
        <label>
          Airline:
          <input type="text" name="airline" value={searchParams.airline} onChange={handleChange} />
        </label>
        <label>
          Class:
          <select name="class" value={searchParams.class} onChange={handleChange}>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
        </label>
        <button type="button" onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
};

export default AdvancedSearch;
