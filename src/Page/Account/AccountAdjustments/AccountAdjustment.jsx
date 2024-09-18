import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';
import './AccountAdjustment.css';

const AccountAdjustment = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    accountType: 'Assets',
    selectAccount: '',
    transactionType: '',
    amount: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin-panel/ledger-report', { state: form });
  };

  return (
    <div className="account-adjustment-page">
      <Header />
      <div className="account-adjustment-container">
        <Sidebar />
        <main className="account-adjustment-main">
          <div className="account-adjustment-header-gap"></div>
          <div className="account-adjustment-header">
            <h2 className="account-adjustment-title">Assets Adjustment</h2>
          </div>
          <hr className="account-adjustment-divider" />
          <form className="account-adjustment-rectangle" onSubmit={handleSubmit}>
            <label className="account-adjustment-label">Account Type</label>
            <select
              name="accountType"
              value={form.accountType}
              onChange={handleChange}
              className="account-adjustment-dropdown"
            >
              <option>Assets</option>
            </select>
            <label className="account-adjustment-label">Select Account</label>
            <select
              name="selectAccount"
              value={form.selectAccount}
              onChange={handleChange}
              className="account-adjustment-dropdown"
            >
              <option>Select Account</option>
              <option>Cash</option>
              <option>Bank</option>
              <option>Paypal</option>
              <option>Stripe</option>
              <option>Supplies</option>
              <option>Account Receivable</option>
            </select>
            <label className="account-adjustment-label">Transaction Type</label>
            <select
              name="transactionType"
              value={form.transactionType}
              onChange={handleChange}
              className="account-adjustment-dropdown"
            >
              <option>Select Transaction Type</option>
              <option value="DR">DR</option>
              <option value="CR">CR</option>
            </select>
            <label className="account-adjustment-label">Amount</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              className="account-adjustment-input"
            />
            <label className="account-adjustment-label">Description</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="account-adjustment-input"
            />
            <button type="submit" className="account-adjustment-submit-button">
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AccountAdjustment;
