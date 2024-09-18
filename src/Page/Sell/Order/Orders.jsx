import React, { useState } from 'react';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Orders = () => {
  // Dummy data for orders
  const dummyData = [
    {
      id: 1,
      orderId: 'O001',
      orderStatus: 'Completed',
      orderPrice: 1000,
      orderDate: '2024-01-01',
      paymentMethod: 'Credit Card',
    },
    {
      id: 2,
      orderId: 'O002',
      orderStatus: 'Pending',
      orderPrice: 1500,
      orderDate: '2024-02-01',
      paymentMethod: 'PayPal',
    },
    {
      id: 3,
      orderId: 'O003',
      orderStatus: 'Cancelled',
      orderPrice: 500,
      orderDate: '2024-03-01',
      paymentMethod: 'Cash',
    },
    // Add more dummy data as needed
  ];

  const [productUnits, setProductUnits] = useState(dummyData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const totalPages = Math.ceil(productUnits.length / itemsPerPage);
  const paginatedUnits = productUnits
    .filter(unit => unit.orderId.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    setProductUnits(prevUnits => prevUnits.filter(unit => unit.id !== id));
  };

  return (
    <div className="product-units-page">
      <Header />
      <div className="product-units-container">
        <Sidebar />
        <main className="product-units-main">
          <div className="product-units-header">
            <h2>Orders</h2>
          </div>
          <hr className="divider" />
          <div className="product-box">
            <div className="table-controls">
              <div className="left-controls">
                <label>Show 
                  <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                entries</label>
              </div>
              <div className="right-controls">
                <label>
                  Search: <input type="text" value={searchTerm} onChange={handleSearchChange} />
                </label>
              </div>
            </div>
            <table className="product-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Order Status</th>
                  <th>Order Price (USD)</th>
                  <th>Order Date</th>
                  <th>Payment Method</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUnits.map(unit => (
                  <tr key={unit.id}>
                    <td>{unit.orderId}</td>
                    <td>{unit.orderStatus}</td>
                    <td>{unit.orderPrice}</td>
                    <td>{unit.orderDate}</td>
                    <td>{unit.paymentMethod}</td>
                    <td>
                      <FaEdit className="action-icon" />
                      <FaTrash className="action-icon" onClick={() => handleDelete(unit.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination-controls">
            <button className="pagination-button" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
            <span className="pagination-info">Page {currentPage} of {totalPages}</span>
            <button className="pagination-button" onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Orders;
