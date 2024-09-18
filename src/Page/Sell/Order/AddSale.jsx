import React, { useState, useEffect } from 'react';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';
import './AddSale.css';

const AddSale = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  // Calculate total whenever subtotal, tax, or discount changes
  useEffect(() => {
    const calculatedTotal = subtotal + tax - discount;
    setTotal(calculatedTotal);
  }, [subtotal, tax, discount]);

  const handleSubmit = () => {
    // Handle the submit logic here, such as saving the data and redirecting to the order page
    console.log({
      subtotal,
      tax,
      discount,
      total,
      // Add other form data here
    });
  };

  return (
    <div className="add-sale-page">
      <Header />
      <div className="add-sale-container">
        <Sidebar />
        <main className="add-sale-main">
          <div className="add-sale-header-gap"></div>
          <h2 className="add-sale-title">Add Sale</h2>
          <hr className="add-sale-divider" />
          <div className="add-sale-rectangle">
            <p className="rectangle-title">Quotation</p>
            <select className="quotation-dropdown">
              <option value="">Select Quotation</option>
            </select>
            <p className="rectangle-title">Warehouse</p>
            <select className="warehouse-dropdown">
              <option value="">Select Warehouse</option>
            </select>
            <p className="rectangle-title">Customer</p>
            <select className="customer-dropdown">
              <option value="">Select Customer</option>
            </select>
            <p className="rectangle-title">Sale Date</p>
            <input type="date" className="sale-date-input" />
            <p className="rectangle-title">Customer Address</p>
            <input type="text" className="customer-address-input" />
            <p className="rectangle-title">Product</p>
            <select 
              className="product-dropdown" 
              onChange={(e) => setSubtotal(Number(e.target.value))}
            >
              <option value="0">Select Product</option>
              <option value="100">Product 1 - $100</option>
              <option value="200">Product 2 - $200</option>
              <option value="300">Product 3 - $300</option>
            </select>
            <p className="rectangle-title">Note</p>
            <input type="text" className="note-input" />
            <p className="rectangle-title">Coupon</p>
            <select className="coupon-dropdown">
              <option value="">Select Coupon</option>
            </select>
            <div className="add-sale-totals">
              <p className="totals-title">Subtotal:</p>
              <p className="totals-value">${subtotal.toFixed(2)}</p>
              <p className="totals-title">Tax:</p>
              <select 
                className="tax-dropdown" 
                onChange={(e) => setTax(Number(e.target.value))}
              >
                <option value="0">Select Tax</option>
                <option value="10">10% - $10</option>
                <option value="20">20% - $20</option>
                <option value="30">30% - $30</option>
              </select>
              <p className="totals-title">Discount:</p>
              <input 
                type="number" 
                className="discount-input" 
                value={discount} 
                onChange={(e) => setDiscount(Number(e.target.value))} 
              />
              <p className="totals-title">Total Amount:</p>
              <p className="totals-value">${total.toFixed(2)}</p>
            </div>
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddSale;
