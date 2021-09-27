import './Header.css';
import { BsSearch } from 'react-icons/bs';
import { TiLocationOutline } from 'react-icons/ti';
import { BiCartAlt } from 'react-icons/bi';

function Header() {

    return (
        <div className='header'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo' />
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
                <div className='header__option'>
                    <p className='header--text'>Hello, Sign In</p>
                    <p className='header--text header--textbig'>Account & Lists</p>
                </div>

                <div className='header__option'>
                    <p className='header--text'>Returns</p>
                    <p className='header--text header--textbig'>& Orders</p>
                </div>

                <div className='header__option header__option--cart'>
                    <BiCartAlt style={{fontSize: '2rem'}}/>
                    <p className='header--text header--textbig header_option--cart-text'>Cart</p>
                    <p className='header--text header--shopping-cart-items header--textbig'>0</p>
                </div>

            </div>
        </div>
    )
}

export default Header;
