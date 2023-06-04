import { useParams } from "react-router-dom";

const Reviews =()=>{
const {moviesId} = useParams();
return(
        <div>Reviews: {moviesId}</div>
)      
}
export default Reviews;