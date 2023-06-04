const InfoFilm = ({movie}) =>{
        return( <ul>
                {movie.map(({id, title, poster_path, overview, vote_average, genre_ids})=> (
                             <li key ={id}>
                               <p>{title}</p>
                               <img 
                               src={poster_path}
                               alt={title}/>
                               <div>{overview}</div>
                               <div>{vote_average}</div>
                               {/* <div>{genre_ids}</div> */}
                                </li>
                               
                                ))}     
                        </ul>
                )
}
export default InfoFilm;