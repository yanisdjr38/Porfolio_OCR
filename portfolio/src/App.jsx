import { BrowserRouter as Router } from "react-router-dom";
import Apropos from "./components/Apropos";
import Banner from "./components/Banner";
import NavBar from "./components/Navbar";

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
      </main>
      <footer></footer>
    </Router>
  );
}

export default App;
