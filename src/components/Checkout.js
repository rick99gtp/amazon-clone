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
        if(count > 0) {
            setCartHasItems(true);
        }
    }, [count]);

    return (
        <div className='checkout'>
            {cartHasItems ? <CartItems /> : <EmptyCart />
        }
        </div>
    )
}

export default Checkout;