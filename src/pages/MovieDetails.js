import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import {fetchForDetails} from '../api/api';
import InfoFilm from "components/InfoFilm/InfoFilm";

const MoviesDetiails = () =>{
const {moviesId} = useParams();
        console.log(moviesId);
const [movie, setMovie]=useState('');
//eslint-disable-next-line
const [error, setError] = useState(null);

        useEffect(()=>{      
                const getMovie = async (moviesId) => {
                        try {
                          const data = await fetchForDetails(moviesId);
                          setMovie(data);
                          console.log(data);
                        } catch (error) {
                          console.log('Something went wrong with fetching films:', error);
                          setError(error);
                        }
                      };
                  
                      getMovie(moviesId);
                      //eslint-disable-next-line
        }, [])
        return(<>
                {/* <div>MoviesDetiails:{moviesId}</div> */}
                <InfoFilm movie={movie}/>
                <ul>
                        <li><Link to="cast">Cast</Link></li>
                        <li><Link to="reviews">Reviews</Link></li>
                </ul>
                <Outlet/>
                </>
        )
}
export default MoviesDetiails;