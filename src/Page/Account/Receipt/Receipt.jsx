import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';
import './Receipt.css';

const Receipt = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    accountType: 'Assets',
    selectAccount: '',
    transactionType: '',
    amount: '',
    description: ''
  });

  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });

    if (name === 'selectAccount') {
      // Show additional dropdown only when 'Account Receivable' is selected
      setShowCustomerDropdown(value === 'Account Receivable');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin-panel/ledger-report', { state: form });
  };

  return (
    <div className="receipt-adjustment-page">
      <Header />
      <div className="receipt-adjustment-container">
        <Sidebar />
        <main className="receipt-adjustment-main">
          <div className="receipt-adjustment-header-gap"></div>
          <div className="receipt-adjustment-header">
            <h2 className="receipt-adjustment-title">Receipt Adjustment</h2>
          </div>
          <hr className="receipt-adjustment-divider" />
          <form className="receipt-adjustment-rectangle" onSubmit={handleSubmit}>
            <label className="receipt-adjustment-label">Account Type</label>
            <select
              name="accountType"
              value={form.accountType}
              onChange={handleChange}
              className="account-adjustment-dropdown"
            >
              <option>Assets</option>
            </select>
            <label className="receipt-adjustment-label">Select Account</label>
            <select
              name="selectAccount"
              value={form.selectAccount}
              onChange={handleChange}
              className="receipt-adjustment-dropdown"
            >
              <option value="">Select Account</option>
              <option value="Cash">Cash</option>
              <option value="Bank">Bank</option>
              <option value="Paypal">Paypal</option>
              <option value="Stripe">Stripe</option>
              <option value="Supplies">Supplies</option>
              <option value="Account Receivable">Account Receivable</option>
            </select>

            {showCustomerDropdown && (
              <>
                <label className="receipt-adjustment-label">Customer</label>
                <select
                  name="customer"
                  className="customer-dropdown"
                >
                  <option value="">Select Customer</option>
                  <option value="Customer1">Customer1</option>
                  <option value="Customer2">Customer2</option>
                  <option value="Customer3">Customer3</option>
                </select>
              </>
            )}

            <label className="receipt-adjustment-label">Transaction Type</label>
            <select
              name="transactionType"
              value={form.transactionType}
              onChange={handleChange}
              className="receipt-adjustment-dropdown"
            >
              <option value="">Select Transaction Type</option>
              <option value="DR">DR</option>
              <option value="CR">CR</option>
            </select>
            <label className="receipt-adjustment-label">Amount</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              className="receipt-adjustment-input"
            />
            <label className="receipt-adjustment-label">Description</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="receipt-adjustment-input"
            />
            <button type="submit" className="receipt-adjustment-submit-button">
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Receipt;
