import './Product.css';
import Star from './Star';
import store from '../store';

const Product = (props) => {

    const addToCart = () => {
        //dispatch to store
        store.dispatch({
            type: "ADD_TO_CART",
            payload: {
              id: props.id,
              title: props.title,
              image: props.img,
              price: props.price,
              rating: props.stars,
            },
          });
    };

    return (
        <div className='product'>
            <div className='product__info'>
                <p className='product__info--title'>
                    {props.title}
                </p>
                <div className='product__info--stars'>
                    {Array(5).fill().map((_,i) => <Star key={i} starActive={props.stars >= i + 1 ? true : false}/>)}
                </div>
                <p className='product__info--price-container'>
                    Price:
                    <span className='product__info--price'> ${props.price}</span>
                </p>
            </div>

            <img className='product__info--image' src={props.img} alt='' />

            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product
