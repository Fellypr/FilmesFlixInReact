import { Link , useNavigate} from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";




import "./Navbar.css";
function Navbar() {
  const [search,setsearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    console.log(search);
    if(!search) return;

    navigate(`/search?q=${search}`);
    setsearch("");
  }
  return (
    <div>
      <nav className="navbar">
        <h2>
          <Link to="/"><BiCameraMovie/>FilmesFlix</Link>
        </h2>
        <form>
            <input type="text" placeholder="Pesquisar o filme" onChange={(e)=>setsearch(e.target.value)} value={search}/>
            <button type="submit" onClick={handleSubmit} ><BiSearchAlt2/></button>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;
