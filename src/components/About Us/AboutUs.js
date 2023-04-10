import { Grid } from "@mui/material";
import Footer from "./Footer";
import ProfileCard from "./ProfileCard";
import "../../styles/main.scss";

const devDetails = [
  {
    id: 1,
    name: "Mohd Hafiz Zabba",
    biography:
      "Watch out, villains - Hafiz is on the scene! Despite coming from a health science background, this self-taught coding genius has one thing in common with the Spider-Man - making websites. Starting his coding journey back in June 2022, he ventured out into the jungle of data analytics with Python. It wasn't long before Hafiz started swinging into web development, quickly mastering HTML, CSS, and JavaScript. Now, he's expanding his arsenal with React.js, Express.js, and Django. Whether you're a hero or a villain, Hafiz is the coder you want on your side!",
    image: "",
    lnlinked: "https://www.linkedin.com/in/mhz96/",
    lnGithub: "https://github.com/nzmksk",
  },
  {
    id: 2,
    name: "Johanan Samuel",
    biography:
      "Johanan's journey to becoming a web development superhero began in his early years, where he excelled in Information Technology. During his Degree program, he added certificates in IT Support to upgrade his technical skills. With his knowledge in HTML, CSS, PHP and SQL, his commitment to stay on top of the latest trends like JavaScript, React, SASS and TypeScript, Johanan is a true hero in the world of web development.",
    image: "",
    lnlinked: "https://www.linkedin.com/in/johanansamuel/",
    lnGithub: "https://github.com/joeeeee7",
  },
  {
    id: 3,
    name: "Nornaleyda Rosli",
    biography:
      "Norna's superpower is her proficiency in coding languages. Armed with a bachelor's degree in Science Computer: Multimedia Computer, she quickly mastered HTML, CSS, and Javascript. Now, Norna is focused on expanding her abilities with React.js, Typescript, and sass in order to become the ultimate front-end developer. With her unwavering determination and unstoppable drive to save the world, Norna is a true hero in the making.",
    image: "",
    lnlinked: "",
    lnGithub: "https://github.com/nornaleyda",
  },
  {
    id: 4,
    name: "Nurul Farhana Alias",
    biography:
      "Hana, the villain with a knack for technology, has used her skills to cause chaos in the digital realm. She's a master of HTML, CSS, and JavaScript and has a deep understanding of frontend frameworks and libraries, such as React. Her cunning problem-solving skills and strategic mind make her a formidable opponent to any superhero. Hana stays up-to-date with the latest frontend development trends and techniques, giving her a significant advantage in her villainous pursuits.",
    image: "",
    lnlinked: "",
    lnGithub: "https://github.com/FarhanaAlias",
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

  return (
    <Grid className="profiles-wrapper" container>
      <div className="page-header-bg">
        <h1 className="page-header">About Us</h1>
        <p className="page-header-p">
          About us is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.
        </p>
      </div>
      {renderDevDetails}
      <Footer></Footer>
    </Grid>
  );
}
