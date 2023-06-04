const fetchForHome = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=c34b122fbb2a64c51e2c0723d2e06d38`)    
        return data.json();           
     }
const fetchForDetails = async (moviesId) =>{
        const details = await fetch(`https://api.themoviedb.org/3/movie/${moviesId}`)
        return details.json();         
}

//eslint-disable-next-line
export default {fetchForHome,fetchForDetails };
       