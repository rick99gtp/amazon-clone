import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './CartItems.css';
import CartSubtotal from './CartSubtotal';

const CartItems = () => {
    const cart = useSelector(state => state);

    // map through store.items for all items in cart
    const items = cart.items.map(function (item) {
        return (
            <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                stars={item.rating}
                price={item.price}
                img={item.image}
            />
        )
    });

    return (
        <div className='checkout__items'>
            <div className='checkout__itemheader'>
                <h1>Shopping Cart</h1>
            </div>
            <div className='checkout__pricetext'>
                Price
            </div>
            {items}
            <CartSubtotal />
        </div>
    )
};

export default CartItems;