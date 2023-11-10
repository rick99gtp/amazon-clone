import "./Main.css";
import Product from "./Product";

const Main = () => {
	return (
		<div className="main">
			<img
				className="main__image"
				src="https://m.media-amazon.com/images/I/61Q+C2yYwyL._SX3000_.jpg"
				alt=""
			/>
			<div className="main__row">
				<Product
					id={1}
					title='Lenovo Chromebook Flex 3 11" Laptop, 
                    11.6-Inch HD (1366 x 768) IPS Display, 
                    MediaTek MT8173C Processor, 4GB LPDDR3, 
                    64 GB eMMC, Chrome OS, 82HG0006US, 
                    Blizzard White'
					stars={4}
					price={1769.99}
					img="https://m.media-amazon.com/images/I/611DJR7V1sL._AC_SX466_.jpg"
				/>
				<Product
					id={2}
					title="Alienware m17 R4, 17.3 inch FHD (Full HD) Gaming Laptop - 
                    Intel Core i7-10870H, 16GB DDR4 RAM, 1TB SSD, NVIDIA GeForce RTX 3060 6GB GDDR6, 
                    Windows 10 Home - Lunar Light (Latest Model)"
					stars={3}
					price={2199.98}
					img="https://m.media-amazon.com/images/I/71YoD5BcbqL._AC_SX522_.jpg"
				/>
				<Product
					id={3}
					title='Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | 
                    NVIDIA GeForce RTX 3050 Laptop GPU | 15.6" FHD 144Hz IPS Display | 8GB DDR4 | 
                    256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard'
					stars={4}
					price={808.98}
					img="https://m.media-amazon.com/images/I/81hN5OHj-RL._AC_SX522_.jpg"
				/>
			</div>

			<div className="main__row">
				<Product
					id={4}
					title='AOC AGON Curved Gaming Monitor 49" (AG493UCX), 
                    Dual QHD 5120x1440 @ 120Hz, VA Panel, 1ms 120Hz Adaptive-Sync, 
                    121% sRGB, Height Adjustable, 4-Yr Zero Dead Pixels Manufacturer 
                    Guarantee'
					stars={5}
					price={1199.99}
					img="https://m.media-amazon.com/images/I/71IXyLtFzpL._AC_SX679_.jpg"
				/>
			</div>

			<div className="main__row">
				<Product
					id={5}
					title='Lenovo Chromebook Flex 3 11" Laptop, 
                    11.6-Inch HD (1366 x 768) IPS Display, 
                    MediaTek MT8173C Processor, 4GB LPDDR3, 
                    64 GB eMMC, Chrome OS, 82HG0006US, 
                    Blizzard WhiteDeco Gear 35" Curved Ultrawide LED Gaming Monitor 
                    21:9 Aspect Ratio, Crisp 2560 x 1080 Resolution, 16.7 Million Colors, 
                    75 HZ Refresh Rate, 2000:1 Contrast Ratio, (HDMI, DVI, and DP Connections)'
					stars={4}
					price={359.99}
					img="https://m.media-amazon.com/images/I/61gBigSCEWL._AC_SX679_.jpg"
				/>
				<Product
					id={6}
					title='LG LED Monitor 34" Curved UltraWide WQHD (3840 x 1440) IPS Display, 
                    99% Color Accuracy, Immersive, Detailed Contrast, USB-C, Anti-Glare, Adjustable - Black'
					stars={4}
					price={669.99}
					img="https://m.media-amazon.com/images/I/8105iPo3tQL._AC_SX522_.jpg"
				/>
			</div>
		</div>
	);
};

export default Main;
