import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

const AddPurchaseQuotation = () => {
  const [warehouse, setWarehouse] = useState('');
  const [supplier, setSupplier] = useState('');
  const [product, setProduct] = useState('');
  const [note, setNote] = useState('');
  const [subtotal, setSubtotal] = useState(0);

  const navigate = useNavigate();

  // Dummy product prices for calculation
  const productPrices = {
    'Product 1': 100,
    'Product 2': 200,
    'Product 3': 300,
  };

  useEffect(() => {
    if (product) {
      setSubtotal(productPrices[product] || 0);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const purchaseQuotation = {
      warehouse,
      supplier,
      product,
      note,
      subtotal,
    };
    navigate('/admin-panel/list-purchase-quotation', { state: { purchaseQuotation } });
  };

  return (
    <div className="add-stock-transfer-page">
      <Header />
      <div className="add-stock-transfer-container">
        <Sidebar />
        <main className="add-stock-transfer-main">
          <div className="content-area">
            <h2>Add Purchase Quotation</h2>
            <hr className="title-divider" />
            <div className="form-container">
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="warehouse">Warehouse</label>
                  <select
                    id="warehouse"
                    value={warehouse}
                    onChange={(e) => setWarehouse(e.target.value)}
                  >
                    <option>Select Warehouse</option>
                    <option>Default Warehouse</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="supplier">Supplier</label>
                  <select
                    id="supplier"
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                  >
                    <option>Select Supplier</option>
                    <option>Default Supplier</option>
                  </select>
                </div>
              </div>
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="product">Product</label>
                  <select
                    id="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                  >
                    <option>Select Product</option>
                    <option>Product 1</option>
                    <option>Product 2</option>
                    <option>Product 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="note">Note</label>
                  <textarea
                    id="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
                <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="subtotal" style={{ marginRight: '10px' }}>SubTotal(USD):</label>
                  <span id="subtotal" style={{ fontWeight: 'bold' }}>${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddPurchaseQuotation;
