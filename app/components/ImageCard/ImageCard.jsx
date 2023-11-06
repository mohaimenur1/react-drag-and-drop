"use client";
import React, { useState } from "react";

import { Box, Card, Checkbox, Paper, Typography } from "@mui/material";

const ImageCard = ({ img, count, setIsCount, i }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (i) => {
    setChecked(!checked);
  };

  return (
    <Box>
      <Card sx={{ position: "relative" }}>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange(i)}
          sx={{ position: "absolute", top: 5, right: 5 }}
        />
        <img
          src={img.src}
          style={{ width: "100%", height: "100%", zIndex: -1 }}
          alt="image"
        />
      </Card>
    </Box>
  );
};

export default ImageCard;
