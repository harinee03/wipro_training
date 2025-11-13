import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
  selectProductsError,
  selectProduct,
} from '../store/slices/productSlice';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleSelectProduct = (product) => {
    dispatch(selectProduct(product));
  };

  const handleRefresh = () => {
    dispatch(fetchProducts());
  };

  if (status === 'loading') {
    return (
      <div className="product-list">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="product-list">
        <div className="error-message">
          <p> Error: {error}</p>
          <button onClick={handleRefresh} className="btn btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-list">
      <div className="product-list-header">
        <h2> Product Management</h2>
        <button onClick={handleRefresh} className="btn btn-refresh">
           Refresh
        </button>
      </div>

      {products.length === 0 ? (
        <p className="empty-message">No products available.</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onSelect={() => handleSelectProduct(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
