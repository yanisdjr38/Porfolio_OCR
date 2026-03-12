import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
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
