import './Quantity.css';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className='quantity'>
            Qty: {quantity} <BiChevronDown style={{fontSize: '18px', marginLeft: '5px'}} />
        </div>
    )
};

export default Quantity;