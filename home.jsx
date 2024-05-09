import { useState, useEffect, useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';

const Home = () => {
    const navigate = useNavigate();
    const firstSliderdata = [
        { path: 'https://www.spaces.in/cdn/shop/files/2880-1234-3.jpg?v=1707890121', alt: 'product1 Image' },
        { path: 'https://www.spaces.in/cdn/shop/files/2880-1234_5ff9c399-c648-41e7-8a2f-20f9b2f13e4e.jpg?v=1706794742', alt: 'product2 Image' },
        { path: 'https://www.spaces.in/cdn/shop/files/2880-1234_e34cccd3-62de-4f00-8942-382299c3a183.jpg?v=1697115965', alt: 'product3 Image' },
        { path: 'https://www.spaces.in/cdn/shop/files/2880-1234-3.jpg?v=1707890121', alt: 'product4 Image' },
        { path: 'https://www.spaces.in/cdn/shop/files/2880-1234_5ff9c399-c648-41e7-8a2f-20f9b2f13e4e.jpg?v=1706794742', alt: 'product5 Image' },
        { path: 'https://www.spaces.in/cdn/shop/files/2880-1234_e34cccd3-62de-4f00-8942-382299c3a183.jpg?v=1697115965', alt: 'product6 Image' },
    ];
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };




 //bedroom section
 const [images, setImages] = useState([
    {
        name: 'Product 1',
        default: 'https://www.spaces.in/cdn/shop/files/1068020-2_1024x1024.jpg?v=1700826782',
        hover: 'https://www.spaces.in/cdn/shop/files/1068020-1_1024x1024.jpg?v=1700826782'
    },
    {
        name: 'Product 2',
        default: 'https://www.spaces.in/cdn/shop/files/1068897-2_1024x1024.jpg?v=1696500550',
        hover: 'https://www.spaces.in/cdn/shop/files/1068897-1_1024x1024.jpg?v=1696500550'
    },
    {
        name: 'Product 3',
        default: 'https://www.spaces.in/cdn/shop/files/1068893-2_1024x1024.jpg?v=1696500282',
        hover: 'https://www.spaces.in/cdn/shop/files/1068893-1_1024x1024.jpg?v=1696500282'
    },
    {
        name: 'Product 4',
        default: 'https://www.spaces.in/cdn/shop/files/1068830-2_1024x1024.jpg?v=1697687671',
        hover: 'https://www.spaces.in/cdn/shop/files/1068830-1_1024x1024.jpg?v=1697687671'
    },
    {
        name: 'Product 5',
        default: 'https://www.spaces.in/cdn/shop/files/1068640-2_1024x1024.jpg?v=1703567272',
        hover: 'https://www.spaces.in/cdn/shop/files/1068640-1_1024x1024.jpg?v=1703567272'
    },
    {
        name: 'Product 6',
        default: 'https://www.spaces.in/cdn/shop/files/1068825-2_1024x1024.jpg?v=1697687635',
        hover: 'https://www.spaces.in/cdn/shop/files/1068825-1_1024x1024.jpg?v=1697687635'
    }
]);

const handleMouseOver = (index) => {
    setImages(prevImages => {
        const newImages = [...prevImages];
        newImages[index].current = newImages[index].hover;
        return newImages;
    });
};

const handleMouseOut = (index) => {
    setImages(prevImages => {
        const newImages = [...prevImages];
        newImages[index].current = newImages[index].default;
        return newImages;
    });
};

const [images2, setImages2] = useState([
    {
        name: 'Product 1',
        default: 'https://www.spaces.in/cdn/shop/files/1069721-2_1024x1024.jpg?v=1696499869',
        hover: 'https://www.spaces.in/cdn/shop/files/1069721-1_1024x1024.jpg?v=1696499868'
    },
    {
        name: 'Product 2',
        default: 'https://www.spaces.in/cdn/shop/files/1069726-2_1024x1024.jpg?v=1696499657',
        hover: 'https://www.spaces.in/cdn/shop/files/1069726-1_1024x1024.jpg?v=1696499657'
    },
    {
        name: 'Product 3',
        default: 'https://www.spaces.in/cdn/shop/files/1069714-2_1024x1024.jpg?v=1696499965',
        hover: 'https://www.spaces.in/cdn/shop/files/1069714-1_1024x1024.jpg?v=1696499965'
    },
    {
        name: 'Product 4',
        default: 'https://www.spaces.in/cdn/shop/files/1069719-2_1024x1024.jpg?v=1696499927',
        hover: 'https://www.spaces.in/cdn/shop/files/1069719-1_1024x1024.jpg?v=1696499928'
    },
    {
        name: 'Product 5',
        default: 'https://www.spaces.in/cdn/shop/files/1069725-2_1024x1024.jpg?v=1696500424',
        hover: 'https://www.spaces.in/cdn/shop/files/1069725-1_1024x1024.jpg?v=1696500424'
    },
    {
        name: 'Product 6',
        default: 'https://www.spaces.in/cdn/shop/files/1069713-2_1024x1024.jpg?v=1696500396',
        hover: 'https://www.spaces.in/cdn/shop/files/1069713-1_1024x1024.jpg?v=1696500396'
    }
]);

const handleMouseOver2 = (index) => {
    setImages2(prevImages => {
        const newImages = [...prevImages];
        newImages[index].current = newImages[index].hover;
        return newImages;
    });
};

const handleMouseOut2 = (index) => {
    setImages2(prevImages => {
        const newImages = [...prevImages];
        newImages[index].current = newImages[index].default;
        return newImages;
    });
};


function handleMouseEnter(event) {
    const productName = event.currentTarget.querySelector('.producttopimage1');
    if (productName) {
        productName.classList.add('fade-in');
    }
}

function handleMouseLeave(event) {
    const productName = event.currentTarget.querySelector('.producttopimage1');
    if (productName) {
        productName.classList.remove('fade-in');
    }
}


    const [myIndex, setMyIndex] = useState(0);

    useEffect(() => {
        const carousel = () => {
            const slides = document.getElementsByClassName('mySlides');
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.opacity = 0;
                slides[i].style.zIndex = 0;
            }

            setMyIndex((prevIndex) => (prevIndex + 1 > slides.length - 1 ? 0 : prevIndex + 1));

            slides[myIndex].style.opacity = 1;
            slides[myIndex].style.zIndex = 1;
        };

        const interval = setInterval(carousel, 1500);

        return () => {
            clearInterval(interval);
        };
    }, [myIndex]);

    return (
        <>
            <div className='main-home'>
                {/* Auto Slider  */}

                <div className="slider-container">
                    <Slider {...settings}>
                        {/* Replace these URLs with your actual image URLs */}
                        {firstSliderdata.map((slide) => (
                            <div >
                                <img src={slide.path} alt={slide.alt} />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Auto Slider End  */}


                <div className='homebed'><p>Premium Bedsheets</p></div>
                <div className="homeframe-container">
                    {images.map((image, index) => (
                        <div key={index} className="homeframe">
                            <img
                                onMouseOver={() => handleMouseOver(index)}
                                onMouseOut={() => handleMouseOut(index)}
                                src={image.current || image.default}
                                alt={`Product ${index + 1}`}
                            />
                            <div className="homeproduct-name">{image.name}</div>
                        </div>
                    ))}
                </div>



                <div className='homebed'><p>Premium Blankets</p></div>
                <div className="homeframe-container">
                    {images2.map((image, index) => (
                        <div key={index} className="homeframe">
                            <img
                                onMouseOver={() => handleMouseOver2(index)}
                                onMouseOut={() => handleMouseOut2(index)}
                                src={image.current || image.default}
                                alt={`Product ${index + 1}`}
                            />
                            <div className="homeproduct-name">{image.name}</div>
                        </div>
                    ))}
                </div>



                <div className='bigimage'>
                    <div className='homebig'>
                        <img style={{ width: '100%', height: '400px' }} src='https://media.istockphoto.com/id/1213695547/photo/3d-rendering-of-an-elegant-bedroom.jpg?b=1&s=612x612&w=0&k=20&c=SXgsSUdhOAdzu_2uNyx_5Ee-u8o4_k5QPVL6sbuuA_0=' />
                    </div>
                    <div className='homedaily'><p>Daily Blockbuster Deals</p></div>
                </div>



                <div className='homeimage10'>
                    <div className='homeimagecombo'>
                    <div className="product-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <a className='producttopimage1'><img src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600' /></a>
                            <div className="product-name">New Arrivals</div>
                        </div>
                    <div className="product-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <a className='producttopimage1'><img src='https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600' /></a>
                            <div className="product-name">Best Sellers</div>
                        </div>
                    <div className="product-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <a className='producttopimage1'><img src='https://cdn.pixabay.com/photo/2014/07/31/00/40/bedroom-405920_640.jpg' /></a>
                            <div className="product-name">Best Offers</div>
                        </div>
                    <div className="product-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <a className='producttopimage1 none'><img src='https://cdn.pixabay.com/photo/2016/04/24/03/47/bed-1348721_1280.jpg' /></a>
                            <div className="product-name">Customizations</div>
                        </div>
                    <div className="product-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <a className='producttopimage1'><img src='https://cdn.pixabay.com/photo/2016/08/07/00/26/bed-1575460_640.jpg' /></a>
                            <div className="product-name">Combos</div>
                        </div>
                    <div className="product-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <a className='producttopimage1'><img src='https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600' /></a>
                            <div className="product-name">New Designs</div>
                        </div>
                    </div>
                </div>


                <div style={{ position: 'relative', width: '100%', height: '500px', marginTop: '20px' }}>
                    <div className='homechangingimage' style={{ position: 'relative', width: '100%', height: '95%', overflow: 'hidden' }}>
                        <img
                            className="mySlides"
                            src="https://www.spaces.in/cdn/shop/files/2880-1234_5ff9c399-c648-41e7-8a2f-20f9b2f13e4e.jpg?v=1706794742"
                            alt="Slide 1"
                            style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
                        />
                        <img
                            className="mySlides"
                            src="https://www.spaces.in/cdn/shop/files/2880-1234_e34cccd3-62de-4f00-8942-382299c3a183.jpg?v=1697115965"
                            alt="Slide 2"
                            style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
                        />
                        <img
                            className="mySlides"
                            src="https://www.spaces.in/cdn/shop/files/2880-1234-3.jpg?v=1707890121"
                            alt="Slide 3"
                            style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
                        />
                    </div>
                </div>



                <h3 className='hometoppicks'>Top Picks</h3>
                <div className='homemaincontainer'>

                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <div className="image-container">
                                <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                            </div>
                        </div>
                        <div className='branddiv'>
                            <div className='brandnamecommon'>
                                <a className='brandname'>Brand: Brand Name</a>
                                <a><i className='far'>&#xf004;</i></a>
                            </div>
                            <div className='homeprice'>
                                <p>Price: $59.99</p>
                                <p>Customer Rating: X stars</p>
                                <div className='homecommonbutton'>
                                    <button>Add to Cart</button>
                                    <div className='homebuy'>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <div className="image-container">
                                <img src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                            </div>
                        </div>
                        <div className='branddiv'>
                            <div className='brandnamecommon'>
                                <a className='brandname'>Brand: Brand Name</a>
                                <a><i class='far'>&#xf004;</i></a>
                            </div>
                            <div className='homeprice'>
                                <p>Price: $59.99</p>
                                <p>Customer Rating: X stars</p>
                                <div className='homecommonbutton'>
                                    <button>Add to Cart</button>
                                    <div className='homebuy'>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <div className="image-container">
                                <img src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                            </div>
                        </div>
                        <div className='branddiv'>
                            <div className='brandnamecommon'>
                                <a className='brandname'>Brand: Brand Name</a>
                                <a><i class='far'>&#xf004;</i></a>
                            </div>
                            <div className='homeprice'>
                                <p>Price: $59.99</p>
                                <p>Customer Rating: X stars</p>
                                <div className='homecommonbutton'>
                                    <button>Add to Cart</button>
                                    <div className='homebuy'>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <div className="image-container">
                                <img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                            </div>
                        </div>
                        <div className='branddiv'>
                            <div className='brandnamecommon'>
                                <a className='brandname'>Brand: Brand Name</a>
                                <a><i class='far'>&#xf004;</i></a>
                            </div>
                            <div className='homeprice'>
                                <p>Price: $59.99</p>
                                <p>Customer Rating: X stars</p>
                                <div className='homecommonbutton'>
                                    <button>Add to Cart</button>
                                    <div className='homebuy'>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <div className="image-container">
                                <img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                            </div>
                        </div>
                        <div className='branddiv'>
                            <div className='brandnamecommon'>
                                <a className='brandname'>Brand: Brand Name</a>
                                <a><i class='far'>&#xf004;</i></a>
                            </div>
                            <div className='homeprice'>
                                <p>Price: $59.99</p>
                                <p>Customer Rating: X stars</p>
                                <div className='homecommonbutton'>
                                    <button>Add to Cart</button>
                                    <div className='homebuy'>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <div className="image-container">
                                <img src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                            </div>
                        </div>
                        <div className='branddiv'>
                            <div className='brandnamecommon'>
                                <a className='brandname'>Brand: Brand Name</a>
                                <a><i class='far'>&#xf004;</i></a>
                            </div>
                            <div className='homeprice'>
                                <p>Price: $59.99</p>
                                <p>Customer Rating: X stars</p>
                                <div className='homecommonbutton'>
                                    <button>Add to Cart</button>
                                    <div className='homebuy'>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='explore' onClick={() => navigate('/product')}>
                    <a>Explore All</a>
                </div>


                <div className='homemainstartsection'>

                    <div className='hometable1'>
                        <div className='homeimage2 homeimagegap'>
                            <img src='https://rukminim1.flixcart.com/merch/960/960/images/1491470725123.jpg?q=50' />
                        </div>
                        <div className='homeimage2'>
                            <a><img src='https://rukminim1.flixcart.com/merch/960/960/images/1491471242887.jpg?q=75' /></a>
                        </div>
                    </div>

                    <div className='hometable1'>
                        <div className='homeimage2 homeimagegap'>
                            <a><img src='https://rukminim1.flixcart.com/merch/960/960/images/1491470763147.jpg?q=50' /></a>
                        </div>
                        <div className='homeimage2'>
                            <a><img src='https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://b37db184fa09e5ba0292-662caecad9dd967cd19824f80fb1538c.lmsin.net/Home-Centre/Test-UI/Desktop-2-1-Furnishings3-816x400-Block2-16Feb2024.jpg' /></a>
                        </div>
                    </div>

                </div>


                <h3 className='hometoppicks'>Hot Picks</h3>
                <div className='homemaincontainer'>

                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <div className="image-container">
                                <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                            </div>
                        </div>
                        <div className='branddiv'>
                            <div className='brandnamecommon'>
                                <a className='brandname'>Brand: Brand Name</a>
                                <a><i className='far'>&#xf004;</i></a>
                            </div>
                            <div className='homeprice'>
                                <p>Price: $59.99</p>
                                <p>Customer Rating: X stars</p>
                                <div className='homecommonbutton'>
                                    <button>Add to Cart</button>
                                    <div className='homebuy'>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <div className="image-container">
                                <img src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                            </div>
                        </div>
                        <div className='branddiv'>
                            <div className='brandnamecommon'>
                                <a className='brandname'>Brand: Brand Name</a>
                                <a><i class='far'>&#xf004;</i></a>
                            </div>
                            <div className='homeprice'>
                                <p>Price: $59.99</p>
                                <p>Customer Rating: X stars</p>
                                <div className='homecommonbutton'>
                                    <button>Add to Cart</button>
                                    <div className='homebuy'>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <div className="image-container">
                                <img src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                            </div>
                        </div>
                        <div className='branddiv'>
                            <div className='brandnamecommon'>
                                <a className='brandname'>Brand: Brand Name</a>
                                <a><i class='far'>&#xf004;</i></a>
                            </div>
                            <div className='homeprice'>
                                <p>Price: $59.99</p>
                                <p>Customer Rating: X stars</p>
                                <div className='homecommonbutton'>
                                    <button>Add to Cart</button>
                                    <div className='homebuy'>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <div className="image-container">
                                <img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                            </div>
                        </div>
                        <div className='branddiv'>
                            <div className='brandnamecommon'>
                                <a className='brandname'>Brand: Brand Name</a>
                                <a><i class='far'>&#xf004;</i></a>
                            </div>
                            <div className='homeprice'>
                                <p>Price: $59.99</p>
                                <p>Customer Rating: X stars</p>
                                <div className='homecommonbutton'>
                                    <button>Add to Cart</button>
                                    <div className='homebuy'>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <div className="image-container">
                                <img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                            </div>
                        </div>
                        <div className='branddiv'>
                            <div className='brandnamecommon'>
                                <a className='brandname'>Brand: Brand Name</a>
                                <a><i class='far'>&#xf004;</i></a>
                            </div>
                            <div className='homeprice'>
                                <p>Price: $59.99</p>
                                <p>Customer Rating: X stars</p>
                                <div className='homecommonbutton'>
                                    <button>Add to Cart</button>
                                    <div className='homebuy'>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <div className="image-container">
                                <img src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                            </div>
                        </div>
                        <div className='branddiv'>
                            <div className='brandnamecommon'>
                                <a className='brandname'>Brand: Brand Name</a>
                                <a><i class='far'>&#xf004;</i></a>
                            </div>
                            <div className='homeprice'>
                                <p>Price: $59.99</p>
                                <p>Customer Rating: X stars</p>
                                <div className='homecommonbutton'>
                                    <button>Add to Cart</button>
                                    <div className='homebuy'>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='explore' onClick={() => navigate('/product')}>
                    <a>Explore All</a>
                </div>



                {/* <div className="slider-container1">
                    <Slider {...settings1}>
                        <div className='image'>
                            <img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
                        </div>
                        <div className='image'>
                            <img src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" />
                        </div>
                        <div className='image'>
                            <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                        </div>
                        <div className='image'>
                            <img src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                        </div>
                        <div className='image'>
                            <img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                        </div>
                        <div className='image'>
                            <img src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                        </div>
                        <div className='image'>
                            <img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
                        </div>
                        <div className='image'>
                            <img src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" />
                        </div>
                        <div className='image'>
                            <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                        </div>
                        <div className='image'>
                            <img src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                        </div>
                        <div className='image'>
                            <img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                        </div>
                        <div className='image'>
                            <img src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                        </div>
                    </Slider>
                </div> */}





                <div className='homenew'>
                    <div className='homeimagecoming homeimagecoming1 thirdclass'><img src='https://images.pexels.com/photos/2471188/pexels-photo-2471188.jpeg?auto=compress&cs=tinysrgb&w=600' /></div>
                    <div className='homeimagecoming thirdclass'>
                        <p className='coming '>Coming Soon</p>
                        <p className='newd'>NEW DESIGNS WITH AMAZING OFFERS</p>
                    </div>
                    <div className='homeimagecoming'><img src='https://images.pexels.com/photos/3201758/pexels-photo-3201758.jpeg?auto=compress&cs=tinysrgb&w=600' /></div>
                </div>







                <div className='member'>
                    <div className='homefree homebecome'>
                        <p className='become'>BECOME A <h className='prime'>PRIME</h> MEMBER</p>
                        <p className='enjoy'>Enjoy these amazing benefits</p>
                    </div>
                    <div className='homefree homebecomeimg'>
                        <img className='freeimg' src='https://tse3.mm.bing.net/th?id=OIP.LA0HSVSiFhyegclTBEyr7AHaHa&pid=Api&P=0&h=180' />
                    </div>
                    <div className='homefree homesolid'>
                        <div className='homepercent'>
                            <a><i class="fa-solid fa-truck-fast"></i>Free Shiping</a>
                            <a className='percent'><i class="fa-solid fa-percent"></i>Guaranteed Discounts</a>
                        </div>
                        <div>
                            <a><i class="fa fa-hourglass-start"></i>Early Sale Access</a>
                            <a className='homeexclusive'><img src='exclusive.png' />Exclusive Offers</a>
                        </div>
                    </div>
                </div>


                <div className='homevote'>
                    <div className='vote vote1'>
                        <p className='votefor'>VOTE FOR</p>
                        <p className='votefor new'>NEW DESIGNS</p>
                        <p className='launch'>Vote For Best Designs & We'll Launch Them.</p>
                    </div>
                    <div className='vote'>
                        <img className='design' src='https://tse2.mm.bing.net/th?id=OIP.Lwb6pwTaHImejP5FKkL1pgHaHa&pid=Api&P=0&w=300&h=300' />
                    </div>
                </div>





            </div>
        </>
    );
}
export default Home;
