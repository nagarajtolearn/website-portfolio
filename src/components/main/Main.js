import Intro from "../intro/Intro";
import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Next from "../contact/Next";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="cursor"></div>
      <div className="cursor2"></div>
      <div className="fixed__navbar">
        <Navbar />
      </div>
      <div className="main__body">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Next />
      </div>
    </div>
  );
};

export default Main;
