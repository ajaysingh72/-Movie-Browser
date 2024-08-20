import React from 'react';
import '../styles.css';

// `MovieCard` Component
// * 
// * This component displays a card for a movie, including its poster, title, and release year.
// * It also provides a button to toggle the movie's favorite status.

const MovieCard = ({ movie, onFavoriteToggle, isFavorite }) => {

  // Destructure movie details from props
  const { title, poster_path, release_date } = movie;

  // Generate the URL for the movie poster image
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w200${poster_path}`
    : 'https://via.placeholder.com/200x300';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out p-2 w-50">

      {/* Display the movie poster */}
      <img src={posterUrl} alt={title} className="w-full h-auto rounded-md" />

      {/* Display movie details and favorite button */}
      <div className="mt-3 p-2 bg-gray-100 rounded-lg">
        {/* Movie title */}
        <h3 className="text-sm font-semibold mb-1 truncate">{title}</h3>

        {/* Movie release year */}
        <p className="text-xs text-gray-600 mb-2">{new Date(release_date).getFullYear()}</p>
        
        {/* Button to toggle favorite status */}
        <button
          onClick={() => onFavoriteToggle(movie)}
          className={`text-xs px-2 py-1 rounded ${isFavorite ? 'bg-red-500' : 'bg-blue-500'} text-white transition-colors duration-300 ease-in-out`}
        >
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
