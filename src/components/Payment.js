import './Payment.css';
import { useSelector } from 'react-redux';

const Payment = () => {
    const count = useSelector(state => state.items.length);
    const user = useSelector(state => state.user);

    return (
        <div className='payment-container'>
            <div className='payment-header'>
                Checkout ({count} item{count > 1 ? 's' : ''})
            </div>

            <div className='payment__detail-container'>
                <div className='payment__transaction-details'>
                    <div className='payment__shipping-details'>
                        <p>Shipping address</p>
                        <div className='payment__shipping-address'>
                            <ul>
                                <li>{user.email}</li>
                                <li>123 Street Address Lane</li>
                                <li>City, State Zip</li>
                            </ul>
                        </div>
                        <div className='payment__change-address'>
                            <a href="#">Change</a>
                        </div>
                    </div>

                    <div className='payment__review-items'>

                    </div>

                    <div className='payment__place-order'>
                        <button>Place your order</button>
                        <div className='payment__order-total'>
                            <p>Order total: $26.68</p>
                            <p>By placing your order, you agree to Amazon Clone's privacy notice and conditions of use.</p>
                        </div>
                    </div>
                    <div className='order-details'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;