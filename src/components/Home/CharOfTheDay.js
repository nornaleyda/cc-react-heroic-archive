import { useState, useEffect } from "react";
import "./layout.scss";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  LinearProgress,
} from "@mui/material";

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
      sx={{ marginTop: 10, marginRight: 20, marginLeft: 20, marginBottom: 20 }}
    >
      <CardActionArea sx={{ display: "flex" }}>
        {hero ? (
          <>
            <CardMedia
              sx={{ flex: "1 1 50%" }}
              component="img"
              height="640"
              image={hero.images.sm}
              alt="character of the day"
            />

            <CardContent sx={{ flex: "1 1 50%", width: "100%" }}>
              <Typography gutterBottom variant="h1" component="div">
                {hero.name}
              </Typography>

              <Typography variant="h6">Powerstats</Typography>

              <Typography sx={{ width: "50%" }}>
                <label sx={{ width: "200px", textAlign: "right" }}>
                  Intelligence : {hero.powerstats.intelligence}%
                </label>
                <LinearProgress
                  sx={{ height: 15, borderRadius: 5 }}
                  variant="determinate"
                  value={hero.powerstats.intelligence}
                />
                <br />
                <label sx={{ width: "200px", textAlign: "right" }}>
                  Strength : {hero.powerstats.strength}%
                </label>
                <LinearProgress
                  sx={{ height: 15, borderRadius: 5 }}
                  variant="determinate"
                  value={hero.powerstats.strength}
                />
                <br />
                <label sx={{ width: "200px", textAlign: "right" }}>
                  Speed : {hero.powerstats.speed}%
                </label>
                <LinearProgress
                  sx={{ height: 15, borderRadius: 5 }}
                  variant="determinate"
                  value={hero.powerstats.speed}
                />
                <br />
                <label sx={{ width: "200px", textAlign: "right" }}>
                  Durability : {hero.powerstats.durability}%
                </label>
                <LinearProgress
                  sx={{ height: 15, borderRadius: 5 }}
                  variant="determinate"
                  value={hero.powerstats.durability}
                />
                <br />
                <label sx={{ width: "200px", textAlign: "right" }}>
                  Power : {hero.powerstats.power}%
                </label>
                <LinearProgress
                  sx={{ height: 15, borderRadius: 5 }}
                  variant="determinate"
                  value={hero.powerstats.power}
                />
                <br />
                <label sx={{ width: "200px", textAlign: "right" }}>
                  Combat : {hero.powerstats.combat}%
                </label>
                <LinearProgress
                  sx={{ height: 15, borderRadius: 5 }}
                  variant="determinate"
                  value={hero.powerstats.combat}
                />
              </Typography>
            </CardContent>

            <CardContent sx={{ flex: "1 1 50%", width: "100%" }}>
              <Typography variant="body2" color="text.secondary">
                {hero.biography.publisher}{" "}
              </Typography>
            </CardContent>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </CardActionArea>
    </Card>
  );
}
