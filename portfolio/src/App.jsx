import { BrowserRouter as Router } from "react-router-dom";
import Apropos from "./components/Apropos/Apropos";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/Navbar";
import Pattern from "./components/Pattern";
import Prices from "./components/Prices/Prices";
import Process from "./components/Process/Process";
import Projet from "./components/Projets/Projet";
import ScrollToBottom from "./components/ScrollToBottom";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services/Services";
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
        <section id="services">
          <Services />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="projects">
          <Projet />
        </section>
        <section id="tarifs">
          <Prices />
        </section>
        <section id="faq">
          <Faq />
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
