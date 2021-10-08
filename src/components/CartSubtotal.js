import './CartSubtotal.css';
import { useSelector } from 'react-redux';
import CurrencyFormat from 'react-currency-format';

const CartSubtotal = (props) => {

    return (
        <div className='cartsubtotal'>
            Subtotal ({props.numitems} item{props.numitems > 1 ? 's' : null}):
            <CurrencyFormat value={props.subtotal} renderText={value => <div>{value}</div>} prefix={'$'} displayType={'text'} thousandSeparator={true} />;
        </div>
    )
};

export default CartSubtotal;
