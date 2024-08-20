import React from 'react';
import MovieCard from './MovieCard';

// `MovieList` Component
//  * This component renders a list of `MovieCard` components, each representing a movie.
//  * It iterates over the array of movies and passes relevant props to each `MovieCard`.

const MovieList = ({ movies, onFavoriteToggle, favoriteMovies }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

      {/* Render a MovieCard for each movie in the movies array */}

      {movies.map((movie) => (
        <MovieCard
          key={movie.id}    // Unique key for each MovieCard component
          movie={movie}     // Pass the movie object as a prop
          onFavoriteToggle={onFavoriteToggle}     // Pass the callback to handle favorite toggling
          isFavorite={favoriteMovies.some(favMovie => favMovie.id === movie.id)}      // Check if the movie is a favorite
        />
      ))}
    </div>
  );
};

export default MovieList;
