import './Star.css';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const Star = (props) => {
    return (
        <div className='star'>
            {props.starActive ? <AiFillStar /> : <AiOutlineStar />}
        </div>
    )
}

export default Star
