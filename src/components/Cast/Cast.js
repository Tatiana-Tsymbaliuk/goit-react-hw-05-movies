import { useParams } from "react-router-dom";

const Cast =()=>{
const {moviesId} = useParams();
return(
        <div>Cast: {moviesId}</div>
)      
}
export default Cast;