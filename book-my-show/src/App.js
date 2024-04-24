import "./App.css";

// Routes
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./Pages/Home.Page";
import MoviePage from "./Pages/Movie.Page";
import PlayPage from "./Pages/Play.Page";

// React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
