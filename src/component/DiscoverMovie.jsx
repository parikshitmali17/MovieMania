import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { pageNumber } from "./BasicPagination";
import  Style from '../assets/styles.css';

function DiscoverMovie(props) {
  const [movies, setMovies] = useState([]);
  console.log(`props :${props.pageNumber}`);

 //const BEARER_TOKEN =process.env.REACT_APP_BEARER_TOKEN;
 const BEARER_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2ZlMGRkZDU4NDA3ZWNkOTJlZWNjNmJlOTQ3ZTg5NyIsIm5iZiI6MTcyODEyMzcxMi4wMzk2NzUsInN1YiI6IjY3MDEwY2VhZTg0ZWViMzVhMGY4NGFjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JWJ5ZJnUzG6w4EUT0hZD0GUVbkysPD_kqDKUeqXbuS0";
 

  // TMDb API base URL for popular movies
  const BASE_URL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${
    props.pageNumber ? props.pageNumber : 1
  }&sort_by=popularity.desc&with_original_language=en`;

  useEffect(() => {
    if (props.pageNumber) {
      const fetchMovies = async () => {
        try {
          // Make an API request using Axios and pass the Bearer token in the headers
          const response = await axios.get(BASE_URL, {
            headers: {
              Authorization: `Bearer ${BEARER_TOKEN}`, // Pass the Bearer token
            },
          });
          // Set the movie data in state

          setMovies(response.data.results);
          //console.log(response.data.results);
          
        } catch (error) {
          console.error("Error fetching movie data:", error);
        }
      };
      console.log(`pagenumber is changing ${props.pageNumber}`);
      fetchMovies();
    }
  }, [props.pageNumber]); // Empty array ensures the effect runs only once when the component mounts

  return (
    <div>
      {/* //it Renders twice and twice get pages render */}
      {props.pageNumber ? (
        <h1 className="discoverMovieHeading">Popular Movies </h1>
      ) : null}
      {movies.map((movie) => {
        return (
          <Cards
            key={movie.id}
            id={movie.id}
            imgLink={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
            mName={movie.title.substring(0, 23)}
            rating={movie.vote_average}
          />
        );
      })}
    </div>
  );
}

export default DiscoverMovie;
