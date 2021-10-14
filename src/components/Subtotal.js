import './Subtotal.css';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

const Subtotal = (props) => {
    const history = useHistory();
    return (
        <div className='subtotal__container'>
            <div className='subtotal__info'>
                <div className='subtotal__itemcount'>Subtotal ({props.numitems} items):</div>
                <div className='subtotal__amount'><CurrencyFormat value={props.subtotal} renderText={value => <div>{value}</div>} prefix={'$'} displayType={'text'} thousandSeparator={true} /></div>
            </div>
            <div className='subtotal__proceed--button' onClick={(() => history.push('/payment'))}>Proceed to checkout</div>
        </div>
    )
};

export default Subtotal;