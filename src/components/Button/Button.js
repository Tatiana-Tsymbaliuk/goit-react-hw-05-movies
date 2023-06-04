import {FaArrowLeft} from 'react-icons/fa';
import '../Button/Button.css'
export const Button =()=>{
        return (
                <>
                <span className='Button-label'><FaArrowLeft/></span> 
        <button type="button" className='Button'>Go back</button>
        </>
        )
}

