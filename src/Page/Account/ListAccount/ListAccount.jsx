import React, { useState } from 'react';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';
import './ListAccount.css';

const ListAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'Account 1', code: 'Code 1', type: 'Type 1', status: 'Status 1' },
    { id: 2, name: 'Account 2', code: 'Code 2', type: 'Type 2', status: 'Status 2' }
  ]);
  const [form, setForm] = useState({
    name: '',
    accountType: 'Select Account'
  });

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const newAccount = {
      id: accounts.length + 1,
      ...form
    };
    setAccounts([...accounts, newAccount]);
    handleCloseModal();
  };

  return (
    <div className="list-account-page">
      <Header />
      <div className="list-account-container">
        <Sidebar />
        <main className="list-account-main">
          <div className="list-account-header-gap"></div>
          <div className="list-account-header">
            <h2 className="list-account-title">Account</h2>
            <button className="add-account-button" onClick={handleAddClick}>+</button>
          </div>
          <hr className="list-account-divider" />
          <div className="list-account-rectangle">
            <div className="controls">
              <div className="entries-section">
                <p className="entries-text">Show</p>
                <select className="entries-dropdown">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
                <p className="entries-text">entries</p>
              </div>
              <div className="search-section">
                <p className="search-text">Search</p>
                <input type="text" className="search-input" placeholder="Enter search term" />
              </div>
            </div>
            <div className="list-account-table">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Account Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((account) => (
                    <tr key={account.id}>
                      <td>{account.id}</td>
                      <td>{account.name}</td>
                      <td>{account.code}</td>
                      <td>{account.type}</td>
                      <td>{account.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Add Account</h2>
                  <button className="modal-close" onClick={handleCloseModal}>X</button>
                </div>
                <div className="modal-body">
                  <label>
                    Name:
                    <input 
                      type="text" 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange} 
                      placeholder="Enter account name" 
                    />
                  </label>
                  <label>
                    Account Type:
                    <select 
                      name="accountType" 
                      value={form.accountType} 
                      onChange={handleChange}
                    >
                      <option value="Select Account">Select Account</option>
                      <option value="Assets">Assets</option>
                      <option value="Liability">Liability</option>
                      <option value="Expense">Expense</option>
                    </select>
                  </label>
                  <button className="modal-submit" onClick={handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ListAccount;
