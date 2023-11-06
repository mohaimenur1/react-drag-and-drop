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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(images); // Corrected syntax
    const [reorderData] = items.splice(result.source.index, 1); // Corrected "source"
    items.splice(result.destination.index, 0, reorderData);
    setImages(items);
  };

  return (
    <Box maxWidth="xl">
      <Typography>{count}</Typography>
      <Button onClick={handleDeleteSelected}>Delete Selected</Button>
      <Grid container spacing={2}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="card">
            {(provided) => (
              <Box
                {...provided.droppableProps}
                ref={provided.innerRef}
                sx={{ width: "100%" }}
              >
                {images.map((img, i) => {
                  return (
                    <Draggable
                      key={img.id}
                      draggableId={img.id.toString()}
                      index={i}
                    >
                      {(provided) => (
                        <Grid item md={2} key={img.id}>
                          <Card
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            sx={{ position: "relative" }}
                          >
                            <Checkbox
                              // type="checkbox"
                              // value={checked}
                              onChange={() => handleCheckboxChange(i)}
                              sx={{ position: "absolute", top: 5, right: 5 }}
                              checked={img.checked}
                            />
                            <img
                              src={img.src}
                              style={{
                                width: "100%",
                                height: "100%",
                                zIndex: -1,
                              }}
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
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
      </Grid>
    </Box>
  );
};

export default Images;
