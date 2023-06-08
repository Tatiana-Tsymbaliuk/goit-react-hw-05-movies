import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchForReviews } from "api/api";
import ReviewsInfo from "components/ReviewsInfo/ReviewsInfo";

const Reviews =()=>{
const {moviesId} = useParams();
const [reviews, setReviews]=useState([]);
//eslint-disable-next-line
const [error, setError] = useState(null);
useEffect(()=>{
        const getReviews = async (moviesId) => {
                try {
                  const data = await fetchForReviews(moviesId);
                  setReviews(data.results);
                  console.log(data);
                } catch (error) {
                  console.log('Something went wrong with fetching films:', error);
                  setError(error);
                }
              };
          
              getReviews(moviesId);
              //eslint-disable-next-line
},[])

return( <>
        <div><ReviewsInfo reviews ={reviews}/></div>
     </>) 
}
export default Reviews;