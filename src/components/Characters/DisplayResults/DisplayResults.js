import { useEffect, useState } from "react";
import { Box, Button, Grid, LinearProgress } from "@mui/material";
import CharacterCard from "./CharacterCard";
import { useCharsContext } from "../../../context/CharsContext";

export default function DisplayResults() {
  const {
    filteredResults,
    retrieveCharacters,
    searchInput,
    sortingMethod,
    switchSorting,
  } = useCharsContext();
  const [visibleChars, setVisibleChars] = useState(24);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    retrieveCharacters()
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [searchInput]);

  // Render individual character
  const renderCharItem = () => {
    const dataCopy = [...filteredResults];

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
          <Grid container spacing={2}>
            {renderCharItem()}
          </Grid>
          {filteredResults.length > visibleChars ? (
            <Button
              variant="contained"
              onClick={showMoreChars}
              sx={{
                height: "50px",
                maxWidth: "50vw",
                width: "100vw",
                minWidth: "375px",
                marginTop: "2rem",
                marginBottom: "2rem",
                borderRadius: "1px",
                fontWeight: "bold",
                backgroundColor: "#skyblue",
                color: "#000",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                transition: "background-color 0.2s ease-out",
                "&:hover": {
                  backgroundColor: "#f44336",
                  color: "#fff",
                },
              }}
            >
              Load More
            </Button>
          ) : null}
        </>
      )}
    </Box>
  );
}
