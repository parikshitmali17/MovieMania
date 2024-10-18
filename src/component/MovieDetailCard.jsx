import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import StarIcon from "@mui/icons-material/Star";

export default function ActionAreaCard(props) {
  return (
    <div className="movieDetailContainer">
      <Card className="movieDetailCard" sx={{ maxWidth: 342, maxHeight: 1000 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="342"
            image={props.imgLink}
            alt="movie poster"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            {props.tagline ? (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <i>Tagline: </i>
                {props.tagline}
              </Typography>
            ) : null}

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <b>Rating </b>
              {props.voteAvg}/10
              <StarIcon sx={{ color: "gold" }} />
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <b> Vote Count: </b>
              {props.voteCount}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <b>Release Date: </b>
              {props.releaseDate}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <b>Overview </b> <br />
              {props.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
