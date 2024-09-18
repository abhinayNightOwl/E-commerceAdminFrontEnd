import React, { useState } from 'react';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';
import './Payment.css';

const Payment = () => {
  const [form, setForm] = useState({
    accountType: 'Liability',
    selectAccount: '',
    transactionType: '',
    amount: '',
    description: ''
  });

  const [showAdditionalDropdown, setShowAdditionalDropdown] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });

    if (name === 'selectAccount') {
      setShowAdditionalDropdown(value === 'Account payable');
    }
  };

  return (
    <div className="payment-adjustment-page">
      <Header />
      <div className="payment-adjustment-container">
        <Sidebar />
        <main className="payment-adjustment-main">
          <div className="payment-adjustment-header-gap"></div>
          <div className="payment-adjustment-header">
            <h2 className="payment-adjustment-title">Payment Adjustment</h2>
          </div>
          <hr className="payment-adjustment-divider" />
          <form className="payment-adjustment-rectangle">
            <label className="payment-adjustment-label">Account Type</label>
            <select
              name="accountType"
              value={form.accountType}
              onChange={handleChange}
              className="payment-adjustment-dropdown"
            >
              <option>Liability</option>
            </select>
            <label className="payment-adjustment-label">Select Account</label>
            <select
              name="selectAccount"
              value={form.selectAccount}
              onChange={handleChange}
              className="account-adjustment-dropdown"
            >
              <option value="">Select Account</option>
              <option value="Account payable">Account payable</option>
            </select>
            
            {showAdditionalDropdown && (
              <>
                <label className="payment-adjustment-label">Additional Options</label>
                <select
                  name="additionalOptions"
                  className="additional-options-dropdown"
                >
                  <option value="">Select Option</option>
                  <option value="vendor">Vendor</option>
                  <option value="gst">GST</option>
                </select>
              </>
            )}
            
            <label className="payment-adjustment-label">Amount</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              className="payment-adjustment-input"
            />
            <label className="payment-adjustment-label">Description</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="payment-adjustment-input"
            />
            <button type="submit" className="payment-adjustment-submit-button">
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Payment;
