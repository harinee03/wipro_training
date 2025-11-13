import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateProduct,
  addProduct,
  selectSelectedProduct,
  clearSelectedProduct,
} from '../store/slices/productSlice';
import './ProductForm.css';

const ProductForm = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(selectSelectedProduct);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    category: 'Electronics',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        name: selectedProduct.name,
        price: selectedProduct.price,
        stock: selectedProduct.stock,
        category: selectedProduct.category,
      });
      setIsEditing(true);
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name: formData.name,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      category: formData.category,
    };

    if (isEditing && selectedProduct) {
      dispatch(updateProduct({ id: selectedProduct.id, updates: productData }));
    } else {
      dispatch(addProduct(productData));
    }

    handleReset();
  };

  const handleReset = () => {
    setFormData({
      name: '',
      price: '',
      stock: '',
      category: 'Electronics',
    });
    setIsEditing(false);
    dispatch(clearSelectedProduct());
  };

  return (
    <div className="product-form-container">
      <h3>{isEditing ? ' Edit Product' : ' Add New Product'}</h3>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Product Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
              <option value="Furniture">Furniture</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price *</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="stock">Stock *</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="0"
              min="0"
              required
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {isEditing ? 'Update Product' : 'Add Product'}
          </button>
          {isEditing && (
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
