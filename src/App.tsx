import NavBar from "./components/navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeroSection from "components/hero";
import AboutMe from "components/about";
import Skills from "components/skills";
import Education from "components/education";
import Contact from "components/contact";

function App() {
  return (
    <>
      <header className="App">
        <NavBar />
      </header>
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
