import {useState} from 'react';
import {FaSistrix} from 'react-icons/fa';

export default function Searchbar({onSubmit}){
const [nameSearch, setNameSearch] = useState('');
const handleNameChange = event=>{
        const {value } = event.currentTarget;

        setNameSearch(value);
}
const handleSubmit = event=>{
        event.preventDefault();
        if(nameSearch.trim()=== ''){
             alert('Введите свой поиск');
                return;  
        }  
         
             onSubmit(nameSearch);
             setNameSearch('');
}       


        return(
                <div>
                <form className="SearchForm " onSubmit = {handleSubmit}>
                  <button type="submit" className="SearchForm-button">
                  <span className="SearchForm-button-label"><FaSistrix className="Icon"/></span>
                  </button>
              
                  <input
                    className="SearchForm-input"
                    type="text"
                    name="nameSearch"
                    value={nameSearch}
                    onChange={handleNameChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                  />
                </form>
              </div>      
        )
}