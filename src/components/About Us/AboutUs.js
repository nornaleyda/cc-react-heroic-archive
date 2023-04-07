import { Grid } from "@mui/material";
import ProfileCard from "./ProfileCard";

const devDetails = [
  {
    id: 1,
    name: "Mohd Hafiz Zabba",
    biography:
      "Watch out, villains - Hafiz is on the scene! Despite coming from a health science background, this self-taught coding genius has one thing in common with the Spider-Man - making websites. Starting his coding journey back in June 2022, he ventured out into the jungle of data analytics with Python. It wasn't long before Hafiz started swinging into web development, quickly mastering HTML, CSS, and JavaScript. Now, he's expanding his arsenal with React.js, Express.js, and Django. Whether you're a hero or a villain, Hafiz is the coder you want on your side!",
    image: "",
    },
  {
    id: 2,
    name: "",
    biography: "",
    image: "",
  },
  {
    id: 3,
    name: "",
    biography: "",
    image: "",
  },
  {
    id: 4,
    name: "",
    biography: "",
    image: "",
  },
];

export default function AboutUs() {
  const renderDevDetails = devDetails.map((dev) => {
    return (
      <Grid item sm={12} md={6}>
        <ProfileCard key={dev.id} developer={dev} />
      </Grid>
    );
  });

  return <Grid container>{renderDevDetails}</Grid>;
}
