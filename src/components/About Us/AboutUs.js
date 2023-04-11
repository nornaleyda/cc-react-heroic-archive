import { Grid } from "@mui/material";
import Footer from "./Footer";
import ProfileCard from "./ProfileCard";
import "../../styles/main.scss";
import johanan from "../../images/joeee.jpeg";
import farhana from "../../images/farhana.jpeg";
import norna from "../../images/norna.jpeg";

const devDetails = [
  {
    id: 1,
    name: "Mohd Hafiz Zabba",
    biography:
      "Watch out, villains - Hafiz is on the scene! Despite coming from a health science background, this self-taught coding genius has one thing in common with the Spider-Man - making websites. Starting his coding journey back in June 2022, he ventured out into the jungle of data analytics with Python. It wasn't long before Hafiz started swinging into web development, quickly mastering HTML, CSS, and JavaScript. Now, he's expanding his arsenal with React.js, Express.js, and Django. Whether you're a hero or a villain, Hafiz is the coder you want on your side!",
    image: "",
    url: {
      github: "https://github.com/nzmksk",
      linkedIn: "https://www.linkedin.com/in/mhz96/",
    },
  },
  {
    id: 2,
    name: "Johanan Samuel",
    biography:
      "Johanan is a tech savvy hero with a unique talent for web development. With his background in Information Technology and certifications in IT Support, he has honed his programming skills. His final year project at University Selangor allowed him to master HTML, CSS, PHP, and SQL. He is now focused on mastering the latest front-end development trends like JavaScript, React, and TypeScript. With his unparalleled technical expertise and a commitment to excellence, Johanan is a true hero in the world of web development.",
    image: johanan,
    url: {
      github: "https://github.com/joeeeee7",
      linkedIn: "https://www.linkedin.com/in/johanansamuel/",
    },
  },
  {
    id: 3,
    name: "Nornaleyda Rosli",
    biography:
      "Norna's superpower is her proficiency in coding languages. Armed with a bachelor's degree in Science Computer: Multimedia Computer, she quickly mastered HTML, CSS, and Javascript. Now, Norna is focused on expanding her abilities with React.js, Typescript, and sass in order to become the ultimate front-end developer. With her unwavering determination and unstoppable drive to save the world, Norna is a true hero in the making.",
    image: norna,
    url: {
      github: "https://github.com/nornaleyda",
      linkedIn: "https://www.linkedin.com/in/nornaleyda-rosli-866269261",
    },
  },
  {
    id: 4,
    name: "Nurul Farhana Alias",
    biography:
      "Hana, the villain with a knack for technology, has used her skills to cause chaos in the digital realm. She's a master of HTML, CSS, and JavaScript and has a deep understanding of frontend frameworks and libraries, such as React. Her cunning problem-solving skills and strategic mind make her a formidable opponent to any superhero. Hana stays up-to-date with the latest frontend development trends and techniques, giving her a significant advantage in her villainous pursuits.",
    image: farhana,
    url: {
      github: "https://github.com/FarhanaAlias",
      linkedIn: "https://www.linkedin.com/in/farhana-alias-658401182",
    },
  },
];
export default function AboutUs() {
  const renderDevDetails = devDetails.map((dev) => {
    return (
      <Grid item sm={12} md={6} key={dev.id}>
        <ProfileCard developer={dev} />
      </Grid>
    );
  });

  return (
    <Grid className="profiles-wrapper" container>
      {renderDevDetails}
      <Footer></Footer>
    </Grid>
  );
}
