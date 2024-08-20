import axios from 'axios';

// API Key for authenticating requests to The Movie Database (TMDb) API
const API_KEY = '7161faec1b3554e617991214a013e582';

// Base URL for TMDb API
const BASE_URL = 'https://api.themoviedb.org/3';

/** 
Fetches a list of movies from The Movie Database (TMDb) based on a search query.
 * 
 * This function makes a GET request to the TMDb API's search endpoint for movies.
 * It includes the API key for authentication, the search query, and the page number
 * for pagination. The function returns the data received from the API.
*/

export const fetchMovies = async (query, page = 1) => {
  try {

     // Making GET request to fetch movies
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,                // Search query
        page,                  // Page number for pagination
      },
    });
    return response.data;
  } catch (error) {

      // Logging error and rethrowing
    console.error('Failed to fetch movies:', error.message);
    throw error;
  }
};



/**
 * Fetches a list of genres from The Movie Database (TMDb) API.
 * 
 * This function makes a GET request to the TMDb API's genre endpoint. It includes
 * the API key for authentication. The function returns the list of genres received
 * from the API. 
 */

export const fetchGenres = async () => {
  try {

      // Making GET request to fetch genres
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: { api_key: API_KEY },
    });
    return response.data.genres;
  } catch (error) {

      // Logging error and rethrowing
    console.error('Failed to fetch genres:', error.message);
    throw error;
  }
};
