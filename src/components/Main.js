import './Main.css';
import Product from './Product';

function Main() {
    return (
        <div className='main'>
            <img className='main__image' src='https://m.media-amazon.com/images/I/61Q+C2yYwyL._SX3000_.jpg' alt='' />
            <div className='main__row'>
                <Product title='Lenovo Chromebook Flex 3 11" Laptop, 
                    11.6-Inch HD (1366 x 768) IPS Display, 
                    MediaTek MT8173C Processor, 4GB LPDDR3, 
                    64 GB eMMC, Chrome OS, 82HG0006US, 
                    Blizzard White'
                    stars={4}
                    price={'1,769.99'}
                />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default Main
