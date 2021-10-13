import './EmptyCart.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EmptyCart = () => {
    const state = useSelector(state => state);

    return (
        <div className='checkout__empty-cart'>
            <img src='https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg' alt='empty cart' />
            <div className='checkout__empty-cart--info'>
                <h1>Hello, {state.user ? state.user.email : 'Guest'}</h1>
                <h2>Your Amazon Cart is empty</h2>
                <p href="#">Shop today's deals</p>
                {state.user ? null :
                <div className='checkout__empty-cart--buttons'>
                    <Link to='/signin' style={{ textDecoration: 'none' }}>
                        <div className='user__sign-in'>Sign in to your account</div>
                    </Link>
                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                        <div className='user__sign-up'>Sign up now</div>
                    </Link>
                </div> }
            </div>
        </div>
    )
};

export default EmptyCart;