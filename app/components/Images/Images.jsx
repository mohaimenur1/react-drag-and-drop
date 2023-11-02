"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useState } from "react";
import ImageData from "../ImageData";
import ImageCard from "../ImageCard/ImageCard";
import { v4 as uuidv4 } from "uuid";

const Images = () => {
  const [images, setImages] = useState(ImageData);
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        {images.map((img) => {
          return <ImageCard key={uuidv4()} img={img} />;
        })}
      </Grid>
    </Box>
  );
};

export default Images;
