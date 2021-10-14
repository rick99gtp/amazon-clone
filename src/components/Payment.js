import './Payment.css';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { getCartTotal } from '../reducer';
import CurrencyFormat from 'react-currency-format';

const Payment = () => {
    const count = useSelector(state => state.items.length);
    const user = useSelector(state => state.user);
    const cart = useSelector(state => state);

    const items = cart.items.map(function (item, idx) {
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
        <div className='payment__container'>
            <h1 className='payment__header'>
                Checkout <span className='payment__item-count'>({count} item{count > 1 ? 's' : ''}) </span>
            </h1>

            <div className='payment__detail-container'>
                <div className='payment__transaction-details'>
                    <div className='payment__shipping-details'>
                        <p className='payment__title'>Shipping address</p>
                        <div className='payment__shipping-address'>
                            <ul>
                                <li>{user?.email}</li>
                                <li>123 Street Address Lane</li>
                                <li>City, State Zip</li>
                            </ul>
                        </div>
                        <div className='payment__change-address'>
                            Change
                        </div>
                    </div>

                    <div className='review-items__container'>
                        <p className='payment__title'>Review items</p>
                        {items}
                        <div className='payment__place-order'>
                            <button className='btn-place-your-order'>Place your order</button>
                            <div className='payment__order-total'>
                                <p className='review-items__order-total'>Order total: <span><CurrencyFormat value={getCartTotal(cart)} renderText={value => <div>{value}</div>} prefix={'$'} displayType={'text'} thousandSeparator={true} /></span></p>
                                <p>By placing your order, you agree to Amazon Clone's privacy notice and conditions of use.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='order-details__container'>
                    <div className='order-details'>
                        <button className='btn-place-your-order order-details-btn'>Place your order</button>
                        <p>By placing your order, you agree to Amazon Clone's privacy notice and conditions of use.</p>
                        <div className='order-summary'>
                            <h2>Order Summary</h2>
                            <div className='cost__list'>
                                <div className='cost__list-item'>
                                    <p>Items:</p>
                                    <p className='cost__list-item-price'>$26.68</p>
                                </div>
                                <div className='cost__list-item'>
                                    <p>Shipping & handling:</p>
                                    <p className='cost__list-item-price pb-10 bb-gray'>$0.00</p>
                                </div>
                                <div className='cost__list-item pt-10'>
                                    <p>Total before tax:</p>
                                    <p className='cost__list-item-price'>$26.68</p>
                                </div>
                                <div className='cost__list-item bb-gray'>
                                    <p>Estimated tax to be collected:</p>
                                    <p className='cost__list-item-price pb-10'>$0.00</p>
                                </div>
                                <p className='review-items__order-total just-space dis-flex py-5'>Order total:<span><CurrencyFormat value={getCartTotal(cart)} renderText={value => <div>{value}</div>} prefix={'$'} displayType={'text'} thousandSeparator={true} /></span></p>
                            </div>
                        </div>
                    </div>
                    <div className='order-summary__comment'>
                        Prime shipping benefits have been applied to your order.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;