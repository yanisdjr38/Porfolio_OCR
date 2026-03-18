import { BrowserRouter as Router } from "react-router-dom";
import Apropos from "./components/Apropos";
import Banner from "./components/Banner";
import Compétence from "./components/Compétence";
import NavBar from "./components/Navbar";
import Parcour from "./components/Parcour";
import Projet from "./components/Projet";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
        <Banner />
      </header>
      <main>
        {/* Sections for About, Skills, Projects, Experience, Contact */}
        <Apropos />
        <Compétence />
        <Projet />
        <Parcour />
      </main>
      <footer></footer>
    </Router>
  );
}

export default App;
