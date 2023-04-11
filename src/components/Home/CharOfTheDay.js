import { useState, useEffect } from "react";
import "./layout.scss";
import { Button, Card, Grid, Typography, LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";
import CharacterCard from "../Characters/DisplayResults/CharacterCard";
import { red } from "@mui/material/colors";

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
          <Grid item className="image-COTD" height="100%" width="23%">
            <div class="comic">
              <div class="panel">
                <img src={hero.images.md} alt={hero.name} />
                <p class="text1 top-left">Was it a hero...</p>
                <p class="text2 bottom-right">...or a villain?</p>
              </div>
            </div>
          </Grid>
          <Grid container className="info-COTD" direction="column" width="76%">
            <Grid item className="bio-COTD" direction="row" height="50%">
              <div class="comic">
                <div class="panel1">
                  <h1 className="name">{hero.biography.fullName} </h1>

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
                    forget their family - it plays a big role in their life. Get
                    ready for some wild adventures - this is going to be one
                    epic ride!
                  </p>
                </div>
              </div>
            </Grid>
            <div class="comic">
              <div class="panel2">
                <Grid
                  container
                  className="stats-COTD"
                  direction="row"
                  height="50%"
                >
                  <Grid
                    item
                    className="left-stats"
                    direction="column"
                    width="50%"
                  >
                    <Typography sx={{ width: "80%" }}>
                      Intelligence : {hero.powerstats.intelligence}%
                      <LinearProgress
                        sx={{ height: 15, borderRadius: 5 }}
                        variant="determinate"
                        value={hero.powerstats.intelligence}
                      />{" "}
                    </Typography>

                    <Typography sx={{ width: "80%" }}>
                      Strength : {hero.powerstats.strength}%
                      <LinearProgress
                        sx={{ height: 15, borderRadius: 5 }}
                        variant="determinate"
                        value={hero.powerstats.strength}
                      />
                    </Typography>
                    <Typography sx={{ width: "80%" }}>
                      Speed : {hero.powerstats.speed}%
                      <LinearProgress
                        sx={{ height: 15, borderRadius: 5 }}
                        variant="determinate"
                        value={hero.powerstats.speed}
                      />
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    className="right-stats"
                    direction="column"
                    width="50%"
                  >
                    <Typography sx={{ width: "80%" }}>
                      Durability : {hero.powerstats.durability}%
                      <LinearProgress
                        sx={{ height: 15, borderRadius: 5 }}
                        variant="determinate"
                        value={hero.powerstats.durability}
                      />
                    </Typography>
                    <Typography sx={{ width: "80%" }}>
                      Power : {hero.powerstats.power}%
                      <LinearProgress
                        sx={{ height: 15, borderRadius: 5 }}
                        variant="determinate"
                        value={hero.powerstats.power}
                      />
                    </Typography>
                    <Typography sx={{ width: "80%" }}>
                      Combat : {hero.powerstats.combat}%
                      <LinearProgress
                        sx={{ height: 15, borderRadius: 5 }}
                        variant="determinate"
                        value={hero.powerstats.combat}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
      {hero && (
        <Link to={`/character/${hero.id}`}>
          <Button variant="contained"
          sx={{
            margin: 5,
            backgroundColor: "red",
            width: "35vw",
          }}
          >view</Button>
        </Link>
      )}
      <Link to={`/characters`}>
        <Button variant="contained"
                  sx={{
                    margin: 5,
                    backgroundColor: "red",
                    width: "35vw",
                  }}
        >all character</Button>
      </Link>
    </Card>
  );
}
