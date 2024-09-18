import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

const AddPurchase = () => {
  const [quotation, setQuotation] = useState('');
  const [warehouse, setWarehouse] = useState('');
  const [suppliers, setSuppliers] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [product, setProduct] = useState('');
  const [note, setNote] = useState('');
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const handleProductChange = (e) => {
    const selectedProduct = e.target.value;
    setProduct(selectedProduct);

    // Update total based on selected product
    switch (selectedProduct) {
      case 'Product 1':
        setTotal(100);
        break;
      case 'Product 2':
        setTotal(200);
        break;
      case 'Product 3':
        setTotal(300);
        break;
      default:
        setTotal(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPurchase = {
      quotation,
      warehouse,
      suppliers,
      purchaseDate,
      product,
      note,
      total,
    };
    navigate('/admin-panel/list-purchase', { state: { newPurchase } });
  };

  return (
    <div className="add-stock-transfer-page">
      <Header />
      <div className="add-stock-transfer-container">
        <Sidebar />
        <main className="add-stock-transfer-main">
          <div className="content-area">
            <h2>Purchase</h2>
            <hr className="title-divider" />
            <div className="form-container">
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="warehouse-from">Quotation</label>
                  <select
                    id="quotation"
                    value={quotation}
                    onChange={(e) => setQuotation(e.target.value)}
                  >
                    <option>Select Quotation</option>
                    <option>Default Quotation</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="warehouse-to">Warehouse</label>
                  <select
                    id="warehouse"
                    value={warehouse}
                    onChange={(e) => setWarehouse(e.target.value)}
                  >
                    <option>Select Warehouse</option>
                    <option>Default Warehouse</option>
                  </select>
                </div>
              </div>
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="suppliers">Suppliers</label>
                  <select
                    id="suppliers"
                    value={suppliers}
                    onChange={(e) => setSuppliers(e.target.value)}
                  >
                    <option>Select Suppliers</option>
                    <option>Default Suppliers</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="transfer-date">Purchase Date</label>
                  <input
                    type="date"
                    id="purchase-date"
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="product">Product</label>
                  <select
                    id="product"
                    value={product}
                    onChange={handleProductChange}
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
                <div className="form-group">
                  <label htmlFor="total">Total</label>
                  <input
                    type="text"
                    id="total"
                    value={total}
                    readOnly
                  />
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

export default AddPurchase;
