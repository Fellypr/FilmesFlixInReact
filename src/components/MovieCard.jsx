
import { Link } from "react-router-dom"
import {FaStar} from 'react-icons/fa'

import "./MovieCard.css"
const cardImagem = import.meta.env.VITE_IMG;

function MovieCard({movie , showLink = true}) {
  const formatacao = parseFloat(movie.vote_average).toFixed(1); // arredonda para 1 casa
  return (
    <div className="movieCard">
        <img src={cardImagem + movie.poster_path} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <p>
            <FaStar/> {formatacao}
        </p>
        {showLink && <Link to ={`/movie/${movie.id}`}>Detalhes</Link>}
      
    </div>
  )
}

export default MovieCard
