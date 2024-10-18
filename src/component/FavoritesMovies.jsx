import React, { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";
import Cards from "./Cards";
import  Style from '../assets/styles.css';
import { pink } from "@mui/material/colors";
import { white } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function FavoriteMovies() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <div>
      {favorites.length === 0 ? null : (
        <h1 className="favoriteMoviesPage">Your Favorite Movies</h1>
      )}

      {console.log(favorites)}
      {favorites.length === 0 ? (
        <h1 className="favoriteMoviesPage">No favorite movies added yet.</h1>
      ) : (
        <div
          className="favorites-list"
          style={{
            width: "auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "34px",
          }}
        >
          {favorites.map((movie) => (
            <div
              key={movie.id}
              style={{
                display: "flex",
                flexDirection: "column", // Arrange items in a column
                alignItems: "center", // Center items horizontally
                width: "154px", // Adjust width of each movie card
                textAlign: "center",
              }}
            >
              <Cards
                key={movie.id}
                id={movie.id}
                imgLink={movie.imgLink}
                mName={movie.title}
                rating={movie.rating}
              />
              <button
                style={{
                  padding: "6px 12px",
                  fontSize: "12px",
                  lineHeight: "1.5",
                  maxWidth: "100px",
                  borderRadius: "4px",
                  backgroundColor: "#f44336",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-block",
                  textAlign: "center",
                  marginTop: "10px",
                }}
                onClick={() => removeFromFavorites(movie.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
