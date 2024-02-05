import { useState, useEffect, useTransition } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';

const Home = () => {
    const [explorealldata, setalldata] = useState([]);
    const [explorehotdata, sethotdata] = useState([]);
    const firstSliderdata = [
        { path: 'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'product1 Image' },
        { path: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'product2 Image' },
        { path: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'product3 Image' },
        { path: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'product4 Image' },
        { path: 'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'product5 Image' },
        { path: 'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'product6 Image' },
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




    const settings1 = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: false,
        dots: false,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings1: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings1: {
                    slidesToShow: 1,
                },
            },
        ],
    };





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

    const exploreall = () => {

        const data = [
            { src: '', alt: '' },
            { src: '', alt: '' },
            { src: '', alt: '' },
            { src: '', alt: '' },
            { src: '', alt: '' }
        ];
        for (let i = 0; i < 49; i++) {
            data.push({ src: '', alt: '' });
        }
        setalldata(data);

    }
    const exploremorehot = () => {
        const data = [
        ];

        for (let i = 0; i <= 50; i++) {
            data.push({ src: '', alt: '' });
        }
        sethotdata(data);
    }
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


            <div className='homebed'><h3>Bedroom</h3></div>
            <table>
                <tr className='homeimage'>
                    <td className='productimage1'><img src='https://images.pexels.com/photos/7535063/pexels-photo-7535063.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                    <td className='productimage1'><img src='https://images.pexels.com/photos/4947042/pexels-photo-4947042.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                    <td className='productimage1'><img src='https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                    <td className='productimage1'><img src='https://images.pexels.com/photos/4857775/pexels-photo-4857775.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                    <td className='productimage1 none'><img src='https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                    <td className='productimage1 none'><img src='https://images.pexels.com/photos/7511695/pexels-photo-7511695.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                    <td className='productimage1 none'><img src='https://images.pexels.com/photos/6580407/pexels-photo-6580407.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                </tr>
                <tr className='homeproduct'>
                    <td>Product 1</td>
                    <td>Product 2</td>
                    <td>Product 3</td>
                    <td>Product 4</td>
                    <td className='none'>Product 5</td>
                    <td className='none'>Product 6</td>
                    <td className='none'>Product 7</td>
                </tr>
            </table>


            <div className='homegaptable'></div>

            <div className='homebed'><h3>Living Room</h3></div>
            <table>
                <tr className='homeimage'>
                    <td className='productimage1'><img src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                    <td className='productimage1'><img src='https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                    <td className='productimage1'><img src='https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                    <td className='productimage1'><img src='https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                    <td className='productimage1 none'><img src='https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                    <td className='productimage1 none'><img src='https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                    <td className='productimage1 none'><img src='https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                </tr>
                <tr className='homeproduct'>
                    <td>Product 1</td>
                    <td>Product 2</td>
                    <td>Product 3</td>
                    <td>Product 4</td>
                    <td className='none'>Product 5</td>
                    <td className='none'>Product 6</td>
                    <td className='none'>Product 7</td>
                </tr>
            </table>



            <div className='bigimage'>
                <div className='homebig'>
                    <img style={{ width: '100%', height: '300px' }} src='https://media.istockphoto.com/id/1213695547/photo/3d-rendering-of-an-elegant-bedroom.jpg?b=1&s=612x612&w=0&k=20&c=SXgsSUdhOAdzu_2uNyx_5Ee-u8o4_k5QPVL6sbuuA_0=' />
                </div>
                <div className='homedaily'><p>Daily Blockbuster Deals</p></div>
            </div>



            <div className='hometable2'>
                <table className='homeimage10'>
                    <tr className='homeimagecombo'>
                        <td className='producttopimage1'><img src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                        <td className='producttopimage1'><img src='https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                        <td className='producttopimage1'><img src='https://cdn.pixabay.com/photo/2014/07/31/00/40/bedroom-405920_640.jpg' /></td>
                        <td className='producttopimage1 none'><img src='https://cdn.pixabay.com/photo/2016/04/24/03/47/bed-1348721_1280.jpg' /></td>
                        <td className='producttopimage1'><img src='https://cdn.pixabay.com/photo/2016/08/07/00/26/bed-1575460_640.jpg' /></td>
                        <td className='producttopimage1'><img src='https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600' /></td>
                    </tr>
                    <tr className='homenone'>
                        <td><a href='' className='hometopproduct'>New Arrivals</a></td>
                        <td><a href='' className='hometopproduct'>BestSellers</a></td>
                        <td><a href='' className='hometopproduct'>Best Offers</a></td>
                        <td><a href='' className='hometopproduct none'>Customizations</a></td>
                        <td><a href='' className='hometopproduct combo'>Combos</a></td>
                        <td><a href='' className='hometopproduct combo'>New Designs</a></td>
                    </tr>
                </table>
            </div>


            <div style={{ position: 'relative', width: '100%', height: '400px', marginTop: '20px' }}>
                <div className='homechangingimage' style={{ position: 'relative', width: '100%', height: '95%', overflow: 'hidden' }}>
                    <img
                        className="mySlides"
                        src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Slide 1"
                        style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
                    />
                    <img
                        className="mySlides"
                        src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Slide 2"
                        style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
                    />
                    <img
                        className="mySlides"
                        src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Slide 3"
                        style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
                    />
                </div>
            </div>



            <h3 className='hometoppicks'>Top Picks</h3>
            <div className='homemaincontainer'>

                <div className='homecommondiv'>
                    <div className="imagefade">
                        <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
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
                        <img src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
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
                        <img src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
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
                        <img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
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
                        <img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
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
                    <div className="homeimagecontainer imagecontainer">
                        <img src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                    </div>
                    <div className='branddiv'><div className='brandnamecommon'>
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

                {explorealldata.map((data) => (
                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
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
                ))}
            </div>
            <div className='explore'>
                <a onClick={exploreall}>Explore All</a>
            </div>



            <div className='homemaindiv'>
                <div className='hometable1'>
                    <a><img src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600' /></a>
                    <a><img src='https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600' /></a>
                </div>
                <div  >
                    <div className='homestart'>
                        <a className='homestarts'>Starts at <i className="homerupee fa-solid fa-indian-rupee-sign"></i> 499</a>
                    </div>
                    <div className='homestart0'>
                        <a className='homestarts1'>Starts at <i className="homerupee fa-solid fa-indian-rupee-sign"></i> 599</a>
                    </div>
                </div>
            </div>


            <div className='homemaindiv1'>
                <div className='hometable1'>
                    <a><img src='https://cdn.pixabay.com/photo/2016/04/24/03/47/bed-1348721_1280.jpg' /></a>
                    <a><img src='https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600' /></a>
                </div>
                <div className='homestart1'>
                    <a className='homestarts1'>Starts at <i className="homerupee fa-solid fa-indian-rupee-sign"></i> 799</a>
                </div>
                <div className='homestart00'>
                    <a className='homestarts11'>Starts at <i className="homerupee fa-solid fa-indian-rupee-sign"></i> 999</a>
                </div>
            </div>



            <h3 className='hometoppicks'>Hot Picks</h3>
            <div className='homemaincontainer'>

                <div className='homecommondiv'>
                    <div className="imagefade">
                        <img src="https://images.pexels.com/photos/6580407/pexels-photo-6580407.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
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
                        <img src="https://images.pexels.com/photos/4947042/pexels-photo-4947042.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
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
                        <img src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
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
                        <img src="https://images.pexels.com/photos/4857775/pexels-photo-4857775.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
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
                        <img src="https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
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
                    <div className="homeimagecontainer imagecontainer">
                        <img src="https://images.pexels.com/photos/6580407/pexels-photo-6580407.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
                    </div>
                    <div className='branddiv'><div className='brandnamecommon'>
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
                {explorehotdata.map((data) => (
                    <div className='homecommondiv'>
                        <div className="imagefade">
                            <img src="https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" />
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
                ))}
            </div>
            <div className='explore'>
                <a onClick={exploremorehot}>Explore All</a>
            </div>




            <div className="slider-container1">
                <Slider {...settings1}>
                    {/* Replace these URLs with your actual image URLs */}
                    <div>
                        <img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                    </div>
                    {/* Add more slides as needed */}
                </Slider>
            </div>





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