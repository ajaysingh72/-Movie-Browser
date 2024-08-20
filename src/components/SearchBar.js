import React, { useState } from 'react';

// `SearchBar` Component
//  * 
//  * This component provides a search input field for users to search for movies.
//  * It maintains the current search query in its state and calls the `onSearch` 
//  * callback with the updated query whenever the input value changes.
 

const SearchBar = ({ onSearch }) => {

   // State to keep track of the current search query
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);          // Update the query state with the input value
    onSearch(e.target.value);          // Call the onSearch callback with the new query

  };

  return (
    <input
      type="text"                             // Input type for text search
      placeholder="Search for a movie..."     // Placeholder text for the input field
      value={query}                           // Controlled value of the input field
      onChange={handleInputChange}            // Event handler for input changes
      className="w-100 p-3 text-sm rounded-lg border border-gray-500 
      focus:outline-5 focus:border-blue-500 focus:ring focus:ring-blue-200 
      transition-colors duration-300 ease-in-out shadow-sm mb-4"                  // CSS class for styling the input field
    />
  );
};

export default SearchBar;
