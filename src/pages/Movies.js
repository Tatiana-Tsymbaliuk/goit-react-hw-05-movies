import Searchbar from "components/Searchbar/Searchbar";
import SearchMovietList from "components/SearchMovietList/SearchMovietList"
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchForSearch } from 'api/api';

const Movies = () =>{
        const [films, setFilms] = useState([]);
       const [query, setQuery] = useState('');
        //eslint-disable-next-line
        const [error, setError] = useState(null);       
        const [searchParams, setSearchParams] = useSearchParams();
        const search = searchParams.get("search") ?? "";
        const location = useLocation()
        useEffect(()=>{
          if (query !== '' && query) {
                const getFilms = async search => {
                try {
                const data = await fetchForSearch(search);
                console.log(data.results);
                setFilms(data.results);
                } catch (error) {
                console.log('Something went wrong with fetching films:', error);
                setError(error);
                 }
                }      
                getFilms(query);}
              //eslint-disable-next-line
                       }, [query])
      
      
        const updateQueryString = (event) => {
          const pageQuery = event.target.value;
          console.log(event.target.value);
          setQuery(pageQuery)
          if(pageQuery===''){
            return setSearchParams({});
          }else{
            setSearchParams({search: pageQuery});
            
          }
          
        };
        const onChangeQuery = async event => {
          event.preventDefault();
                
                setQuery(query);
                setError(null);
                event.target.elements.query.value = "";
               
              }
             
console.log(location);

return(<>
                <Searchbar  value = {search} onChange={updateQueryString} onSearch={onChangeQuery} />
                <SearchMovietList movie={films} state ={{from: location}}/>
                
  </>
        
       )
       }
         export default Movies;












// import { useState, useEffect } from 'react';
// import Searchbar from "components/Searchbar/Searchbar";
// import { fetchForSearch } from 'api/api';
// import { useSearchParams } from 'react-router-dom';
// import { Link } from "react-router-dom";
// const Movies = () =>{
//     //eslint-disable-next-line    
//         const [nameSearch, setNameSearch] = useState('');
//         const [films, setFilms] = useState([]);
//         const [page, setPage] = useState(1);
//  //eslint-disable-next-line
//         const [error, setError] = useState(null);
//         const [searchParams, setSearchParams] = useSearchParams(); 
//         const search = searchParams.get(`title`);
//           console.log(search);
       
//       const handleNameChange = event=>{
//         //     const {value } = event.currentTarget;
//         //     setQuery(value);
//             setSearchParams({search: event.target.value});
//             const nextParams = event.target.value !== "" ? {search: event.target.value} : {};
//        setSearchParams(nextParams);
//               }
        
        
//         useEffect(()=>{
//                 const getFilms = async (nameSearch, page ) => {
//                         try {
//                           const data = await fetchForSearch(nameSearch, page);
//                           setFilms(data.results);
//                          setPage(prevPage => prevPage + 1); 
//                         } catch (error) {
//                           console.log('Something went wrong with fetching films:', error);
//                           setError(error);
//                         }
//                       };
                  
//                       getFilms(nameSearch, page);
//                        //eslint-disable-next-line
//         }, [])
// const visibleMovie = films.filter(film=>film.includes(search));

//         // const handleFormSubmit = nameSearch=>{
//         //         setNameSearch(nameSearch);
                
//         //       }

//         return(<>
//                 <div>Movies</div>
//                 <Searchbar value={search}  handleChange={handleNameChange}/>
//                 <ul>
//                {/* {visibleMovie.map(({id, title})=> (
//                 <Link to={(`/movies/${id}`)}><li key ={id}>{title}</li></Link>
                      
//                         ))}      */}
//                 </ul>
//                 </>

//         )
// }
// export default Movies;