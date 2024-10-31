import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./Home.css";
import "./MovieGrid.css";

const movirURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [TopMovies, SetTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    SetTopMovies(data.results);
  };
  useEffect(() => {
    const topRatedMovies = `${movirURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedMovies);
  }, []);
  if (TopMovies.length === 0) {
    return (
      /* From Uiverse.io by Nawsome */
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    );
  }
  return (
    <div className="container">
      <h2 className="title"> Melhores Filmes</h2>

      <div className="movies-container">
        {TopMovies.length > 0 &&
          TopMovies.map((movie) => (
            <div key={movie.id} className="moviecard">
              <MovieCard movie={movie}/>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
