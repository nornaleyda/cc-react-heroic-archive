import { useEffect, useState } from "react";
import { Box, Button, Grid, LinearProgress } from "@mui/material";
import CharacterCard from "./CharacterCard";
import { useCharsContext } from "../../../context/CharsContext";

export default function DisplayResults() {
  const { filteredResults, retrieveCharacters, sortingMethod, switchSorting } =
    useCharsContext();
  const [visibleChars, setVisibleChars] = useState(24);
  const [isLoading, setIsLoading] = useState(true);
  const dataCopy = [...filteredResults];

  useEffect(() => {
    setIsLoading(true);
    retrieveCharacters()
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  // Render individual character
  const renderCharItem = () => {
    const sortCharacterCards = switchSorting(
      sortingMethod.sort,
      sortingMethod.reverseOrder,
      dataCopy
    );

    return sortCharacterCards.slice(0, visibleChars).map((char) => {
      return (
        <Grid item xs={6} sm={3} md={2.4} lg={1.5} key={char.id}>
          <CharacterCard char={char} />
        </Grid>
      );
    });
  };

  // Load more characters
  const showMoreChars = () => {
    setVisibleChars(visibleChars + 24);
  };

  return (
    <Box textAlign="center">
      {isLoading ? (
        <LinearProgress />
      ) : (
        <>
          <Grid container>{renderCharItem()}</Grid>
          <Button
            variant="contained"
            onClick={showMoreChars}
            sx={{ maxWidth: "50vw", width: "100vw", minWidth: "375px" }}
          >
            Load More
          </Button>
        </>
      )}
    </Box>
  );
}
