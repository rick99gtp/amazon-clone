import './CartSubtotal.css';
import { useSelector } from 'react-redux';
import CurrencyFormat from 'react-currency-format';

const CartSubtotal = (props) => {

    return (
        <div className='cartsubtotal'>
            <p className='cartsubtotal__numitems'>Subtotal ({props.numitems} item{props.numitems > 1 ? 's' : null}):</p>
            <CurrencyFormat value={props.subtotal} renderText={value => <div>{value}</div>} prefix={'$'} displayType={'text'} thousandSeparator={true} />
        </div>
    )
};

export default CartSubtotal;
