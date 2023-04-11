import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/About Us/AboutUs";
import Characters from "./components/Characters/Characters";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ViewCharacter from "./components/Characters/Character/ViewCharacter";
import { CharsContextProvider } from "./context/CharsContext";
import "./styles/main.scss";
import { Box } from "@mui/material";

export default function App() {
  return (
    <CharsContextProvider>
      <Header />
      <Box marginTop={"68.5px"}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/character/:id" element={<ViewCharacter />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </CharsContextProvider>
  );
}
