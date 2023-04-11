import { useState, useEffect } from "react";
import "./layout.scss";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  LinearProgress,
} from "@mui/material";
import { useCharsContext } from "../../context/CharsContext";

export default function CharOfTheDay() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    async function fetchCharOfTheDay() {
      const response = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setHero(data[randomIndex]);
    }
    fetchCharOfTheDay();
  }, []);

  return (
    <Card
      sx={{
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
      }}
    >
      {hero ? (
        <Grid container className="main-COTD" direction="row">
          <Grid item className="image-COTD" width="24%">
            <div class="comic">
              <div class="panel">
                <img src={hero.images.md} alt={hero.name} />
                <p class="text top-left">The hero has come...</p>
                <p class="text bottom-right">...to save the day!</p>
              </div>
            </div>
          </Grid>
          <Grid container className="info-COTD" direction="column" width="76%">
            <Grid item className="bio-COTD" direction="row" height="50%">
              <div class="comic">
                <div class="panel">
                  <h1 xs={{ paddingLeft: 20 }}>{hero.biography.fullName} </h1>

                  <p class="speech">
                    Get ready to meet the newest comic book character on the
                    block - {hero.biography.fullName}, also known as{" "}
                    {hero.biography.aliases.join(", ")}! Born in{" "}
                    {hero.biography.placeOfBirth}, they made their first
                    appearance in {hero.biography.firstAppearance}, published by{" "}
                    {hero.biography.publisher}. Is they a hero or a villain?
                    You'll just have to read and find out. One thing's for sure
                    - they has connections all over the place and is a bit of a
                    wildcard when it comes to group affiliations. And let's not
                    forget their family - they play a big role in their life.
                    Get ready for some wild adventures - this is going to be one
                    epic ride!
                  </p>
                </div>{" "}
              </div>
            </Grid>
            <Grid
              container
              className="stats-COTD"
              direction="row"
              height="50%"
              zIndex={1}
            >
              <div class="comic">
                <div class="panel">
                  <Grid item className="left-stats" direction="column">
                    <Typography>
                      Intelligence : {hero.powerstats.intelligence}%
                    </Typography>
                    <LinearProgress
                      sx={{ height: 15, borderRadius: 5 }}
                      variant="determinate"
                      value={hero.powerstats.intelligence}
                    />
                    <Typography>
                      Strength : {hero.powerstats.strength}%
                      <LinearProgress
                        sx={{ height: 15, borderRadius: 5 }}
                        variant="determinate"
                        value={hero.powerstats.strength}
                      />
                    </Typography>
                    <Typography>
                      Speed : {hero.powerstats.speed}%
                      <LinearProgress
                        sx={{ height: 15, borderRadius: 5 }}
                        variant="determinate"
                        value={hero.powerstats.speed}
                      />
                    </Typography>
                  </Grid>
                  <Grid item className="right-stats" direction="column">
                    <Typography>
                      Durability : {hero.powerstats.durability}%
                      <LinearProgress
                        sx={{ height: 15, borderRadius: 5 }}
                        variant="determinate"
                        value={hero.powerstats.durability}
                      />
                    </Typography>
                    <Typography>
                      Power : {hero.powerstats.power}%
                      <LinearProgress
                        sx={{ height: 15, borderRadius: 5 }}
                        variant="determinate"
                        value={hero.powerstats.power}
                      />
                    </Typography>
                    <Typography>
                      Combat : {hero.powerstats.combat}%
                      <LinearProgress
                        sx={{ height: 15, borderRadius: 5 }}
                        variant="determinate"
                        value={hero.powerstats.combat}
                      />
                    </Typography>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </Card>
  );
}
