import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Paper } from "@mui/material";
import Image from "next/image";

const ImageCard = ({ img }) => {
  return (
    <Grid item md={3}>
      <Paper>
        <Image src={img.src} width={100} height={100} />
      </Paper>
    </Grid>
  );
};

export default ImageCard;
