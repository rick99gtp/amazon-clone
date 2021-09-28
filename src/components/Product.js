import './Product.css';
import Star from './Star';

function Product(props) {
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

            <button>Add to cart</button>
        </div>
    )
}

export default Product
