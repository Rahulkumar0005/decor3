import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Product.css';
const Product = () => {
  const navigate = useNavigate();
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [productlist, setProductList] = useState([
    { image: 'http://localhost:3000/images/furniture.jpg', price: '210', name: 'product 1', id: 1, inventory: 10, color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600', price: '310', name: 'product 2', id: 2, inventory: 5, color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600', price: '410', name: 'product 3', id: 3, inventory: 7, color: 'red',design:'' ,size:'',discount:'',categories:'' },
    { image: 'https://www.kritarthhandicrafts.com/wp-content/uploads/2022/08/DSC_6499..jpg', price: '510', name: 'product 4', id: 4, inventory: 2 , color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '6010', name: 'product 5', id: 5, inventory: 1 , color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '710', name: 'product 6', id: 6, inventory: 6 , color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '810', name: 'product 7', id: 7, inventory: 4 , color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '210', name: 'product 8', id: 9, inventory: 10, color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '310', name: 'product 9', id: 10, inventory: 5, color: 'red',design:'' ,size:'',discount:'',categories:'' },
    { image: 'http://localhost:3000/images/furniture.jpg', price: '410', name: 'product 10', id: 11, inventory: 7, color: 'red',design:'' ,size:'',discount:'',categories:'' },
    { image: 'http://localhost:3000/images/furniture.jpg', price: '510', name: 'product 11', id: 12, inventory: 2, color: 'red',design:'' ,size:'',discount:'',categories:'' },
    { image: 'http://localhost:3000/images/furniture.jpg', price: '610', name: 'product 12', id: 13, inventory: 1 , color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '710', name: 'product 13', id: 14, inventory: 6 , color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '810', name: 'product 14', id: 15, inventory: 4 , color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '210', name: 'product 15', id: 16, inventory: 10, color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '310', name: 'product 16', id: 17, inventory: 5, color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '410', name: 'product 17', id: 18, inventory: 7 , color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '510', name: 'product 18', id: 19, inventory: 2 , color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '610', name: 'product 19', id: 20, inventory: 1 , color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '710', name: 'product 20', id: 21, inventory: 6 , color: 'red',design:'' ,size:'',discount:'',categories:''},
    { image: 'http://localhost:3000/images/furniture.jpg', price: '810', name: 'product 21', id: 22, inventory: 4 , color: 'red',design:'' ,size:'',discount:'',categories:''}
  ]);

  // On Hover Opacity

  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const getProductsList = () => {
    let a = JSON.parse(localStorage.getItem('sellerProducts'));
    console.log(a);
    if (a != '') {
      setProductList(a);
    }

  }

  useEffect(() => {
    getProductsList();
    let timeout;

    if (hoveredProductId !== null) {
      timeout = setTimeout(() => {
        setHoveredProductId(null);
      }, 700);
    }

    return () => clearTimeout(timeout);
  }, [hoveredProductId]);

  // End
  const [buttonvalue, setbuttonvalue] = useState('Add to Cart')

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');


  const [isColorClicked, setIsColorClicked] = useState(false); //for Color Filter
  const [colorIcon, setColorIcon] = useState('fas fa-chevron-down');
  const colorcontainerClassName = isColorClicked ? 'clicked' : 'not-clicked';

  const [isDesignClicked, setIsDesignClicked] = useState(false); //for Design Filter
  const [designIcon, setDesignIcon] = useState('fas fa-chevron-down');
  const designcontainerClassName = isDesignClicked ? 'clicked' : 'not-clicked';

  const [isPriceClicked, setIsPriceClicked] = useState(false); //for Price Filter
  const [priceIcon, setPriceIcon] = useState('fas fa-chevron-down');
  const pricecontainerClassName = isPriceClicked ? 'clicked' : 'not-clicked';

  const [isSizeClicked, setIsSizeClicked] = useState(false); //for Size Filter
  const [sizeIcon, setSizeIcon] = useState('fas fa-chevron-down');
  const sizecontainerClassName = isSizeClicked ? 'clicked' : 'not-clicked';

  const [isDiscountClicked, setIsDiscountClicked] = useState(false); //for Discount Filter
  const [discountIcon, setDiscountIcon] = useState('fas fa-chevron-down');
  const discountcontainerClassName = isDiscountClicked ? 'clicked' : 'not-clicked';

  const [isCategoriesClicked, setIsCategoriesClicked] = useState(false); //for catefories Filter
  const [categoriesIcon, setCategoriesIcon] = useState('fas fa-chevron-down');
  const categoriescontainerClassName = isCategoriesClicked ? 'clicked' : 'not-clicked';

  // ADD TO Cart



  const addtocart = (product) => {
    console.log(product);
    // Get the existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('product')) || [];

    // Check if the product is already in the cart
    const existingProductIndex = existingCart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update its quantity
      existingCart[existingProductIndex].quantity += 1;
    } else {
      // If the product is not in the cart, add it with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }

    // Update the cart in localStorage
    localStorage.setItem('product', JSON.stringify(existingCart));
  };


  // End Add to Cart

  const handleDropdown = (type) => {
    switch (type) {
      case 'color':
        setIsColorClicked(!isColorClicked);
        setColorIcon(isColorClicked ? 'fas fa-chevron-down' : 'fas fa-chevron-up');
        break;
      case 'design':
        setIsDesignClicked(!isDesignClicked);
        setDesignIcon(isDesignClicked ? 'fas fa-chevron-down' : 'fas fa-chevron-up');
        break;
      case 'price':
        setIsPriceClicked(!isPriceClicked);
        setPriceIcon(isPriceClicked ? 'fas fa-chevron-down' : 'fas fa-chevron-up');
        break;
      case 'size':
        setIsSizeClicked(!isSizeClicked);
        setSizeIcon(isSizeClicked ? 'fas fa-chevron-down' : 'fas fa-chevron-up');
        break;
      case 'discount':
        setIsDiscountClicked(!isDiscountClicked);
        setDiscountIcon(isDiscountClicked ? 'fas fa-chevron-down' : 'fas fa-chevron-up');
        break;
      case 'categories':
        setIsCategoriesClicked(!isCategoriesClicked);
        setCategoriesIcon(isCategoriesClicked ? 'fas fa-chevron-down' : 'fas fa-chevron-up');
        break;

      default:
        break;
    }
  };

  //for sort by dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleimageclick = () =>{
    navigate('/buysection');
  }
  const handleHeartClick = (productId) => {
    setProductList((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, isHeartClicked: !product.isHeartClicked };
        }
        return product;
      });
    });
  };
  


  

  return (
    <>
      <div class="Productmain">
        <div class="contain">
          <aside class="filters">
            <h4 class="bed"><a href="/">Home</a> / Shop / BED & BATH</h4>
            <h2 class="wordfilters">Filters</h2>
            <div class="filter-section">
              <div>
                <h4 >Color<i onClick={() => handleDropdown('color')} className={colorIcon}></i> </h4>
                <ul className={`container ${colorcontainerClassName}`}>
                  <li value="red" style={{ backgroundColor: 'red', width: '30px', height: '30px', listStyleType: 'none', margin: '0 5px', display: 'flex', marginLeft: '-10px' }}></li>
                  <li value="green" style={{ backgroundColor: 'green', width: '30px', height: '30px', listStyleType: 'none', margin: '0 5px', display: 'flex', marginLeft: '40px', marginTop: '-30px' }}></li>
                  <li value="blue" style={{ backgroundColor: 'blue', width: '30px', height: '30px', listStyleType: 'none', margin: '0 5px', display: 'flex', marginLeft: '90px', marginTop: '-30px' }}></li>
                  <li value="yellow" style={{ backgroundColor: 'yellow', width: '30px', height: '30px', listStyleType: 'none', margin: '0 5px', display: 'flex', marginLeft: '140px', marginTop: '-30px' }}></li>

                  <li value="violet" style={{ backgroundColor: 'violet', width: '30px', height: '30px', listStyleType: 'none', margin: '0 5px', display: 'flex', marginLeft: '-10px', marginTop: '20px' }}></li>
                  <li value="black" style={{ backgroundColor: 'black', width: '30px', height: '30px', listStyleType: 'none', margin: '0 5px', display: 'flex', marginLeft: '40px', marginTop: '-30px' }}></li>
                  <li value="orange" style={{ backgroundColor: 'orange', width: '30px', height: '30px', listStyleType: 'none', margin: '0 5px', display: 'flex', marginLeft: '90px', marginTop: '-30px' }}></li>
                  <li value="white" style={{ backgroundColor: 'white', width: '30px', height: '30px', listStyleType: 'none', margin: '0 5px', display: 'flex', marginLeft: '140px', marginTop: '-30px' }}></li>
                </ul>
              </div>

              <div class="design-filters">
                <h4>Design<i onClick={() => handleDropdown('design')} className={designIcon}></i> </h4>
                <ul className={`container ${designcontainerClassName}`}>
                  <li><input type="checkbox" value="Floral"></input><label>Floral</label></li>
                  <li><input type="checkbox" value="Ethnic"></input><label>Ethnic</label></li>
                  <li><input type="checkbox" value="Classical"></input><label>Classical</label></li>
                  <li><input type="checkbox" value="Strips"></input><label>Strips & Checks</label></li>
                  <li><input type="checkbox" value="Solid"></input><label>Solid</label></li>
                  <li><input type="checkbox" value="Texture"></input><label>Texture</label></li>
                  <li><input type="checkbox" value="Plain"></input><label>Plain</label></li>

                </ul>
              </div>

              <div class="size-filters">
                <h4 >Size<i onClick={() => handleDropdown('size')} className={sizeIcon}></i> </h4>
                <ul className={`container ${sizecontainerClassName}`}>
                  <li><input type="checkbox" value="DoubleBedSheet"></input><label>Double Bed Sheet</label></li>
                  <li><input type="checkbox" value="SingleBedSheet"></input><label>Single Bed Sheet</label></li>
                  <li><input type="checkbox" value="KingFittedSheet"></input><label>King Fitted Sheet</label></li>
                  <li><input type="checkbox" value="KingSize"></input><label>King Size</label></li>
                </ul>
              </div>

              <div class="discount-filters">
                <h4 >Discount<i onClick={() => handleDropdown('discount')} className={discountIcon}></i> </h4>
                <ul className={`container ${discountcontainerClassName}`}>
                  <li><input type="checkbox" value="60-80"></input><label>60% - 80%</label></li>
                  <li><input type="checkbox" value="40-60"></input><label>40% - 60%</label></li>
                  <li><input type="checkbox" value="20-40"></input><label>20% - 40%</label></li>
                  <li><input type="checkbox" value="0-20"></input><label>0% - 20%</label></li>
                </ul>
              </div>

              <div class="price-filters">
                <h4 >Price<i onClick={() => handleDropdown('price')} className={priceIcon}></i> </h4>
                <ul className={`container ${pricecontainerClassName}`}>
                  <li><input type="checkbox" value="2000-1500"></input><label>Rs.2000 - Rs.1500</label></li>
                  <li><input type="checkbox" value="1500-1000"></input><label>Rs.1500 - Rs.1000</label></li>
                  <li><input type="checkbox" value="1000-500"></input><label>Rs.1000 - Rs.500</label></li>
                  <li><input type="checkbox" value="500-0"></input><label>Rs.500 - Rs.0</label></li>
                </ul>
              </div>

              <div class="categories-filters">
                <h4 >Categories<i onClick={() => handleDropdown('categories')} className={categoriesIcon}></i> </h4>
                <ul className={`container ${categoriescontainerClassName}`}>
                  <li><input type="checkbox" value="DoubleBedSheet"></input><label>Bed Sheet</label></li>
                  <li><input type="checkbox" value="SingleBedSheet"></input><label>Bed Sheet Set</label></li>
                  <li><input type="checkbox" value="KingFittedSheet"></input><label>Bed Cover</label></li>
                  <li><input type="checkbox" value="KingSize"></input><label>Bath Mat</label></li>
                  <li><input type="checkbox" value="DoubleBedSheet"></input><label>Single Quilt</label></li>
                  <li><input type="checkbox" value="SingleBedSheet"></input><label>Double Quilt</label></li>
                  <li><input type="checkbox" value="KingFittedSheet"></input><label>Mattres</label></li>
                  <li><input type="checkbox" value="KingSize"></input><label>Pillow Cover</label></li>
                </ul>
              </div>


            </div>
          </aside>

          <section class="products">
            <h2>Available Products</h2>

            <div className="sort-dropdown">
              <button onClick={toggleDropdown}>
                Sort by  {selectedOption || <i class="fa-solid fa-caret-down"></i>}
              </button>
              {isOpen && (
                <div className="dropdown-options">
                  <div onClick={() => handleOptionClick(': High to Low')}>High to Low</div>
                  <div onClick={() => handleOptionClick(': Low to High')}>Low to High</div>
                  <div onClick={() => handleOptionClick(': Latest')}>Latest</div>
                </div>
              )}
            </div>

            <div class="product">
              {productlist.map((product) => (

                <div class="product1">
                  <img onClick={handleimageclick} onMouseEnter={() => handleMouseEnter(product.id)}
                    onMouseLeave={handleMouseLeave} src={product.image} alt="Product Pic" style={{ opacity: hoveredProductId === product.id ? 0.6 : 1 }} />
                  <div class="wishlist"><h5>{product.name}</h5>
                    <h4><i onClick={() => handleHeartClick(product.id)} className={product.isHeartClicked  ? "fill fas fa-heart red" : "notfill far fa-heart"}></i></h4></div>
                  <p class="brand">Brand: Brand Name</p>
                  <p class="price">Price: <i class="fa-solid fa-indian-rupee-sign"></i> {product.price}</p>
                  <p class="rating">Customer Rating: X stars</p>
                  <button class="button1" type="button" onClick={() => addtocart(product)}>{buttonvalue}</button>
                  <button class="button2">Buy now</button></div>
              ))}
            </div>
          </section>
        </div>
      </div>

    </>
  );
}
export default Product;