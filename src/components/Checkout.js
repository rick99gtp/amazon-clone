import './Checkout.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import EmptyCart from './EmptyCart';
import CartItems from './CartItems';

const Checkout = () => {
    const [cartHasItems, setCartHasItems] = useState(false);

    const cart = useSelector(state => state);

    const count = cart.items.length;

    useEffect(() => {
        // if cart is empty, sets to 0 which is falsy, everything else is true ( > 0 )
        setCartHasItems(count);
    }, [count]);

    return (
        <div className='checkout'>
            {cartHasItems ? <CartItems /> : <EmptyCart />
            }
        </div>
    )
}

export default Checkout;