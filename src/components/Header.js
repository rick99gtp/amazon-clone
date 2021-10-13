import './Header.css';
import { BsSearch } from 'react-icons/bs';
import { TiLocationOutline } from 'react-icons/ti';
import { BiCartAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';

const Header = () => {
    const counter = useSelector(state => state.items.length);
    const user = useSelector(state => state.user);

    const handleAuthentication = () => {
        const auth = getAuth();
        auth.signOut();
    };

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo' />
            </Link>
            <div className='header__deliveryaddress'>
                <div className='header__deliveryaddress--location'>
                    <TiLocationOutline />
                </div>
                <div className='header__deliveryaddress--text'>
                    <p className='header--text'>Hello</p>
                    <p className='header--text header--textbig'>Select your address</p>
                </div>
            </div>

            <div className='header__search'>
                <input className='header__search--input' type='text' />
                <div className='header__search--button'>
                    <BsSearch />
                </div>
            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'}>
                    <div id='accountsandlists' className='header__option' onClick={handleAuthentication}>
                        <p className='header--text'>Hello, {user ? user.email : 'Guest'}</p>
                        <p className='header--text header--textbig'>{user ? 'Sign out' : 'Sign in'}</p>
                    </div>
                </Link>

                <div className='header__option'>
                    <p className='header--text'>Returns</p>
                    <p className='header--text header--textbig'>& Orders</p>
                </div>

                <Link to='/checkout'>
                    <div className='header__option header__option--cart'>
                        <BiCartAlt style={{ fontSize: '2rem' }} />
                        <p className='header--text header--textbig header_option--cart-text'>Cart</p>
                        <p className='header--text header--shopping-cart-items header--textbig'>{counter}</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header;
