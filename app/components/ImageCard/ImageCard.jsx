"use client";
import React, { useState } from "react";

import { Box, Card, Checkbox, Paper } from "@mui/material";

const ImageCard = ({ img, count, setIsCount }) => {
  // const effect = {
  //   "&:hover": {
  //     background: "rgba(0, 0, 0, 0.5)",
  //     zIndex: 1,
  //   },
  // };

  const [hovered, setHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isChecked) {
      setHovered(false);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    console.log("isChecked", isChecked);
    if (isChecked) {
      setIsCount(count - 1);
      setHovered(false);
    } else {
      setIsCount(count + 1);
      setHovered(true);
    }
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ position: "relative" }}
    >
      {hovered && (
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          sx={{ position: "absolute", top: 5, right: 5 }}
        />
      )}
      <img
        src={img.src}
        style={{ width: "100%", height: "100%", zIndex: -1 }}
        alt="image"
      />
    </Card>
  );
};

export default ImageCard;
