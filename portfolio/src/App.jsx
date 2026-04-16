import { BrowserRouter as Router } from "react-router-dom";
import Apropos from "./components/Apropos/Apropos";
import Banner from "./components/Banner/Banner";
import Compétence from "./components/Compétence/Compétence";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/Navbar";
import Parcour from "./components/Parcour/Parcour";
import Pattern from "./components/Pattern";
import Projet from "./components/Projets/Projet";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Pattern />
      <ScrollToTop />
      <header>
        <NavBar />
      </header>
      <main>
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
