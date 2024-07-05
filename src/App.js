import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Login } from "../src/components/pages/Login";
import Carousel from "../src/components/pages/Carousel";
import { Popular } from "./components/pages/Popular";
import { Home } from "./components/pages/Home";
import { Footer } from "./components/Footer";
import { Profile } from "./components/pages/Profile";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Routes></Routes>
      <Carousel />
      <Popular /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
