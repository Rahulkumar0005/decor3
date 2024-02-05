import './footer.css';
const Footer =()=>{
    return (
    <>
    <footer>
        <div className="footerlogo">
            <a href=""><img src="images\decorhome-high-resolution-logo-black-transparent.png" alt=""/></a>
        </div>
        <div className="footerlist">
            <ul>
                <h6>Customer Service</h6>
                <a href=""><li>Contact Us</li></a>
                <a href=""><li>Track Order</li></a>
                <a href=""><li>Return Order</li></a>
                <a href=""><li>Cancel Order</li></a>
            </ul>
            <ul>
                <h6>Company</h6>
                <a href=""><li>About Us</li></a>
                <a href=""><li>We're hiring</li></a>
                <a href=""><li>Terms & Conditions</li></a>
                <a href=""><li>Privacy Policy</li></a>
                <a href=""><li>Blog</li></a>
            </ul>
            <ul>
                <h6>Connect With Us</h6>
                <div className="footerdiv">
                    <a href=""><li><i className="fa-brands fa-square-facebook"></i></li></a>
                    <a href=""><li><i className="fa-brands fa-square-instagram"></i></li></a>
                    <a href=""><li><i className="fa-brands fa-linkedin"></i></li></a>
                    <a href=""><li><i className="fa-brands fa-square-twitter"></i></li></a>
                    <a href=""><li><i className="fa-brands fa-square-pinterest"></i></li></a>
                    <a href=""><li><i className="fa-brands fa-square-whatsapp"></i></li></a>
                </div>
            </ul>
        </div>
        <div className="footerbut">
            <ul className="footeri">
                <a href=""><li><i className='fas fa-truck'></i>10 Days Return Policy*</li></a>
                <a href=""><li><i className="footerrupay fa-solid fa-indian-rupee-sign"></i>Cash On Delivery*</li></a>
            </ul>
            <ul className="footerdownload">
                <h6>Download The App</h6>
                <a href=""><button >Google play <i className='fab fa-google-play'></i></button></a>
                <a href=""><button className="appstore" >App store <i className="fa-brands fa-apple fa-lg"></i></button></a>
            </ul>
            <div className="footerpayment">
                <ul>
                    <h6>100% Secure Payment</h6>
                    <a href=""><li><i className="fa-brands fa-cc-mastercard"></i></li></a>
                    <a href=""><li><i className="fa-brands fa-cc-visa"></i></li></a>
                    <a href=""><li><i className="fa-solid fa-credit-card"></i></li></a>
                    <a href=""><li><i className="fa-brands fa-cc-paypal"></i></li></a>
                    <a href=""><li><i className="fa-brands fa-cc-amazon-pay"></i></li></a>
                    <a href=""><li><i className="fa-solid fa-wallet"></i></li></a>
                </ul>
            </div>
        </div>
        <div className="footerline">
            <p></p>
        </div>
        <div className="footerdecor">
            <ul>
                <h4>Furniture</h4>
                <a href=""><li>Living Furniture</li></a>
                <a href=""><li>Dining Furniture</li></a>
                <a href=""><li>Bedroom Furniture</li></a>
                <a href=""><li>Kitchen Furniture</li></a>
                <a href=""><li>Accent Furniture</li></a>
                <a href=""><li>Kids Furniture</li></a>
                <a href=""><li>Computer Desk and Chair</li></a>
                <a href=""><li>Sofa</li></a>
                <a href=""><li>Tables</li></a>
                <a href=""><li>Cupboard</li></a>
            </ul>
            <ul>
                <h4>Furnishing</h4>
                <a href=""><li>Bedding</li></a>
                <a href=""><li>Curtains</li></a>
                <a href=""><li>Cushions</li></a>
                <a href=""><li>Floor Covering</li></a>
                <a href=""><li>Accessorires</li></a>
                <a href=""><li>Bedsheets</li></a>
                <a href=""><li>Pillows</li></a>
                <a href=""><li>Lambs</li></a>
                <a href=""><li></li></a>
                <a href=""><li></li></a>
            </ul>
            <ul>
                <h4>Decor</h4>
                <a href=""><li>Home Accessories</li></a>
                <a href=""><li>Fragrance</li></a>
                <a href=""><li>Garden</li></a>
                <a href=""><li>Wall Accents</li> </a>
                <a href=""><li>Paintings</li></a>
                <a href=""><li>Frames</li></a>
                <a href=""><li></li></a>
                <a href=""><li></li></a>
            </ul>
            <ul>
                <h4>Kitchen</h4>
                <a href=""><li>Cooking Appliances</li></a>
                <a href=""><li>Kitchenware</li></a>
                <a href=""><li>Kitchen linen</li></a>
                <a href=""><li>Serveware</li></a>
                <a href=""><li>Storage And Containers</li></a>
                <a href=""><li>Crockery</li></a>
                <a href=""><li>Servings</li></a>
                <a href=""><li>Dinner Sets</li></a>
                <a href=""><li>Table Accessories</li></a>
            </ul>
        </div>
        <div className="footercopy">
        <p>Copyright ⓒ 2023-All Rights Reserved</p>
        </div>
    </footer>

    </>
    )

}
export default Footer;