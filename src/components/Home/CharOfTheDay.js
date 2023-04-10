import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  LinearProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useCharsContext } from "../../context/CharsContext";

export default function CharOfTheDay() {
  const { COTD, retrievesCOTD } = useCharsContext();
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   retrievesCOTD()
  //     .then(() => setIsLoading(false))
  //     .catch((error) => {
  //       console.error(error);
  //       setIsLoading(false);
  //     });
  // }, []);
  // if (COTD) {
    return (
      <Card sx={{ marginTop: 10, marginRight: 20, marginLeft: 20 }}>
        <CardActionArea sx={{ display: "flex" }}>
          <CardMedia
            sx={{ flex: "1 1 50%" }}
            component="img"
            height="640"
            image="https://akabab.github.io/superhero-api/api/images/lg/3-abin-sur.jpg"
            alt="character of the day"
          />

          <CardContent sx={{ flex: "1 1 50%", width: "100%" }}>
            <Typography gutterBottom variant="h2" component="div">
              {/* {COTD.name} */}
            </Typography>
            <Typography sx={{ width: "100%" }}>
              <label sx={{ width: "200px", textAlign: "right" }}>
                Intelligence:
              </label>
              <LinearProgress
                sx={{ height: 15, borderRadius: 5 }}
                variant="determinate"
                // value={COTD.powerstats.intelligence}
              />
              <br />
              <label sx={{ width: "200px", textAlign: "right" }}>
                Strength:
              </label>
              <LinearProgress
                sx={{ height: 15, borderRadius: 5 }}
                variant="determinate"
                // value={COTD.powerstats.strength}
              />
              <br />
              <label sx={{ width: "200px", textAlign: "right" }}>Speed:</label>
              <LinearProgress
                sx={{ height: 15, borderRadius: 5 }}
                variant="determinate"
                // value={COTD.powerstats.speed}
              />
              <br />
              <label sx={{ width: "200px", textAlign: "right" }}>
                Durability:
              </label>
              <LinearProgress
                sx={{ height: 15, borderRadius: 5 }}
                variant="determinate"
                // value={COTD.powerstats.durability}
              />
              <br />
              <label sx={{ width: "200px", textAlign: "right" }}>Power:</label>
              <LinearProgress
                sx={{ height: 15, borderRadius: 5 }}
                variant="determinate"
                // value={COTD.powerstats.power}
              />
              <br />
              <label sx={{ width: "200px", textAlign: "right" }}>Combat:</label>
              <LinearProgress
                sx={{ height: 15, borderRadius: 5 }}
                variant="determinate"
                // value={COTD.powerstats.combat}
              />
            </Typography>
          </CardContent>

          <CardContent sx={{ flex: "1 1 50%", width: "100%" }}>
            <Typography variant="body2" color="text.secondary">
              {/* {COTD.biography} */}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
