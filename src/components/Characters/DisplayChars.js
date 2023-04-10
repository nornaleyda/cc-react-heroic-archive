import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Grid } from "@mui/material";
import CharItem from "./CharItem";

export default function DisplayChars() {
  const [heroes, setHeroes] = useState([]);
  const [visibleHeroes, setVisibleHeroes] = useState(24);

  const showMoreHeroes = () => {
    setVisibleHeroes(visibleHeroes + 24);
  };

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      setHeroes(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Render individual character
  const renderHeroItem = heroes.slice(0, visibleHeroes).map((hero) => {
    return (
      <Grid item xs={6} sm={3} md={2.4} lg={1.5}>
        <CharItem char={hero} key={hero.id} />
      </Grid>
    );
  });

  return (
    <Box textAlign="center">
      <Grid container spacing={2}>
        {renderHeroItem}
      </Grid>
      {heroes.length > visibleHeroes ? (
        <Button
          variant="contained"
          onClick={showMoreHeroes}
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
    </Box>
  );
}
