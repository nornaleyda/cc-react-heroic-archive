import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Paper, LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function ViewCharacter() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://akabab.github.io/superhero-api/api/id/${id}.json`
        );
        setCharacter(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (!character) {
    return <Typography>Loading...</Typography>;
  }

  // render character details

  const { name, powerstats, appearance, biography, work, connections, images } =
    character;

  return (
    <Box
      sx={{
        marginTop: "5rem",
        marginBottom: "5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        sx={{
          position: "relative",
          p: 3,
          margin: "auto",
          maxWidth: "70%",
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          animation: "fade-in 1s forwards",
          "@keyframes fade-in": {
            "0%": {
              opacity: 0,
            },
            "100%": {
              opacity: 1,
            },
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid
              item
              xs
              container
              direction="column"
              spacing={2}
              style={{
                fontWeight: "bold",
                marginTop: "5rem",
                marginLeft: "1rem",
              }}
            >
              <Grid item xs key={character}>
                <Typography
                  variant="h3"
                  style={{
                    fontFamily: "'Rock Salt', cursive",
                    marginRight: "10rem",
                  }}
                  fontSize={90}
                >
                  {name}
                </Typography>

                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold", marginTop: "5rem" }}
                  fontSize={25}
                  color="red"
                >
                  Biography
                </Typography>
                <Typography>
                  Full Name: {character.biography.fullName}
                </Typography>
                <Typography>
                  Alter Ego: {character.biography.alterEgos}
                </Typography>
                <Typography>
                  Aliase(s): {character.biography.aliases.join(", ")}
                </Typography>
                <Typography>
                  Place Of Birth: {character.biography.placeOfBirth}
                </Typography>
                <Typography>
                  First Appearance(s): {character.biography.firstAppearance}
                </Typography>

                <Typography>{`Publisher: ${biography.publisher}`}</Typography>
                <Typography>{`Alignment: ${biography.alignment}`}</Typography>
                <br />

                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold" }}
                  fontSize={25}
                  borderRadius={30}
                  color="red"
                >
                  Appearance
                </Typography>
                <Typography>{`Gender: ${appearance.gender}`}</Typography>
                <Typography>{`Species: ${appearance.race}`}</Typography>
                <Typography>{`Eyes: ${appearance.eyeColor}`}</Typography>
                <Typography>{`Hair: ${appearance.hairColor}`}</Typography>

                <Typography>{`Height: ${appearance.height.join(
                  ", "
                )}, Weight: ${appearance.weight.join(", ")}`}</Typography>
                <br />

                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold" }}
                  fontSize={25}
                  color="red"
                >
                  Work
                </Typography>
                <Typography>{`Occupation: ${work.occupation}`}</Typography>
                <Typography>{`Base: ${work.base}`}</Typography>
                <br />

                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold" }}
                  fontSize={25}
                  color="red"
                >
                  Connections
                </Typography>
                <Typography>{`Group Affiliation: ${connections.groupAffiliation}`}</Typography>
                <Typography>{`Family: ${connections.relatives}`}</Typography>
              </Grid>
            </Grid>
            <Grid item marginRight={5} width="25%">
              <img
                src={images.md}
                alt={name}
                style={{
                  marginTop: "2rem",
                  // marginRight: "10rem",
                }}
              />

              <Typography
                variant="h6"
                style={{
                  fontWeight: "bold",
                  marginTop: "1rem",
                  textAlign: "center",
                  // marginRight: "10rem",
                }}
                fontSize={25}
                color="red"
              >
                Powerstats
              </Typography>

              <Typography sx={{ width: "90%", marginTop: "1rem" }}>
                <label sx={{ width: "200px", textAlign: "right" }}>
                  Intelligence : {powerstats.intelligence}%
                </label>
                <LinearProgress
                  sx={{ height: 15, borderRadius: 5 }}
                  variant="determinate"
                  value={powerstats.intelligence}
                />
                <br />
                <label sx={{ width: "200px", textAlign: "right" }}>
                  Strength : {powerstats.strength}%
                </label>
                <LinearProgress
                  sx={{ height: 15, borderRadius: 5, color: "red" }}
                  variant="determinate"
                  value={powerstats.strength}
                />
                <br />
                <label sx={{ width: "200px", textAlign: "right" }}>
                  Speed : {powerstats.speed}%
                </label>
                <LinearProgress
                  sx={{ height: 15, borderRadius: 5 }}
                  variant="determinate"
                  value={powerstats.speed}
                />
                <br />
                <label sx={{ width: "200px", textAlign: "right" }}>
                  Durability : {powerstats.durability}%
                </label>
                <LinearProgress
                  sx={{ height: 15, borderRadius: 5 }}
                  variant="determinate"
                  value={powerstats.durability}
                />
                <br />
                <label sx={{ width: "200px", textAlign: "right" }}>
                  Power : {powerstats.power}%
                </label>
                <LinearProgress
                  sx={{ height: 15, borderRadius: 5 }}
                  variant="determinate"
                  value={powerstats.power}
                />
                <br />
                <label sx={{ width: "200px", textAlign: "right" }}>
                  Combat : {powerstats.combat}%
                </label>
                <LinearProgress
                  sx={{ height: 15, borderRadius: 5 }}
                  variant="determinate"
                  value={powerstats.combat}
                />
              </Typography>
              <br />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
