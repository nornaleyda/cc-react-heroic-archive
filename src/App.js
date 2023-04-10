import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/About Us/AboutUs";
import Characters from "./components/Characters/Characters";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ViewChar from "./components/Characters/ViewChar";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:id" element={<ViewChar />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
