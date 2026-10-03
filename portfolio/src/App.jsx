import Apropos from "./components/Apropos/Apropos";
import Banner from "./components/Banner/Banner";
import Competence from "./components/Competence/Competence";
import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/Navbar";
import Parcour from "./components/Parcour/Parcour";
import Pattern from "./components/Pattern";
import Prices from "./components/Prices/Prices";
import Process from "./components/Process/Process";
import Projet from "./components/Projets/Projet";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services/Services";
import Temoignage from "./components/Temoignage/Temoignage";

function App() {
  return (
    <>
      <Pattern />
      <ScrollToTop />
      <header>
        <NavBar />
      </header>
      <main>
        <section id="home">
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
        <section id="stack">
          <Competence />
        </section>
        <section id="tarifs">
          <Prices />
        </section>
        <section id="testimonials">
          <Temoignage />
        </section>
        <section id="faq">
          <Faq />
        </section>
        <section id="about">
          <Apropos />
        </section>
        <section id="parcours">
          <Parcour />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
