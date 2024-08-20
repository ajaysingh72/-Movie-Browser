# Movie Browser

A movie browsing application built with React and Tailwind CSS. Users can search for movies by genre and release year, and manage a list of their favorite movies.

## Features

- **Search by Genre and Release Year**: Filter movies based on selected genres and release year ranges.
- **Favorite Movies**: Add and remove movies from your list of favorites.
- **Responsive Design**: The application is fully responsive and works on all devices.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Integration](#api-integration)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [License](#license)

## Installation
1. ### Clone the repository:
   ```bash
   git clone https://github.com/ajaysingh72/movie-browser.git```

### 2.Project Setup:
  #### 2.1 Initialize React Project:
  ` npx create-react-app movie-browser`
  
#### 2.2 Navigate to the project directory:
   `cd movie-browser`

  #### 2.3 Install Dependencies:
 ` npm install axios react-router-dom @mui/material @emotion/react @emotion/styled`

## Project Structure
```
movie-browser/
├── public/                              # Static files
├── src/                                 # Source code
│   ├── components/                      # React components
│   │   ├── MovieCard.js                 # MovieCard component
│   │   ├── MovieList.js                 # MovieList component
│   │   ├── SearchBar.js                 # SearchBar component
│   │   ├── Filters.js                   # Filters component
│   │   ├── FavoriteMovies.js            # FavoriteMovies component
│   ├── pages/                           # Page components
│   │   ├── HomePage.js                  # Home page component
│   │   ├── FavoritesPage.js             # Favorites page component
│   ├── App.js                           # Main App component
│   ├── index.js                         # Entry point for React
│   ├── api.js                           # API integration file
│   └── styles.css                       # Global styles
├── .gitignore                           # Git ignore file
├── README.md                            # Project documentation
├── package.json                         # NPM package configuration
├── tailwind.config.js                   # Tailwind CSS configuration
└── postcss.config.js                    # PostCSS configuration
```

## Usage

+ Filtering Movies: Use the genre dropdown and year range slider to filter movies.
- Managing Favorites: Click on the star icon to add or remove movies from your favorites list.
+ Navigating the App: Use the navbar to switch between different sections of the app.


## Start the development server:
`npm start`

## Access the application:
+ Open http://localhost:3000 with your browser to see the application.

 ## Components
 ### Filters
+ Provides UI for filtering movies by genre and release year.
- Fetches genre data from an external API.
### MovieList
+ Displays a list of movies based on the applied filters.
### FavoriteMovies
+ Renders a list of favorite movies with an option to remove them from the list.
### SearchBar
+ Allows users to search for movies by title.
### MovieCard
+ Displays individual movie details like title, release year, and genre.


## API Integration
The application integrates with a movie database API to fetch movie details and genres. The API functions are defined in the src/api.js file.

## Screenshots
Here are some screenshots that demonstrates how the website works:



## Technologies Used
+ React: JavaScript library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for styling.
+ Axios: HTTP client for making API requests.
- Git: Version control system.


## License
   This project is licensed under the MIT License. See the LICENSE file for more details.


### Steps to Set Up the Repository on GitHub

1. **Create a GitHub Repository:**
   - Go to GitHub and create a new repository.
   - Name it `movie-browser` (or any name you prefer).

2. **Push the Project to GitHub:**
   - Run the following commands in terminal:

   ```bash
   git remote add origin https://github.com/your-username/movie-browser.git
   git branch -M main
   git push -u origin main


### Verify on GitHub:

Go to your GitHub repository to verify that the files have been uploaded.

