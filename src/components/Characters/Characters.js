import { Box } from "@mui/material";
import DisplayChars from "./DisplayChars";
import Filter from "./Filter";

export default function Characters() {
  return (
    <Box>
      <Filter />
      <DisplayChars />
    </Box>
  );
}
