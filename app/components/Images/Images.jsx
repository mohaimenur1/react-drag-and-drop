"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import ImageData from "../ImageData";
import ImageCard from "../ImageCard/ImageCard";
import { v4 as uuidv4 } from "uuid";
import { Typography } from "@mui/material";
import { Card, Checkbox, Paper } from "@mui/material";

const Images = () => {
  const [images, setImages] = useState(ImageData);
  const [count, setIsCount] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedImages = [...images];
    // Toggle the checked state of the clicked card
    updatedImages[i].checked = !updatedImages[i].checked;

    // Update the count based on the checked state of all cards
    const newCount = updatedImages.filter((img) => img.checked).length;
    setIsCount(newCount);

    // Update the images state to reflect the changes
    setImages(updatedImages);
  };

  return (
    <Box maxWidth="xl">
      <Typography>{count}</Typography>
      <Grid container spacing={2}>
        {images.map((img, i) => {
          return (
            <Grid item md={2} key={uuidv4()}>
              <Card sx={{ position: "relative" }}>
                <Checkbox
                  // type="checkbox"
                  // value={checked}
                  onChange={() => handleCheckboxChange(i)}
                  sx={{ position: "absolute", top: 5, right: 5 }}
                  checked={img.checked}
                />
                <img
                  src={img.src}
                  style={{ width: "100%", height: "100%", zIndex: -1 }}
                  alt="image"
                />
              </Card>
              {/* <ImageCard
                img={img}
                count={count}
                setIsCount={setIsCount}
                i={i}
              /> */}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Images;
