import NavBar from "./components/navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeroSection from "components/hero";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
