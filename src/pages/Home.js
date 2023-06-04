import { useEffect, useState } from "react";
import {fetchForHome} from '../api/api';
import MoviesList from '../components/MoviesList/MoviesList';


const Home = () => {
  const [films, setFilms] = useState([]);
  //eslint-disable-next-line
  const [error, setError] = useState(null);

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

  return (
    <div>
      <MoviesList films={films} />
      
    </div>
  );
};

export default Home;