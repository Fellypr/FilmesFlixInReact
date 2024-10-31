import { useState , useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./MovieGrid.css";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
function Search() {

  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");
  const getSearchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    setMovies(data.results);
  };
  useEffect(() => {
    const searchMovies = `${searchURL}?${apiKey}&query=${query}`;
    getSearchMovies(searchMovies);
  }, [query]);
  if (movies.length === 0) {
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
      <h2 className="title"> Resultado: <span className="query-text">{query}</span></h2>

      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => (
            <div key={movie.id} className="moviecard">
              <MovieCard movie={movie}/>
            </div>
          ))}
      </div>
    </div>
    )
  }
  
  export default Search;