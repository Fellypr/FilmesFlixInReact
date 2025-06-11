import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsFillFileEarmarkFill, BsGraphUpArrow } from "react-icons/bs";
import { FcMoneyTransfer } from "react-icons/fc";
import { LuTimer } from "react-icons/lu";

import "./movie.css";

const movirURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const cardImagem = import.meta.env.VITE_IMG;

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };
  useEffect(() => {
    const movieUrl = `${movirURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, [id]);
  const formatacaoGeral = (value) => {
    return new Intl.NumberFormat("pt-br", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2,
    }).format(value);
  };
  const formatacao = formatacaoGeral(movie.revenue);
  const formatacaoDecimal = (value) => {
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };
  const formatacaDeMoeda = formatacaoDecimal(movie.budget);

  const time = Math.floor(movie.runtime / 60);

  if (movie.length === 0) {
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
    <div>
      {movie && (
        <div key={movie.id} className="moviePage">
          <div className="imgmovie">
            <img src={cardImagem + movie.poster_path} alt={movie.title} />
            <p className="tagline">{movie.tagline}</p>
          </div>
          
          <div className="InformationMovie">
            <div className="info">
              <h3>
                <FcMoneyTransfer /> Orçamento:
              </h3>
              <p>{formatacaDeMoeda}</p>
            </div>
            <div className="receita">
              <h3>
                <BsGraphUpArrow /> Receitas:
              </h3>
              <p>R$ {formatacao}</p>
            </div>
            <div className="Duração">
              <h3>
                <LuTimer />
                Duração:
              </h3>
              <p>{time} Horas</p>
            </div>
            <div className="description">
              <h3>
                <BsFillFileEarmarkFill />
                Descrição:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movie;

{
  /* {movie && (
          
           <div key = {movie.id}>
             <MovieCard movie={movie} showLink={false}/>
             <p className="tagline">{movie.tagline}</p>
             <div className="info">
                <h3>
                  <fc.FcMoneyTransfer /> Orçamento:
                </h3>
                <p>
                  {movie.budget}
                </p>
              )}
           </div> */
}
