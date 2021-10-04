import './Checkout.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import EmptyCart from './EmptyCart';
import CartItems from './CartItems';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [cartHasItems, setCartHasItems] = useState(false);

    const cart = useSelector(state => state);

    const count = cart.items.length;

    useEffect(() => {
        // if cart is empty, set to 0 which is falsy, everything else is true ( > 0 )
        setCartHasItems(count);
    }, [count]);

    return (
        <div className='checkout'>
            <div className='checkout__items--div'>
                <div className='checkout__header--ad'>
                    <img src="" alt="amazon ad" />
                </div>
                {cartHasItems ? <CartItems /> : <EmptyCart />}
            </div>
            <div className='checkout__price--div'>
                {cartHasItems ? <Subtotal /> : null}
            </div>
        </div>
    )
}

export default Checkout;