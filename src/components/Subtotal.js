import './Subtotal.css';
import { useHistory } from 'react-router-dom';

const Subtotal = (props) => {
    const history = useHistory();
    return (
        <div className='subtotal__container'>
            <div className='subtotal__info'>
                <div className='subtotal__itemcount'>Subtotal ({props.numitems} items):</div>
                <div className='subtotal__amount'>${props.subtotal}</div>
            </div>
            <div className='subtotal__proceed--button' onClick={(() => history.push('/payment'))}>Proceed to checkout</div>
        </div>
    )
};

export default Subtotal;