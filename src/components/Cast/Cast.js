import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchForCasts } from "api/api";
import CastInfo from "components/CastInfo/CastInfo";
const Cast =()=>{
const {moviesId} = useParams();
const [casts, setCasts]=useState([]);
//eslint-disable-next-line
const [error, setError] = useState(null);
useEffect(()=>{
        const getCast = async (moviesId) => {
                try {
                  const data = await fetchForCasts(moviesId);
                  setCasts(data.cast);
                  console.log(data);
                } catch (error) {
                  console.log('Something went wrong with fetching films:', error);
                  setError(error);
                }
              };
          
              getCast(moviesId);
              //eslint-disable-next-line
},[])
return(<>
        <div>Cast: {moviesId}</div>
        <div><CastInfo casts={casts}/></div>
      </>)
}
export default Cast;