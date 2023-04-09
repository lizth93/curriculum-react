import NavBar from "./components/navbar";
import HeroSection from "components/hero";
import AboutMe from "components/about";
import Skills from "components/skills";
import Education from "components/education";
import Contact from "components/contact";
import Footer from "components/footer/";
import Projects from "components/projects/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
