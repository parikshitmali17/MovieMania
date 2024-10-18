import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { pageNumber } from "./BasicPagination";

function TrendingMovie(props) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  
 // const BEARER_TOKEN =process.env.REACT_APP_BEARER_TOKEN;
   
  const BEARER_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2ZlMGRkZDU4NDA3ZWNkOTJlZWNjNmJlOTQ3ZTg5NyIsIm5iZiI6MTcyODEyMzcxMi4wMzk2NzUsInN1YiI6IjY3MDEwY2VhZTg0ZWViMzVhMGY4NGFjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JWJ5ZJnUzG6w4EUT0hZD0GUVbkysPD_kqDKUeqXbuS0";
  // TMDb API base URL for popular movies
  const BASE_URL = `https://api.themoviedb.org/3/trending/movie/week?language=en-US`;
   console.log("Bearer Token:", BEARER_TOKEN);


  useEffect(() => {
    // console.log(`environment varible:${process.env.REACT_APP_BEARER_TOKEN}`);
    const fetchTrendingMovies = async () => {
      try {
        // Make an API request using Axios and pass the Bearer token in the headers
        //console.log("Bearer Token:", BEARER_TOKEN);

        const response = await axios.get(BASE_URL, {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`, // Pass the Bearer token
          },
        });
        // Set the movie data in state
        console.log(response.data);
        setTrendingMovies(response.data.results);
        
      } catch (error) {
        console.error("Error fetching movie data:", error);
        console.error("Error fetching movie data:", error.response ? error.response.data : error.message);
      }
    };

    fetchTrendingMovies();
  }, [props.pageNumber]); // Empty array ensures the effect runs only once when the component mounts

  return (
    <div>
      <h1 className="trendingMovieHeading">Trending Movies </h1>
      {trendingMovies.map((trendingMovie) => {
        return (
          <Cards
            key={trendingMovie.id}
            id={trendingMovie.id}
            imgLink={`https://image.tmdb.org/t/p/w154/${trendingMovie.poster_path}`}
            mName={trendingMovie.title}
            rating={trendingMovie.vote_average}
          />
        );
      })}
    </div>
  );
}

export default TrendingMovie;
