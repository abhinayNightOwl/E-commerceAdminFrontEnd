import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';
import './LedgerReport.css';

const LedgerReport = () => {
  const location = useLocation();
  const { state } = location;

  const [transactions, setTransactions] = React.useState([
    {
      id: 1,
      transactionDate: '2024-09-01',
      transactionDescription: 'Payment received',
      accountName: 'Account 1',
      user: 'User 1',
      type: 'Credit',
      dr: 0,
      cr: 100
    },
    {
      id: 2,
      transactionDate: '2024-09-02',
      transactionDescription: 'Purchase made',
      accountName: 'Account 2',
      user: 'User 2',
      type: 'Debit',
      dr: 50,
      cr: 0
    }
  ]);

  React.useEffect(() => {
    if (state && state.selectAccount && state.transactionType && state.amount && state.description) {
      const newTransaction = {
        id: transactions.length + 1,
        transactionDate: new Date().toISOString().split('T')[0],
        transactionDescription: state.description,
        accountName: state.selectAccount,
        user: 'Current User', // Replace with actual user if available
        type: state.transactionType === 'DR' ? 'Debit' : 'Credit',
        dr: state.transactionType === 'DR' ? parseFloat(state.amount) : 0,
        cr: state.transactionType === 'CR' ? parseFloat(state.amount) : 0
      };
      setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    }
  }, [state]);

  return (
    <div className="list-transaction-page">
      <Header />
      <div className="list-transaction-container">
        <Sidebar />
        <main className="list-transaction-main">
          <div className="list-transaction-header-gap"></div>
          <div className="list-transaction-header">
            <h2 className="list-transaction-title">Transaction</h2>
          </div>
          <hr className="list-transaction-divider" />
          <div className="list-transaction-rectangle">
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
            <div className="list-transaction-table">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Transaction Date</th>
                    <th>Transaction Description</th>
                    <th>Account Name</th>
                    <th>User</th>
                    <th>Type</th>
                    <th>Dr</th>
                    <th>Cr</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((account) => (
                    <tr key={account.id}>
                      <td>{account.id}</td>
                      <td>{account.transactionDate}</td>
                      <td>{account.transactionDescription}</td>
                      <td>{account.accountName}</td>
                      <td>{account.user}</td>
                      <td>{account.type}</td>
                      <td>{account.dr}</td>
                      <td>{account.cr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LedgerReport;
