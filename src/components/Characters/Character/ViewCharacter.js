import { useEffect, useState } from "react";
import axios from "axios";
import { Typography,  Paper, LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from "react";
import ButtonBase from "@mui/material/ButtonBase";
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

  const {
    name,
    slug,
    powerstats,
    appearance,
    biography,
    work,
    connections,
    images,
  } = character;


 return (


<Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: "90%",
        height: "100%",
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
    
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs key={character}>
                
               
    <Typography variant="h6">Appearance</Typography>
    <Typography>{`Gender: ${appearance.gender}, Species: ${appearance.race}, Eyes: ${appearance["eye-color"]}, Hair: ${appearance["hair-color"]}`}</Typography>
    <Typography>{`Height: ${appearance.height.join(", " )}, Weight: ${appearance.weight.join(", ")}`}</Typography>
     <br />


     <Typography variant="h6">Biography</Typography>
       <Typography>Full Name: {character.biography.fullName}</Typography>
       <Typography>Alter Ego: {character.biography.alterEgos}</Typography>
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




       <Typography variant="h6">Powerstats</Typography>

       <Typography sx={{ width: "50%" }}>
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
          sx={{ height: 15, borderRadius: 5 }}
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


             <Typography variant="h6">Work</Typography>
   <Typography>{`Occupation: ${work.occupation}`}</Typography>
       <Typography>{`Base: ${work.base}`}</Typography>
       <br />

              <Typography variant="h6" >Connections</Typography>
      <Typography>{`Group Affiliation: ${connections["group-affiliation"]}`}</Typography>
       <Typography>{`Family: ${connections.relatives}`}</Typography>



     










              
              {/* <Typography
        variant="h5"
        style={{ marginTop: "2rem", fontStyle: "italic" }}
      >
        "Looks like {name} could use a good workout at the gym, don't you
        think?"
      </Typography>
       */}
      


           
      </Grid>
            <Grid item>
  
            </Grid>
          </Grid>
          <Grid item>
            <ButtonBase sx={{ width: 300, height: 500 }}>
             

            <Typography variant="h4" style=
            {{ 
              marginTop: "1rem",

              
              }}>
        {name}


      </Typography>


      <img
        src={images.md}
        alt={name}
        style={{
          marginTop: "25rem",
          marginRight: "30rem",
          animation: "pulse 2s infinite",
        }}
      />


              
            </ButtonBase>


          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
