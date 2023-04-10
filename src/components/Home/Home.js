import { Box, Typography } from "@mui/material";
import CharOfTheDay from "./CharOfTheDay";
import LayoutChar from "./LayoutChar";
import "./layout.scss";

export default function Home() {
  return (
    <Box>
      <Typography
        variant="h5"
        textAlign="center"
        marginTop={5}
        marginBottom={5}
        fontSize={140}
        style={{ fontFamily: "'Comics', sans-serif" }}
      >
        <span style={{ color: "black", fontWeight: "bold" }}>The </span>
        <span style={{ color: "red", fontWeight: "bold" }}>Heroic </span>
        <span style={{ color: "black", fontWeight: "bold" }}>Archive </span>
      </Typography>
      <LayoutChar />
      <Typography
        variant="h4"
        textAlign="center"
        fontSize={90}
        style={{ fontFamily: "'Comics', sans-serif" }}
      >
        Character Of The Day
      </Typography>
      <CharOfTheDay />
    </Box>
  );
}
