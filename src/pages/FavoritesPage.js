import React from 'react';
import FavoriteMovies from '../components/FavoriteMovies';

// `FavoritesPage` Component
//  * 
//  * This component represents a page dedicated to displaying a user's favorite movies.
//  * It renders the `FavoriteMovies` component and passes down the relevant props for
//  * managing and displaying the user's favorite movies.

const FavoritesPage = ({ favoriteMovies, onFavoriteToggle }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      
       {/* Render the FavoriteMovies component with necessary props */}
      <FavoriteMovies favoriteMovies={favoriteMovies} onFavoriteToggle={onFavoriteToggle} />
    </div>
  );
};

export default FavoritesPage;
