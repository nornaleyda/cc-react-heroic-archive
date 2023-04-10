import { Box, Container, Typography } from "@mui/material";
import CharOfTheDay from "./CharOfTheDay";

export default function Home() {
  return (
    <Box>
      <Container>
        <Typography variant="h4" textAlign="center">
          Welcome to
        </Typography>
        <Typography variant="h2" textAlign="center">
          The Heroic Archive
        </Typography>
      </Container>
      <CharOfTheDay />
    </Box>
  );
}
