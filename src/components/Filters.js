import React, { useState, useEffect } from 'react';
import { fetchGenres } from '../api';

// Filters` Component
//  * 
//  * This component provides a user interface for filtering movies based on genre and release year range.
//  * It allows users to select a genre from a dropdown list and adjust a range slider to specify a release year range.
//  * The component fetches genre data from an external API and updates the filter criteria based on user input.
//  *

const Filters = ({ onFilter }) => {

  // State to store the list of genres fetched from the API
  const [genres, setGenres] = useState([]);

  // State to store the currently selected genre
  const [selectedGenre, setSelectedGenre] = useState('');

  // State to store the selected range of release years
  const [releaseYearRange, setReleaseYearRange] = useState([1990, 2024]);

  // Fetch genres when the component mounts
  useEffect(() => {
    const loadGenres = async () => {
      // Fetch the list of genres from the API
      const genreList = await fetchGenres();
      setGenres(genreList);
    };
    loadGenres();
  }, []);

  // Handle change in selected genre
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    onFilter({ genre: e.target.value, releaseYearRange });
  };

  // Handle change in release year range
  const handleReleaseYearChange = (e) => {
    const range = e.target.value.split(',').map(Number);
    setReleaseYearRange(range);
    onFilter({ genre: selectedGenre, releaseYearRange: range });
  };

  return (
    <div className="filters p-4">
      {/* Dropdown to select a genre */}
      
        <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">
          Genre
        </label>
        <select
          id="genre"
          value={selectedGenre}
          onChange={handleGenreChange}
          className="w-100 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      
      
      {/* Range slider to select release year range */}
        {/* Range slider to select release year range */}
        <input
        type="range"
        min="1990"
        max="2024"
        value={releaseYearRange.join(',')}
        onChange={handleReleaseYearChange}
        step="1"
      />
      <span>{releaseYearRange.join(' - ')}</span>
    </div>
  );
};

export default Filters;
