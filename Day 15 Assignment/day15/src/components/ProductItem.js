import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../store/slices/productSlice';
import './ProductItem.css';

const ProductItem = ({ product, onSelect }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      dispatch(deleteProduct(product.id));
    }
  };

  const getStockStatus = (stock) => {
    if (stock === 0) return { text: 'Out of Stock', class: 'out-of-stock' };
    if (stock < 15) return { text: 'Low Stock', class: 'low-stock' };
    return { text: 'In Stock', class: 'in-stock' };
  };

  const stockStatus = getStockStatus(product.stock);

  return (
    <div className="product-item" onClick={onSelect}>
      <div className="product-header">
        <span className="product-category">{product.category}</span>
        <span className={`stock-badge ${stockStatus.class}`}>
          {stockStatus.text}
        </span>
      </div>
      
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">{product.price.toFixed(2)}</div>
        <div className="product-stock">
          <span className="stock-label">Stock:</span>
          <span className="stock-value">{product.stock} units</span>
        </div>
      </div>

      <div className="product-footer">
        <button 
          className="btn btn-edit" 
          onClick={onSelect}
        >
           Edit
        </button>
        <button 
          className="btn btn-delete" 
          onClick={handleDelete}
        >
           Delete
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
