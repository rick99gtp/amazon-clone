import './CartItem.css';
import Star from './Star';
import { useDispatch } from 'react-redux';
import Quantity from './Quantity';

const CartItem = (props) => {

    const dispatch = useDispatch();

    return (
        <div className='cartitem__container'>
            <div className='cartitem__info'>

                <img className='cartitem__info--image' src={props.img} alt='' />

                <div className='cartitem__info--right'>
                    <div className='cartitem__info--title'>
                        {props.title}
                        <div className='cartitem__info--stars'>
                            {Array(5).fill().map((_, i) => <Star key={i} starActive={props.stars >= i + 1 ? true : false} />)}
                        </div>
                        <div className='cartitem__actions'>
                            <Quantity />
                            <div className='cartitem__deleteitem' onClick={() => dispatch({
                                type: "REMOVE_FROM_CART", id: props.id
                            })}>Delete</div>
                        </div>
                    </div>
                    <div className='cartitem__price'>
                        <p className='cartitem__info--price-container'>
                            <span className='cartitem__info--price'> ${props.price}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;