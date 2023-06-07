import { Link } from "react-router-dom";
const SearchMovietList =({visibleMovie})=>{
        return (<div><ul>
                            {visibleMovie.map(({id, title})=> (
                            <Link to={(`/movies/${id}`)}><li key ={id}>{title}</li></Link>
                                      
                                        ))}     
                            </ul></div>

        )
}
export default SearchMovietList;