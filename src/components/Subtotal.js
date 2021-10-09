import './Subtotal.css';

const Subtotal = (props) => {
    return (
        <div className='subtotal__container'>
            <div className='subtotal__info'>
                <div className='subtotal__itemcount'>Subtotal ({props.numitems} items):</div>
                <div className='subtotal__amount'>${props.subtotal}</div>
            </div>
            <div className='subtotal__proceed--button'>Proceed to checkout</div>
        </div>
    )
};

export default Subtotal;