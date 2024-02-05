// ShoppingCart.js
import React, { useState, useEffect } from 'react';
import './shoppingcart.css';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [showQuantityList, setShowQuantityList] = useState(false);
  const [showquantity, setquantity] = useState([]);
  const [emptycart, setemptycart] = useState(true);
  const [totalprice, settotalprice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter(item => item.id !== product.id);
      setCartItems(updatedCart);
    localStorage.setItem('product', JSON.stringify(updatedCart));
    let count = 0;
    if (updatedCart.length > 0) {
      updatedCart.forEach(product => {
        count = count + product.price * product.quantity;
      });
    } else {
      setemptycart(true);
    }
    settotalprice(count);
  };
  useEffect(() => {
    cartitem();
  }, []);

  const cartitem = () => {
    let products = JSON.parse(localStorage.getItem('product'));
    setCartItems(products);
    let count = 0;
    if (products.length > 0) {
      setemptycart(false);
      products.forEach(product => {
        count = count + product.price * product.quantity;
      });
    }
    settotalprice(count);
  };

  const toggleQuantityList = (quantity, itemId) => {
    let quantlist = [];
    for (let i = 1; i <= quantity; i++) {
      if (i <= 10) {
        quantlist.push(i);
      } else {
        break;
      }
    }
    setquantity(quantlist);
    setSelectedItemId(itemId);
    setShowQuantityList(!showQuantityList);
  };

  const handlequantity = (selectedQuantity) => {
    setShowQuantityList(false);
  
    // Update the quantity of the selected item
    const updatedCart = cartItems.map(cartItem => {
      if (cartItem.id === selectedItemId) {
        return { ...cartItem, quantity: selectedQuantity };
      }
      return cartItem;
    });
  
    // Update the state with the new cart items
    setCartItems(updatedCart);
  
    // Save the updated cart to localStorage
    localStorage.setItem('product', JSON.stringify(updatedCart));
  
    // Recalculate the total price based on the updated quantities
    let count = 0;
    updatedCart.forEach(product => {
      count = count + product.price * product.quantity;
    });
    settotalprice(count);
  };
  

  return (
    <>
      {!emptycart && (
        
        <div className='shoppingcart-main'>
          <p class="cart-heading">My Cart</p>
          <table className='cartbody'>
            <tr>
              <td className='cart-items'>
                {cartItems.map(item => (
                  <div key={item.id} className='CartProduct'>
                    <p className='product-name'>{item.name}</p>
                    <div className='productdetails' >
                      <h1>₹ {item.price}</h1>
                    </div>
                    <div className='productquantity App' onClick={() => toggleQuantityList(item.inventory, item.id)}>
                      <span >Qty:{item.quantity} <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                      {showQuantityList && selectedItemId === item.id && (
                        <div className="overlay" >
                          <div className="quantity-list" onClick={(e) => e.stopPropagation()}>
                            <ul >
                              <p>Select Quantity</p>
                              {showquantity.map(quantity => (
                                <li key={quantity} onClick={() => handlequantity(quantity)}>{quantity}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="productimage">
                      <img src={item.image} alt="Product" />
                    </div>
                    <p className='line'></p>
                    <div className='wishlist-buttons'>
                      <input className="remove" type='button' value="Remove" onClick={() => removeFromCart(item)} />
                      <input className='move' type='button' value="Move to Wishlist" />
                    </div>
                  </div>
                ))}
              </td>
              <td >
                <div className='total-summary '>
                  <div className='summary'>
                    <th >Price Summary</th>
                  </div>
                  <tr>
                    <td className='name'><p>Total MRP </p></td>
                    <td className='price'><span>₹ {totalprice}</span></td>
                  </tr>
                  <tr>
                    <td className='name'><p>Delivery Fee </p></td>
                    <td className='price'><span> FREE</span></td>
                  </tr>
                  <tr>
                    <td className='name'><p>Discount </p></td>
                    <td className='price'><span>- ₹ 00</span></td>
                  </tr>
                  <tr>
                    <td className='name'>Subtotal</td>
                    <td className='price'>₹ {totalprice}</td>
                  </tr>
                  <tr className='tableline'></tr>
                  <tr>
                    <td >
                      <span className='total'>Total</span><br/>
                      <span className='totalprice'>₹ {totalprice}</span>
                    </td>
                    <td>
                      <input className='proceed-to-pay' type='button' value="Proceed to Pay" />
                    </td>
                  </tr>
                </div>
              </td>
            </tr>
          </table>
        </div>
      )}
      {/* empty cart */}
      {emptycart && (
        <div className="empty-cart-container">
          <div className="empty-cart-content">
            <h2>Your Cart is Empty</h2>
            <p className="empty-cart-message">Oh no! It seems like your shopping cart is empty.</p>
            <img title='Empty Cart' src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png" alt="Empty Cart Illustration" className="empty-cart-image" />
            <p className="empty-cart-suggestion">Discover amazing products and add them to your cart!</p>
            <button className="explore-products-btn" onClick={() => navigate('/')}>Explore Products</button>
          </div>
        </div>
      )}



    </>
  );
};

export default ShoppingCart;
