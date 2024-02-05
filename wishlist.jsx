import './wishlist.css';

import React, { useState, useEffect } from 'react';



const WishlistItem = ({product, removeFromWishlist, addToCart }) => {
  
  return (
    
                <div class="wishlist-product1"><img src={product.image} alt="Product Pic" />
                  <div class="wishlist"><h5>{product.name}</h5></div>
                  <p class="wishlist-brand">Brand: Brand Name</p>
                  <p class="wishlist-price">Price: <i class="fa-solid fa-indian-rupee-sign"></i> {product.price}</p>
                  <p class="wishlist-rating">Customer Rating: X stars</p>
                  <button class="wishlist-button1" type="button" onClick={() => removeFromWishlist(product.id)}>Remove</button>
                  <button class="wishlist-button2" onClick={() => addToCart(product)}>Move to cart</button>
                 </div>
                  
            
  );
};

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('product')) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((product) => product.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const addToCart = (product) => {
    alert(`Added ${product.name} to Cart!`);
    // You can add logic to update the cart in local storage or make an API call
  };

  return (
    <div className="wishlistmain">
      <h2>Your Wishlist</h2>
      
      <div class=" wishlist-product">
        {wishlist.map((product, index) => (
          
          <WishlistItem key={product.id} product={product} removeFromWishlist={removeFromWishlist} addToCart={addToCart} />
         
        ))}
         </div>
      
    </div>
  );
};

export default Wishlist;
