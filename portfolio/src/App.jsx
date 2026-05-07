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
        <section id="banner">
          <Banner />
        </section>
        <section id="projets">
          <Projet />
        </section>
        <section id="temoignages">
          <Temoignage />
        </section>
        <section id="competences">
          <Compétence />
        </section>
        <section id="apropos">
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
