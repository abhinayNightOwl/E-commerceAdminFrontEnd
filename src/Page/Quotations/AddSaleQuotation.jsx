import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

const AddSaleQuotation = () => {
  const [warehouse, setWarehouse] = useState('');
  const [customer, setCustomer] = useState('');
  const [saleDate, setSaleDate] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [product, setProduct] = useState('');
  const [note, setNote] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);

  const navigate = useNavigate();
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

  const totalAmount = subtotal - tax - discount;

  const handleSubmit = (e) => {
    e.preventDefault();
    const saleQuotation = {
      warehouse,
      customer,
      saleDate,
      customerAddress,
      product,
      note,
      subtotal,
      tax,
      discount,
      totalAmount,
      coupon
    };
    navigate('/admin-panel/list-sale-quotation', { state: { saleQuotation } });
  };

  return (
    <div className="add-stock-transfer-page">
      <Header />
      <div className="add-stock-transfer-container">
        <Sidebar />
        <main className="add-stock-transfer-main">
          <div className="content-area">
            <h2>Add Sale Quotation</h2>
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
                  <label htmlFor="customer">Customer</label>
                  <select
                    id="customer"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                  >
                    <option>Select Customer</option>
                    <option>Default POs</option>
                    <option>Anish</option>
                    <option>Testing Team</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="saleDate">Sale Date</label>
                  <input
                    type="date"
                    id="saleDate"
                    value={saleDate}
                    onChange={(e) => setSaleDate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="customerAddress">Customer Address</label>
                  <input
                    type="text"
                    id="customerAddress"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Enter Customer Address"
                  />
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
                <div className="form-group">
                  <label htmlFor="coupon">Coupon</label>
                  <select
                    id="coupon"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  >
                    <option>Select Coupon</option>
                    <option>Apply Coupon</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="tax">Tax</label>
                  <input
                    type="number"
                    id="tax"
                    value={tax}
                    onChange={(e) => setTax(parseFloat(e.target.value) || 0)}
                    placeholder="Enter Tax Amount"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="discount">Discount</label>
                  <input
                    type="number"
                    id="discount"
                    value={discount}
                    onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                    placeholder="Enter Discount Amount"
                  />
                </div>
                <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="subtotal" style={{ marginRight: '10px' }}>SubTotal(USD):</label>
                  <span id="subtotal" style={{ fontWeight: 'bold' }}>${subtotal.toFixed(2)}</span>
                </div>
                <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="tax" style={{ marginRight: '10px' }}>Tax(USD):</label>
                  <span id="tax" style={{ fontWeight: 'bold' }}>${tax.toFixed(2)}</span>
                </div>
                <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="discount" style={{ marginRight: '10px' }}>Discount(USD):</label>
                  <span id="discount" style={{ fontWeight: 'bold' }}>${discount.toFixed(2)}</span>
                </div>
                <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="totalAmount" style={{ marginRight: '10px' }}>Total Amount(USD):</label>
                  <span id="totalAmount" style={{ fontWeight: 'bold' }}>${totalAmount.toFixed(2)}</span>
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

export default AddSaleQuotation;
