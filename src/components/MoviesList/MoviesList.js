import { Link } from "react-router-dom";

const MoviesList = ({films, state}) =>{
        console.log(films);
        return(<>
        
        <ul>
        {films.map(({id, title})=> (
                       <Link to={(`/movies/${id}`)} state={state}><li key ={id}>{title}</li></Link>
                      
                        ))}     
                </ul></>
        )
}
export default MoviesList;