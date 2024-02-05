// SellerPanel.js

import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';



const SellerPanel = () => {
    const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    
    // Load products from local storage on component mount
    const storedProducts = JSON.parse(localStorage.getItem('sellerProducts')) || [];
    setProducts(storedProducts);
  }, []);

  const handleProductSubmit = (newProduct) => {
    // Add or update the product in the listx`
    const updatedProducts = selectedProduct
      ? products.map((p) => (p.id === selectedProduct.id ? newProduct : p))
      : [...products, newProduct];

    // Update the state and local storage
    setProducts(updatedProducts);
    localStorage.setItem('sellerProducts', JSON.stringify(updatedProducts));

    // Clear the selected product after submission
    setSelectedProduct(null);
  };

  const handleEditProduct = (product) => {
     document.getElementById('productform').style.display = "block";
    // Set the selected product for editing
    setSelectedProduct(product);
  };

  const handleDeleteProduct = (productId) => {
    // Remove the product from the list
    const updatedProducts = products.filter((product) => product.id !== productId);

    // Update the state and local storage
    setProducts(updatedProducts);
    localStorage.setItem('sellerProducts', JSON.stringify(updatedProducts));
  };

  const handleCancelEdit = () => {
    // Clear the selected product when canceling the edit
    setSelectedProduct(null);
  };

  return (
    <div>
      <h2>Seller Dashboard</h2>
      <div id='productform' style={{display:"block"}}>
      <ProductForm onSubmit={handleProductSubmit} selectedProduct={selectedProduct} onCancel={handleCancelEdit} />
      </div>
      

      
    
    
      <h3>Product List</h3>
      
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} - Inventory: {product.inventory}
            <button onClick={() => handleEditProduct(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
   
  );
};

export default SellerPanel;
