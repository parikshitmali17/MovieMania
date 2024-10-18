import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { useParams } from "react-router-dom";

function SearchMovie(props) {
  const { searchQuery } = useParams();
  const [searchMovies, setSearchMovies] = useState([]);
  console.log(searchQuery);
  // Replace with your actual Bearer token
 // const BEARER_TOKEN =process.env.REACT_APP_BEARER_TOKEN;
  const BEARER_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2ZlMGRkZDU4NDA3ZWNkOTJlZWNjNmJlOTQ3ZTg5NyIsIm5iZiI6MTcyODEyMzcxMi4wMzk2NzUsInN1YiI6IjY3MDEwY2VhZTg0ZWViMzVhMGY4NGFjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JWJ5ZJnUzG6w4EUT0hZD0GUVbkysPD_kqDKUeqXbuS0";
    
  // console.log(`props received ${props.pageNumber}`);
  // TMDb API base URL for popular movies
  const BASE_URL = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-IN&page=1`;

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        // Make an API request using Axios and pass the Bearer token in the headers
        const response = await axios.get(BASE_URL, {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`, // Pass the Bearer token
          },
        });
        // Set the movie data in state
        setSearchMovies(response.data.results);
        //console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchSearchMovies();
  }, [searchQuery, props.pageNumber]); // Empty array ensures the effect runs only once when the component mounts

  return (
    <div>
      {searchMovies.length === 0 ? (
        <h1 className="searchMovieHeading">No Results Found</h1>
      ) : (
        <h1 className="searchMovieHeading"> Search Results..</h1>
      )}

      {searchMovies.map((movie) => {
        return (
          <Cards
            key={movie.id}
            id={movie.id}
            imgLink={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
            mName={movie.original_title}
            rating={movie.vote_average}
          />
        );
      })}
    </div>
  );
}

export default SearchMovie;
