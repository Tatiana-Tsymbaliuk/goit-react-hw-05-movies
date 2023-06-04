export const fetchForHome = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=c34b122fbb2a64c51e2c0723d2e06d38`)    
        return data.json();           
     }
export const fetchForDetails = async (id) =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c34b122fbb2a64c51e2c0723d2e06d38&language=en-US`)
        return data.json();         
}

// //eslint-disable-next-line
// export default {fetchForHome,fetchForDetails };
       