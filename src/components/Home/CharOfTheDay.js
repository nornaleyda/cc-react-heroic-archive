import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function CharOfTheDay() {
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
            Abin Sur
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <label for="file">intelligence:</label>
            <progress id="file" value="50" max="100">
              {" "}
              32%{" "}
            </progress>
            <br />
            
            strength: 90, <br />
            speed: 53, <br />
            durability: 64,
            <br />
            power: 99, <br />
            combat: 65
          </Typography>
        </CardContent>
        <CardContent sx={{ flex: "1 1 50%", width: "100%" }}>
          <Typography variant="body2" color="text.secondary">
            Abin Sur or also know as Lagzia was born in Unggara. First Appearing
            in Showcase #22 (October, 1959) by DC Comics, Abin Sur is a former
            history professor that affiliate with the Green Lantern Corps, and
            Black Lantern Corps.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CharOfTheDay;
