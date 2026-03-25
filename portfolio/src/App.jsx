import { BrowserRouter as Router } from "react-router-dom";
import Apropos from "./components/Apropos";
import Banner from "./components/Banner";
import Compétence from "./components/Compétence";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Parcour from "./components/Parcour";
import Projet from "./components/Projet";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Sections for About, Skills, Projects, Experience, Contact */}
        <Banner />
        <Apropos />
        <Compétence />
        <Projet />
        <Parcour />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
