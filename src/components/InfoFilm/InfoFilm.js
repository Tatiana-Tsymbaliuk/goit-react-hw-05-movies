const InfoFilm = ({movie}) =>{
        const {
                
                title,
                vote_average,
                poster_path,
                overview,
                genres,
              } = movie;

              const posterUrl = poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : <></>;
        return( <article>
                             
        <p>{title}</p>
        <div><img 
        src={posterUrl}
        alt={title}/></div>
        <div><p>Overview:</p>{overview ? <span>{overview}</span> : <span>N/A</span>}</div>

        <div><p>User Score:</p>{Math.round(vote_average*10)}%</div>
        <div><p>Generes:</p></div>                      
        {genres ? (
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <span>N/A</span>
        )}    
         </article>
                )
}
export default InfoFilm;