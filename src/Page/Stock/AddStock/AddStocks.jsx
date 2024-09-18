import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddStock.css';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';

const AddStocks = () => {
  const [selectedProduct, setSelectedProduct] = useState('product');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Simulate saving the product data
    console.log('Stock saved:', selectedProduct);

    // Navigate to the ListStock page with state
    navigate('/admin-panel/list-stock', { state: { newProduct: selectedProduct } });
  };

  return (
    <div className="add-stocks-page">
      <Header />
      <div className="add-stocks-container">
        <Sidebar />
        <main className="add-stocks-main">
          <div className="content-area">
            <h2>Add Stock</h2>
            <hr className="title-divider" />
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="product-select">Product</label>
                <select
                  id="product-select"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  <option value="product">Product</option>
                  <option value="product2">Product 2</option>
                  <option value="product3">Product 3</option>
                </select>
              </div>
              <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddStocks;
