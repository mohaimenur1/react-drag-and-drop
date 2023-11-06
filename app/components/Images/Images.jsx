"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import ImageData from "../ImageData";
import ImageCard from "../ImageCard/ImageCard";
import { v4 as uuidv4 } from "uuid";
import { Button, Typography } from "@mui/material";
import { Card, Checkbox, Paper } from "@mui/material";

const Images = () => {
  const [images, setImages] = useState(ImageData);
  const [count, setIsCount] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedImages = [...images];
    updatedImages[i].checked = !updatedImages[i].checked;

    const newCount = updatedImages.filter((img) => img.checked).length;
    setIsCount(newCount);

    setImages(updatedImages);
  };

  const handleDeleteSelected = () => {
    const updatedImages = images.filter((img) => !img.checked);
    setImages(updatedImages);
    setIsCount(0);
  };

  return (
    <Box maxWidth="xl">
      <Typography>{count}</Typography>
      <Button onClick={handleDeleteSelected}>Delete Selected</Button>
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
