import { NavLink } from "react-router-dom";
import '../Header/Header.css'
export const Header=()=>{
        return(
        <nav className= "Header">
                <ul className = "Nav">
                <li className="HomeLink"><NavLink to="/">Home</NavLink></li>
                <li className="MoviesLink"><NavLink to = "/movies">Movies</NavLink></li>
             </ul> 
             </nav>
        )
}