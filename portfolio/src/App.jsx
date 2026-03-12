import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
        <Banner />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer></footer>
    </Router>
  );
}

export default App;
