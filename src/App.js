import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import About from "./pages/About";
import { useState } from "react";
import "./styles.css";

function App() {
  const [movies, setMovies] = useState([]); // ← state مشتركة

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home movies={movies} />} /> 
        <Route
          path="/movies"
          element={<Movies movies={movies} setMovies={setMovies} />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
