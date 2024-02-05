// ProductForm.js

import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, selectedProduct, onCancel }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageurl, setimageurl] = useState('');
  const [product, setProduct] = useState({
    id: selectedProduct ? selectedProduct.id : Math.floor(Math.random() * 1000), // Generate a random ID if not editing
    name: selectedProduct ? selectedProduct.name : '',
    price: selectedProduct ? selectedProduct.price : '',
    inventory: selectedProduct ? selectedProduct.inventory : '',
    image: selectedProduct ? selectedProduct.image : '',
    quantity: selectedProduct ? selectedProduct.quantity : 1,
  });

  useEffect(() => {
    // Reset the form when the selected product changes
    setProduct({
      id: selectedProduct ? selectedProduct.id : Math.floor(Math.random() * 1000),
      name: selectedProduct ? selectedProduct.name : '',
      price: selectedProduct ? selectedProduct.price : '',
      inventory: selectedProduct ? selectedProduct.inventory : '',
      image: selectedProduct ? selectedProduct.image : '',
      quantity: selectedProduct ? selectedProduct.quantity : 1,
    });
  }, [selectedProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'image') {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function (e) {
          const imageDataUrl = e.target.result;
          console.log("URL >>>>> " + imageDataUrl);
          setimageurl(imageDataUrl);

          setProduct({ ...product, [name]: imageDataUrl });
        };
      }
    } else {
      console.log(name, value);
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      image: imageurl, // Use the data URL directly
    };
   
    onSubmit(updatedProduct);

    // Reset the form
    setProduct({
      id: Math.floor(Math.random() * 1000),
      name: '',
      price: '',
      inventory: '',
      image: '',
      quantity:1,
    });
  };

  return (
    <div>
      <h3>{selectedProduct ? 'Edit Product' : 'Add New Product'}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name:</label>
        <input type="text" id="name" name="name" value={product.name} onChange={handleInputChange} required />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={product.price} onChange={handleInputChange} required />

        <label htmlFor="inventory">Inventory:</label>
        <input type="number" id="inventory" name="inventory" value={product.inventory} onChange={handleInputChange} required />

        <label htmlFor="image">Image:</label>
        <input type="file" onChange={handleInputChange} name='image'  accept="image/*" />


        <div>

          <button type="submit">{selectedProduct ? 'Update' : 'Add'}</button>
          { <button type="button" onClick={onCancel}>Cancel</button>}
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
