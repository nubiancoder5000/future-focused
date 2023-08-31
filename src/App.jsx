import React from "react";
import Home from "./pages/home/index.jsx";
import Header from "./component/header/Header";
import About from "./pages/about/About.jsx";
import Hero from "./component/hero/Hero.jsx";
// import Hero from "./component/hero/Hero";
// import Home from './pages/home/index'
// import HomePage from './pages/home/index.jsx'
import CareerQuizNavbar from "./component/careerQuizNavbar/CareerQuizNavbar";
import CareerQuiz from "./component/careerQuiz/CareerQuiz";
import Footer from "../src/component/footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes,
  Navigate,
} from "react-router-dom";
import ExploreCareers from "./pages/exploreCareers/ExploreCareers";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Navigate to="/" replace={true} />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/explore-careers" element={<ExploreCareers />} />
          <Route path="/career-quiz" element={<CareerQuiz />} />
          <Route path="/career-quiz/:id" element={<CareerQuiz />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
