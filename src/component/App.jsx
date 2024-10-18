
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DiscoverMovie from "./DiscoverMovie";
import BasicPagination from "./BasicPagination";
import MovieDetails from "./MovieDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SearchMovie from "./SearchMovie";
import TrendingMovie from "./TrendingMovie";
import { FavoritesProvider } from "./FavoritesContext";
import FavoritesMovies from "./FavoritesMovies";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

// Main Component
function Main() {
  const location = useLocation(); // Use location after Router is declared

  return (
    <div>
      <FavoritesProvider>
        <Header />
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<DiscoverMovie />} /> {/* Movie list page */}
          <Route path="/movie/:movieId" element={<MovieDetails />} />{" "}
          {/* Movie details page */}
          <Route path="/search/:searchQuery" element={<SearchMovie />} />
          <Route path="/trending" element={<TrendingMovie />} />{" "}
          <Route path="/favorites" element={<FavoritesMovies />} />{" "}
          {/* Favorites Page */}
        </Routes>

        {/* Conditionally render components only on the home page */}
        {location.pathname === "/" && (
          <>
            <BasicPagination />
            <Footer />
          </>
        )}
      </FavoritesProvider>
    </div>
  );
}

export default App;
