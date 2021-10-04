import './Subtotal.css';

const Subtotal = () => {
    return (
        <div className='subtotal__container'>
            <div className='subtotal__info'>
                <div className='subtotal__itemcount'>Subtotal (0 items)</div>
                <div className='subtotal__amount'>$0.00</div>
            </div>
            <div className='subtotal__proceed--button'>Proceed to checkout</div>
        </div>
    )
};

export default Subtotal;