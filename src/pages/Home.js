import { useEffect, useState } from "react";
import {fetchForHome} from '../api/api';
import MoviesList from '../components/MoviesList/MoviesList';
import { useLocation } from "react-router-dom";


const Home = () => {
  const [films, setFilms] = useState([]);
  //eslint-disable-next-line
  const [error, setError] = useState(null);
  const location =  useLocation();
  useEffect(() => {
    const getFilms = async () => {
      try {
        const data = await fetchForHome();
        setFilms(data.results);
      } catch (error) {
        console.log('Something went wrong with fetching films:', error);
        setError(error);
      }
    };

    getFilms();
  }, []);
console.log(location);
  return (
    <div>
      <MoviesList films={films} state ={{from: location}}/> 
    </div>
  );
};

export default Home;