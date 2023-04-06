import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import './Characters/CharItem.css';


function DisplayChar() {
  const [heros, setHeros] = useState([]);
  const [visible, setVisible] = useState(21);

  const showMoreHero = () => {
    setVisible((prevValue) => prevValue + 21);
  };

  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => res.json())
      .then((data) => setHeros(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {heros.slice(0, visible).map((hero) => (
          <Grid item xs={2} sm={4} md={1.7} key={hero}>
            <Box
              sx={{
                marginLeft: 2,
                marginRight: 2,
                textAlign: "center",
                borderRadius: 2,
                width: 195,
                height: 260,
                backgroundImage: `url(${hero.images.lg})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                position: "relative",
                // backgroundColor: 'primary.dark',
                "& .hero-name": {
                  color: "white",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  margin: "10px",
                },
                "& .hero-race": {
                  color: "white",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  margin: "10px",
                },

                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <p className="hero-name">{hero.name}</p>
              <p className="hero-race">{hero.appearance.race}</p>
            </Box>
          </Grid>
        ))}
      </Grid>
      <button class="btn sky block" onClick={showMoreHero}>
        Load more
      </button>
    </Box>
  );
}

export default DisplayChar;
