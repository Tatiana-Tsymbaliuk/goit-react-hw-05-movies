import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchForDetails from '../api/api';
import InfoFilm from "components/InfoFilm/InfoFilm";

const MoviesDetiails = () =>{
        const {moviesId} = useParams();
        console.log(moviesId);
const [movie, setMovie]=useState([]);
//eslint-disable-next-line
const [error, setError] = useState(null);
        useEffect(()=>{
                
                const getMovie = async (moviesId) => {
                        try {
                          const details = await fetchForDetails(moviesId);
                          setMovie(details);
                        } catch (error) {
                          console.log('Something went wrong with fetching films:', error);
                          setError(error);
                        }
                      };
                  
                      getMovie();
        }, [])
        return(<>
                <div>MoviesDetiails:{moviesId}</div>
                <InfoFilm movie={movie}/>
                </>
        )
}
export default MoviesDetiails;