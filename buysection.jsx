import ReactImageMagnify from 'react-image-magnify';
import './buysection.css';
import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

const Buysection = () => {

    const [pincode, setPincode] = useState("");
    const [isValidPincode, setIsValidPincode] = useState(true);
    const [pincodeResult, setPincodeResult] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [productinfo, showinfo] = useState('product-info');
    const [productheart,showproductheart] = useState('product-heart');
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const [bigImageSrc, setBigImageSrc] = useState('https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/1/8/189698_1_PicarioBig.jpg');

    //Image Magnifier
    const imageProps = {
        smallImage: {

            alt: 'Phasellus laoreet',
            isFluidWidth: true,
            src: bigImageSrc
        },
        largeImage: {
            src: bigImageSrc,
            width: 1500,
            height: 2100
        },
        enlargedImageContainerStyle: { background: '#fff', zIndex: 2 }
    };
    //

    const smallImages = [
        'https://cdn.ddecor.com/media/catalog/product/cache/e20ba31c0f20a095c97ffb148d93bcca/1/8/189698_2_PicarioBig.jpg',
        'https://cdn.ddecor.com/media/catalog/product/cache/e20ba31c0f20a095c97ffb148d93bcca/1/8/189698_3_PicarioBig.jpg',
        'https://cdn.ddecor.com/media/catalog/product/cache/e20ba31c0f20a095c97ffb148d93bcca/1/8/189698_5_PicarioBig.jpg',
        'https://cdn.ddecor.com/media/catalog/product/cache/e20ba31c0f20a095c97ffb148d93bcca/1/8/189698_4_PicarioBig.jpg',
        'https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/1/8/189698_1_PicarioBig.jpg',
    ];

    const handleSmallImageClick = (newSrc) => {
        setBigImageSrc(newSrc);
    };

    const handlePincodeChange = (e) => {
        const inputPincode = e.target.value;
        setPincode(inputPincode);
        setIsValidPincode(inputPincode.length === 6 && !isNaN(inputPincode));
    };

    const checkPincode = () => {
        if (pincode.length === 6 && !isNaN(pincode)) {
            setIsValidPincode(true);
            setPincodeResult("Valid Pincode!");
        } else {
            setIsValidPincode(false);
            setPincodeResult("Invalid Pincode. Please enter a valid 6-digit pincode.");
        }
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 0 && newQuantity <= 10) {
            setQuantity(newQuantity);
        }
    };

    const handleHeartClick = () => {
        setIsHeartClicked(!isHeartClicked);
    };
    const handlemouseenter=()=>{
        showproductheart('hide');
    }
    const handlemouseleave = ()=>{
        showproductheart('product-heart');
    }

    return (
        <>
        <Header/>
            <div class="buysection-contain">
                <div class="product-details">
                    <div class="product-images">
                        <div class="big-image" onMouseEnter={handlemouseenter} onMouseLeave={handlemouseleave}>
                            <ReactImageMagnify {...imageProps} /></div>

                        <div class="small-images">
                            {smallImages.map((smallImageSrc, index) => (
                                <img
                                    key={index}
                                    src={smallImageSrc}
                                    alt={`Small Image ${index + 1}`}
                                    class="small-image"
                                    onClick={() => handleSmallImageClick(smallImageSrc)}
                                />
                            ))}
                        </div>
                    </div>
                    
                        <div class={productinfo}>

                            <h2 className="product-name">Acme</h2>
                            <div className={productheart} onClick={handleHeartClick}>
                                <i className={isHeartClicked ? "fill fas fa-heart red" : "notfill far fa-heart"}></i>
                            </div>

                            <div class="line-between"></div>
                            <p class="product-description">Acme - Primary Collection Double BedSheet</p>
                            <p class="price">Price: <span class="product-price"><i class="fa-solid fa-indian-rupee-sign"></i>1000</span></p>
                            <p class="customer-rating">Customer Rating: 4.5 stars</p>
                            <div class="line-between"></div>

                            <p class="qty">QTY</p>
                            <div className="quantity-bar">
                                <span className="quantity-minus" onClick={() => handleQuantityChange(quantity - 1)}>-</span>
                                <input type="number" className="quantity-input" value={quantity} min="0" max="10"
                                    onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                                />
                                <span className="quantity-plus" onClick={() => handleQuantityChange(quantity + 1)}>+</span>
                            </div>

                            <div class="desc">
                                <p class="pd">Product Description</p>
                                <p>Design type : Abstract</p>
                                <p>Thread Count : 136tc</p>
                                <p>Pattern : Double-90x108</p>
                                <p>Bed Sheet (1N): 2.29 m x 2.74 m</p>
                                <p>Pillow Cover (2N): 46 cm x 68 cm</p>
                            </div>

                            <div class="action-buttons">
                                <button class="add-to-cart">Add to Cart <i class="fa-solid fa-cart-shopping"></i></button>
                                <button class="buy-now">Buy Now <i class="fas fa-money-bill"></i></button>
                            </div>

                            <div class="checkfordelivery">Check for delivery-location</div>

                            <div class="pincode-check">
                                <input type="text" id="pincode-input" placeholder="Enter Pincode" value={pincode} onChange={handlePincodeChange} />
                                <button onClick={checkPincode}>Check</button>
                                <p id="pincode-result" style={{ color: isValidPincode ? "green" : "red" }}>{pincodeResult}</p>
                            </div>

                            <div class="offers"><i class="fa-regular fa-star"></i> Offers <i class="fa-solid fa-plus"></i><br />
                                <p>Save Extra with more options</p>
                            </div>
                            <div class="line-between"></div>

                            <div class="return-policy"><i class="fa-solid fa-rotate-left"></i> 7-days return policy <i class="fa-solid fa-plus"></i><br />
                                <p>Know about return & exchange policy</p>
                            </div>
                            <div class="line-between"></div>

                            <div class="payment-mode"><i class="fa-solid fa-indian-rupee-sign"></i> Payment modes <i class="fa-solid fa-plus"></i><br />
                                <p>Know more about the payment modes</p>
                            </div>
                            <div class="line-between"></div>
                        </div>
                    
                </div>
                
            </div>
            <Footer/>

        </>
    );
}
export default Buysection;