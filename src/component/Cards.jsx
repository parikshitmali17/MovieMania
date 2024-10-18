import React, { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import  Style from '../assets/styles.css';
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { FavoritesContext } from "./FavoritesContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { pink } from "@mui/material/colors";
import { white } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Cards({ id, imgLink, mName, rating }) {
  const [btnFavourite, setbtnFavourite] = useState(false);
  const [isFavouritePage, setIsFavouritePage] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  function MoreInfo() {
    navigate(`/movie/${id}`); // Navigate to the detail page with the movie ID
  }
  const { addToFavorites } = useContext(FavoritesContext);

  const handleAddToFavorites = () => {
    setbtnFavourite(true);
    addToFavorites({
      id,
      title: mName,
      imgLink,
      rating,
    });
  };

  return (
    <div className="parentToCard">
      <div className="completeCard">
        <Card className="actualCard" sx={{ maxWidth: 154, maxHeight: 430 }}>
          <CardActionArea onClick={MoreInfo}>
            <CardMedia
              component="img"
              width="154"
              image={imgLink}
              alt="Image"
            />
            <CardContent className="cardContent">
              <Typography
                className="textHeightLimit"
                gutterBottom
                variant="h5"
                component="div"
              >
                {mName}
              </Typography>
              <StarIcon sx={{ color: "gold" }} />
              <span fontSize="20px">{rating}/10</span>
            </CardContent>
          </CardActionArea>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CardActions>
              <Button
                style={{ color: "#f44336" }}
                onClick={MoreInfo}
                size="small"
              >
                <b>More Details</b>
              </Button>
            </CardActions>
            <Button
              color="White"
              startIcon={
                <FavoriteIcon sx={btnFavourite && { color: pink[500] }} />
              }
              onClick={handleAddToFavorites}
            ></Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
