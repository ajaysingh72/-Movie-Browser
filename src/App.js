import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import './styles.css';

/**
 * Main App component that handles routing and state management for favorite movies.
 * 
 * This component sets up the React Router for navigating between the Home and Favorites pages.
 * It also manages the state for favorite movies and synchronizes it with localStorage.
*/

const App = () => {

  // State to hold the list of favorite movies
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    try {

       // Load favorite movies from localStorage when the component mounts
      const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavoriteMovies(savedFavorites);
    } catch (error) {

        // Log any errors encountered while accessing localStorage
      console.error("Failed to access localStorage:", error);
      // Handle the error as needed, perhaps setting a default value or showing a message
    }
  }, []);

 /**
   * Toggles a movie's favorite status.
   * 
   * This function adds or removes a movie from the list of favorite movies. It also updates
   * the localStorage with the new list of favorite movies.
*/

  const handleFavoriteToggle = (movie) => {

    // Check if the movie is already in the list of favorite movies
    const isFavorite = favoriteMovies.some((favMovie) => favMovie.id === movie.id);

    // Update the list of favorite movies based on the current status
    const updatedFavorites = isFavorite
      ? favoriteMovies.filter((favMovie) => favMovie.id !== movie.id)
      : [...favoriteMovies, movie];

      // Update the state with the new list of favorite movies
    setFavoriteMovies(updatedFavorites);
    try {

      // Save the updated list of favorite movies to localStorage
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {

      // Log any errors encountered while updating localStorage
      console.error("Failed to update localStorage:", error);
      // Handle the error as needed
    }
  };

  return (
    <Router>
      <div className="app bg-gray-100 min-h-screen">

        {/* Navigation Bar */}
        <nav className="bg-blue-500 p-4 text-white">
          <div className="container mx-auto flex justify-between">
            <Link to="/" className="font-semibold hover:text-gray-300">Home</Link>
            <Link to="/favorites" className="font-semibold hover:text-gray-300">Favorites</Link>
          </div>
        </nav>

        {/* Page Content */}
        <div className="container mx-auto p-4">
          <Routes>

            {/* Home Page Route */}
            <Route
              path="/"
              element={<HomePage onFavoriteToggle={handleFavoriteToggle} favoriteMovies={favoriteMovies} />}
            />
            
            {/* Favorites Page Route */}
            <Route
              path="/favorites"
              element={<FavoritesPage onFavoriteToggle={handleFavoriteToggle} favoriteMovies={favoriteMovies} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
