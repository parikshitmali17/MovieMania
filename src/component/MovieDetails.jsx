import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get movieId from the URL
import  Style from '../assets/styles.css';
import axios from "axios";
import MovieDetailCard from "./MovieDetailCard";

function MovieDetails() {
  const { movieId } = useParams(); // Get movieId from the URL
  const [movieDetails, setMovieDetails] = useState(null);

  const BEARER_TOKEN =process.env.REACT_APP_BEARER_TOKEN;
    
  const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(BASE_URL, {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
        });
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]); // Fetch movie details whenever movieId changes

  if (!movieDetails) return <div>Loading...</div>;

  return (
    <div className="movieDetail">
      <MovieDetailCard
        title={movieDetails.title}
        tagline={movieDetails.tagline}
        imgLink={`https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`}
        overview={movieDetails.overview}
        voteCount={movieDetails.vote_count}
        voteAvg={movieDetails.vote_average}
        releaseDate={movieDetails.release_date}
      />
    </div>
  );
}

export default MovieDetails;
