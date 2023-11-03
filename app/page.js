import { Box } from "@mui/material";
import Images from "./components/Images/Images";

export default function Home() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Images />
    </Box>
  );
}
