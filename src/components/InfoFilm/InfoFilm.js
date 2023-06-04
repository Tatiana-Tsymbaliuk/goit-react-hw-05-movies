const InfoFilm = ({movie}) =>{
        const {
                
                title,
                vote_average,
                poster_path,
                overview,
                genres,
              } = movie;
        return( <>
                             
                               <p>{title}</p>
                               <img 
                               src={poster_path}
                               alt={title}/>
                               <div>{overview}</div>
                               <div>{vote_average}</div>
                               <div>{genres}</div>
                                
                               
                                    
                        </>
                )
}
export default InfoFilm;