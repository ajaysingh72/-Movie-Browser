import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../api';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';

// `HomePage` Component
// *
// * The `HomePage` component represents the main page of the application where users can
// * search for movies, apply filters, and view a list of movies. It manages the state 
// * for the list of movies, search query, and pagination. The component fetches movies 
// * based on the search query and page number, and it handles user interactions such 
// * as searching and filtering movies.

const HomePage = ({ onFavoriteToggle, favoriteMovies }) => {

  // State to hold the list of movies
  const [movies, setMovies] = useState([]);

  // State to hold the current search query
  const [query, setQuery] = useState('');

  // State to manage pagination
  const [page, setPage] = useState(1);

  // State to determine if more movies can be loaded
  const [hasMore, setHasMore] = useState(true);

  /**
   * Loads movies based on the current search query and page number.
   * Updates the movies state with the newly fetched movies and manages 
   * pagination state based on the total number of pages.
   */
  const loadMovies = async () => {
    try {
      const data = await fetchMovies(query, page);
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setHasMore(data.page < data.total_pages);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
      // Optionally set `hasMore` to false to stop further fetch attempts
      setHasMore(false);
    }
  };

  // Fetch movies whenever the query or page changes
  useEffect(() => {
    loadMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  /**
   * Handles search input changes by updating the query state,
   * resetting the movie list, and resetting the page to 1
   */
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setMovies([]);
    setPage(1);
  };

  /**
   * Handles filter changes. This is a placeholder for actual filtering logic
   * which needs to be implemented based on the application's requirements.
   */
  const handleFilter = (filters) => {
    // Implement filtering logic here
  };

  return (
    <div className="p-5">

      {/* Render the search bar with the handleSearch callback */}
      <SearchBar onSearch={handleSearch} />

      {/* Render the filters component with the handleFilter callback */}
      <Filters onFilter={handleFilter} />

      {/* Render the list of movies */}
      <MovieList movies={movies} onFavoriteToggle={onFavoriteToggle} favoriteMovies={favoriteMovies} />

      {/* Render a button to load more movies if more are available */}
      {hasMore && (
        <button
          className="mt-5 p-2 bg-blue-500 text-white rounded"
          onClick={() => setPage(page + 1)}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default HomePage;
