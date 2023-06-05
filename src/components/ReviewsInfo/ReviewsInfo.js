const ReviewsInfo = ({reviews}) =>{
       console.log(reviews);
        return(
                <>
        {(reviews.length===0)?( <p>We don't have any reviews for this movie</p>) :
        (<ul>
        {reviews.map(({id, author, content})=> (
                       <li key = {id}>
                        <p>Author: {author}</p>
                        <div>{content}</div>
                        </li>
                       ))}     
                </ul>) 
        }</>
                       
        )
}
export default ReviewsInfo;