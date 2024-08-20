import React from 'react';
import MovieList from './MovieList';

// `FavoriteMovies` Component
//  * 
//  * This component is responsible for rendering a list of favorite movies.
//  * It receives a list of favorite movies and a function to toggle the favorite status
//  * of movies as props. It uses the `MovieList` component to display the list.

const FavoriteMovies = ({ favoriteMovies, onFavoriteToggle }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

       {/* Heading for the favorite movies section */}

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Favorite Movies</h2>

         {/* MovieList component displays the list of favorite movies */}
         
      <MovieList movies={favoriteMovies} onFavoriteToggle={onFavoriteToggle} favoriteMovies={favoriteMovies} />
    </div>
  );
};

export default FavoriteMovies;
