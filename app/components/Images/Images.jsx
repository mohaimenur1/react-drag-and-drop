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
  const [count, setIsCount] = useState(0);

  return (
    <Box maxWidth="xl">
      <Typography>{count}</Typography>
      <Grid container spacing={2}>
        {images.map((img) => {
          return (
            <Grid item md={2} key={uuidv4()}>
              <ImageCard img={img} count={count} setIsCount={setIsCount} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Images;
