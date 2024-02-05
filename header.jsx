import React from 'react';
import './header.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
const Header = () => {
    const [isClicked, setIsClicked] = useState(false);
    const containerClassName = isClicked ? 'clicked' : 'not-clicked';
    const [searchvalue,setsearchvalue] = useState('');

    const navigate = useNavigate();
    const [filteredItems,setfilteredItems] = useState([]);
    const [items, setItems] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Grape']);

    const handleInputChange = (e) => {
        setsearchvalue(e.target.value);
        let inputValue = e.target.value;
        if (inputValue !== ""){
            const filtereddata = items.filter(item =>
                item.toLowerCase().includes(inputValue.toLowerCase())
            );
            setfilteredItems(filtereddata);
            
            if(filtereddata.length === 0){
                setIsClicked(false);
            }
            else{
                setIsClicked(true);
            }
            
        }
        else{
            setIsClicked(false);
        }
    };

    const handleoptionclick = (a)=>{
        setsearchvalue(a);
        setIsClicked(false);
    }
    return (
        <>
            <header>
                <div className="headerbar" type="button" data-bs-toggle="offcanvas" data-bs-target="#headerdemo">
                    <a className='bars'><i class="fa-solid fa-bars "></i></a>
                </div>
                <div className="offcanvas offcanvas-start" id="headerdemo">
                    <div className="offcanvas-header">
                        <h1 className="offcanvas-title">Welcome Guest</h1>
                    </div>
                    <div className="headerlog">
                        <a href="" onClick={() => navigate('/login')}>Login/Sign up</a>
                    </div>
                    <p className="headersidegap"></p>
                    <p className="headershop">SHOP IN</p>
                    <div className="offcanvas-body">
                        <a href=""><p>Furniture</p></a>
                        <a href=""><p>Kitchen</p></a>
                        <a href=""><p>Furnishing</p></a>
                        <a href=""><p>Decor</p></a>
                        <div className="headercon">
                            <h4>CONTACT US</h4>
                            <a href=""><p>Help & Support</p></a>
                            <a href=""><p>Feedback & Suggestions</p></a>
                            <h4>ABOUT US</h4>
                            <a href=""><p>Our Story</p></a>
                            <a href=""><p>Blog</p></a>
                            <a href="#"><p>Facebook</p></a>
                        </div>
                    </div>
                </div>
                <div className="headerside">
                    
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfUTdUHm6KfGG_HldUDy5PyAhFz7jGSlsafnQfazHrW_j1qzXDZO-rcOCOB_FrLJ5Njw&usqp=CAU" alt="ftf" />
                    <a className="headersecond">
                        <div className="headerdropdown">
                            <a className="dropdown-btn headerfurniture">Furniture</a>
                            <div className="dropdown-content">
                                <div className='headercontent1 furniture'>
                                    <div className='headercontent'>
                                        <h6>Shop By Products</h6>
                                        <a href=''>New</a>
                                        <a href=''>Top Selling</a>
                                        <a href=''>All</a>
                                    </div>
                                    <h6>Shop By Design</h6>
                                    <a href="#">Living Furniture</a>
                                    <a href="#">Dining Furniture</a>
                                    <a href="#">Bedroom Furniture</a>
                                    <a href="#">kitchen Furniture</a>
                                    <a href="#">Accent Furniture</a>
                                    <a href="#">Kids Furniture</a>
                                    <a href="#">Sofa</a>
                                    <a href="#">Table</a>
                                    <a href="#">Computer Desk and Chair</a>
                                    <a href="#">Cupboard</a>
                                </div>
                                <div className='headercontent1'><img src='bedroompurple.jpeg' /> </div>
                            </div>

                        </div>

                        <div className="headerdropdown">
                            <a className="dropdown-btn headerkitchen">Kitchen</a>
                            <div className="dropdown-content">
                                <div className='headercontent1 kitchen' >
                                    <div className='headercontent'>
                                        <h6>Shop By Products</h6>
                                        <a href=''>New</a>
                                        <a href=''>Top Selling</a>
                                        <a href=''>All</a>
                                    </div>
                                    <h6>Shop By Design</h6>
                                    <a href="#">Cooking Appliances</a>
                                    <a href="#">Kitchenware</a>
                                    <a href="#">Kitchen linen</a>
                                    <a href="#">Serveware</a>
                                    <a href="#">Storage And Containers</a>
                                    <a href="">Crockery</a>
                                    <a href="">Servings</a>
                                    <a href="">Dinner Sets</a>
                                    <a href="">Table Accessories</a>
                                </div>
                                <div className='headercontent2'><img src='bedroompink.jpeg' /> </div>
                            </div>
                        </div>

                        <div className="headerdropdown">
                            <a className="dropdown-btn headerfurnishing">Furnishing</a>
                            <div className="dropdown-content">
                                <div className='headercontent1 furnishing'>
                                    <div className='headercontent'>
                                        <h6>Shop By Products</h6>
                                        <a href=''>New</a>
                                        <a href=''>Top Selling</a>
                                        <a href=''>All</a>
                                    </div>
                                    <h6>Shop By Design</h6>
                                    <a href="#">Bedding</a>
                                    <a href="#">Curtains</a>
                                    <a href="#">Cushions</a>
                                    <a href="#">Floor Covering</a>
                                    <a href="#">Accessorires</a>
                                    <a href="#">Bedsheets</a>
                                    <a href="#">Blankets and Quilts</a>
                                    <a href="#">Bath Linen</a>
                                </div>
                                <div className='headercontent3'><img src='bedroomblack.jpeg' /> </div>
                            </div>
                        </div>

                        <div className="headerdropdown">
                            <a className="dropdown-btn headerdecor">Decor</a>
                            <div className="dropdown-content">
                                <div className='headercontent1 decor'>
                                    <div className='headercontent'>
                                        <h6>Shop By Products</h6>
                                        <a href=''>New</a>
                                        <a href=''>Top Selling</a>
                                        <a href=''>All</a>
                                    </div>
                                    <h6>Shop By Design</h6>
                                    <a href="#">Home Accessories</a>
                                    <a href="#">Fragrance</a>
                                    <a href="#">Garden</a>
                                    <a href="#">Wall Accents</a>
                                    <a href="#">Paintings</a>
                                    <a href="#">Frames</a>
                                    <a href="#">Wall Shelves</a>
                                    <a href="#">Table Clock</a>
                                </div>
                                <div className='headercontent4'><img src='bedroomblue.jpeg' /> </div>
                            </div>
                        </div>
                    </a>
                    <a className="headersearch dropdownabcd">
                        <input 
                            type="text"
                            placeholder="Search..."
                            value={searchvalue}
                            onChange={handleInputChange}
                        />
                        <ul id="options"  className={`container ${containerClassName}`}>
                            {filteredItems.map((item, index) => (
                                <li onClick={()=>handleoptionclick(item)} key={index}>{item}</li>
                            ))}
                        </ul>

                        <div class="headerlens"><i class="fa fa-search"></i></div>
                    </a>
                    <a className="headerone">|</a>

                    
                    <a href="" className="headericon" onClick={() => navigate('/wishlist')}><i class='far'>&#xf004;</i></a>
                    <a href="" className="headericon1" onClick={() => navigate('/shoppingcart')}><i className="fa-solid fa-cart-shopping"></i></a>
                    <a href="" className="headerlogin loginsignup" onClick={() => navigate('/login')}>Login <i  class='fas loginicon'>&#xf234;</i></a>
                </div>
            </header>

            <div className="secondheader">

                <div className="secondtop">
                    <a href="">Sale</a>
                    <a href="" className='live'>Live Now</a>
                    <a href="">Furniture</a>
                    <a href="">Kitchen</a>
                    <a href="">Furnishing</a>
                    <a href="">Decor</a>
                    <a href="">New Arrivals</a>
                    <a href="">Combos</a>
                    <a href="" className='bestsellers'>Bestsellers</a>
                </div>
                <p className="secondtopgap"></p>
            </div>
        </>
    );


}
export default Header;