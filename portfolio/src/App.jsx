import { BrowserRouter as Router } from "react-router-dom";
import Apropos from "./components/Apropos/Apropos";
import Banner from "./components/Banner/Banner";
import Compétence from "./components/Compétence/Compétence";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/Navbar";
import Pattern from "./components/Pattern";
import Projet from "./components/Projets/Projet";
import ScrollToBottom from "./components/ScrollToBottom";
import ScrollToTop from "./components/ScrollToTop";
import Temoignage from "./components/Temoignage/Temoignage";

function App() {
  return (
    <Router>
      <Pattern />
      <ScrollToTop />
      <ScrollToBottom />
      <header>
        <NavBar />
      </header>
      <main>
        <section id="accueil">
          <Banner />
        </section>
        <section id="projects">
          <Projet />
        </section>
        <section id="testimonials">
          <Temoignage />
        </section>
        <section id="skills">
          <Compétence />
        </section>
        <section id="about">
          <Apropos />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
