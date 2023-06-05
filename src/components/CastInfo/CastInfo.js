
const CastInfo = ({casts}) =>{
        console.log(casts);
        // const {
        //         id,
        //         cast,
        //       } = casts;
        
        return(<ul>
        {casts.map(({id, original_name, profile_path})=> (
                       <li key = {id} > <p>{original_name}</p>
                       <img 
                       src={profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : <></>}
                       alt={original_name}/>
                       </li>
                       
                      
                        ))}     
                </ul>
        )
}
export default CastInfo;