import { Link } from "react-router-dom";
const SearchMovietList =({movie, state})=>{
        return (<div>
                {/* <Link to={state?.from ?? "/"}>Go back</Link> */}
                <ul>
                {movie.map(({id, title})=> (
                  <Link to={(`/movies/${id}`)?? state?.from } state={state} key ={id}><li >{title}</li></Link>
                ))}     
                      </ul></div> 

        )
}
export default SearchMovietList;