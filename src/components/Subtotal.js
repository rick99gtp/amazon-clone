import './Subtotal.css';

const Subtotal = () => {
    return (
        <div className='subtotal__container'>
            <div className='subtotal__info'>
                <div className='subtotal__itemcount'>Subtotal (0 items)</div>
                <div className='subtotal__amount'>$0.00</div>
            </div>
            <button className='subtotal__proceed--button'>Proceed to checkout</button>
        </div>
    )
};

export default Subtotal;