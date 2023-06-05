import { Link } from "react-router-dom";

const MoviesList = ({films}) =>{
        console.log(films);
        return(<ul>
        {films.map(({id, title})=> (
                       <Link to={(`/movies/${id}`)}><li key ={id}>{title}</li></Link>
                      
                        ))}     
                </ul>
        )
}
export default MoviesList;