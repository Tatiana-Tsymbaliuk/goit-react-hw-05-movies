export const fetchForHome = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=c34b122fbb2a64c51e2c0723d2e06d38`)    
        return data.json();           
     }
export const fetchForDetails = async (id) =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c34b122fbb2a64c51e2c0723d2e06d38&language=en-US`)
        return data.json();         
}
export const fetchForCasts = async (id)=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c34b122fbb2a64c51e2c0723d2e06d38`)
        return data.json();       
}
export const fetchForReviews = async (id)=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=c34b122fbb2a64c51e2c0723d2e06d38&language=en-US`)
        return data.json();       
}
export const fetchForSearch = async ({search})=>{
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c34b122fbb2a64c51e2c0723d2e06d38&language=en-US&query=${search}&page=1&include_adult=false`)
        return data.json();      //'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
        
}


       