import {
  Box,
  Card,
  CardActionArea,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
  LinearProgress,
} from "@mui/material";

export default function CharOfTheDay() {
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
          <Typography sx={{ width: "100%" }}>
              <label sx={{ width: "200px", textAlign: "right"}}>
                Intelligence:
              </label>
              <LinearProgress
                sx={{ height: 15, borderRadius: 5 }}
                variant="determinate"
                value={50}
              />
              <br />
              <label sx={{ width: "200px", textAlign: "right"}}>
                Strength:
              </label>
              <LinearProgress
                sx={{ height: 15, borderRadius: 5 }}
                variant="determinate"
                value={90}
              />
              <br />
              <label sx={{ width: "200px", textAlign: "right"}}>
                Speed:
              </label>
              <LinearProgress
                sx={{ height: 15, borderRadius: 5 }}
                variant="determinate"
                value={53}
              />
              <br />
              <label sx={{ width: "200px", textAlign: "right"}}>
                Durability:
              </label>
              <LinearProgress
                sx={{ height: 15, borderRadius: 5 }}
                variant="determinate"
                value={64}
              />
              <br />
              <label sx={{ width: "200px", textAlign: "right"}}>
                Power:
              </label>
              <LinearProgress
                sx={{ height: 15, borderRadius: 5 }}
                variant="determinate"
                value={99}
              />
              <br />
              <label sx={{ width: "200px", textAlign: "right"}}>
                Combat:
              </label>
              <LinearProgress
                sx={{ height: 15, borderRadius: 5 }}
                variant="determinate"
                value={65}
              />
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
