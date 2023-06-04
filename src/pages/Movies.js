import {useState} from 'react';
import Searchbar from "components/Searchbar/Searchbar";

const Movies = () =>{
        //eslint-disable-next-line
        const [nameSearch, setNameSearch] = useState('');

        const handleFormSubmit = nameSearch=>{
                setNameSearch(nameSearch);
                
              }

        return(<>
                <div>Movies</div>
                <Searchbar onSubmit={handleFormSubmit}/>
                </>

        )
}
export default Movies;