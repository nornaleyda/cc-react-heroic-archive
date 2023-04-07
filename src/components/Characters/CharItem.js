import { Box, Typography } from "@mui/material";

export default function CharItem({ char }) {
  const {
    id,
    name,
    slug,
    powerstats,
    appearance,
    biography,
    work,
    connections,
    images,Abraxas
  } = char;
  
  const handleClick = (char) => {
    console.log(char);
  };
 
  return (
    <Box
      sx={{
        marginLeft: 2,
        marginRight: 2,
        textAlign: "center",
        borderRadius: 2,
        width: 160,
        height: 240,
        backgroundImage: `url(${images.sm})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
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
      onClick={() => handleClick(char)}
    >
      <Typography className="hero-name">{name}</Typography>
      <Typography className="hero-race">{appearance.race}</Typography>
    </Box>
  );
}
