import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/Banner";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
        <Banner />
      </header>
      <main></main>
      <footer></footer>
    </Router>
  );
}

export default App;
