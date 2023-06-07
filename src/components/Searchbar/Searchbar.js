// import { useState } from 'react';
import {FaSistrix} from 'react-icons/fa';
import { useState } from 'react';

 const Searchbar=({ onSearch })=>{
 const [query, setQuery] = useState('');
  
// const visibleMovie = films.filter(film=>film.includes(search));

const handleSearchInput = e => {
  const { value } = e.currentTarget;

  setQuery(value);
};      

const handleSubmit = event=>{
  event.preventDefault();
  if(query.trim()=== ''){
       alert('Введите свой поиск');
          return;  
  }  }
   
       onSearch(query);
       setQuery('');
 

        return(
                <div>
                <form className="SearchForm" onSubmit={ handleSubmit }>
                  <button type="submit" className="SearchForm-button">
                  <span className="SearchForm-button-label"><FaSistrix className="Icon"/></span>
                  </button>
              
                  <input
                    className="SearchForm-input"
                    type="text"
                    name="query"
                    value={query}
                    onChange={handleSearchInput}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                  />
                </form>
              </div>      
        )
}
export default Searchbar;