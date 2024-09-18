import React, { useState } from 'react';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

const ListPurchase = () => {
  const navigate = useNavigate();
  const dummyData = [
    {
      id: 1,
      purchaseId: 'P001',
      supplier: 'Supplier A',
      purchasedate: '2024-01-01',
      warehouse: 'Warehouse 1',
      purchaseStatus: 'Completed',
      totalAmount: 1000,
      paidAmount: 800,
      discount: 50,
      dueAmount: 150,
      View: 'View'
    },
    {
      id: 2,
      purchaseId: 'P002',
      supplier: 'Supplier B',
      purchasedate: '2024-02-01',
      warehouse: 'Warehouse 2',
      purchaseStatus: 'Pending',
      totalAmount: 1500,
      paidAmount: 1500,
      discount: 100,
      dueAmount: 0,
      View: 'View'
    },
    {
      id: 3,
      purchaseId: 'P003',
      supplier: 'Supplier C',
      purchasedate: '2024-03-01',
      warehouse: 'Warehouse 3',
      purchaseStatus: 'Cancelled',
      totalAmount: 500,
      paidAmount: 0,
      discount: 0,
      dueAmount: 500,
      View: 'View'
    },
    // Add more dummy data as needed
  ];

  const [productUnits, setProductUnits] = useState(dummyData);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const totalPages = Math.ceil(productUnits.length / itemsPerPage);
  const paginatedUnits = productUnits
    .filter(unit => unit.purchaseId.toLowerCase().includes(searchTerm.toLowerCase()))
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
  const handleAddPurchaseClick = () => {
    navigate('/admin-panel/add-purchase');
  };

  return (
    <div className="product-units-page">
      <Header />
      <div className="product-units-container">
        <Sidebar />
        <main className="product-units-main">
          <div className="product-units-header">
            <h2>Product Units</h2>
            <button className="add-button" onClick={handleAddPurchaseClick}>+</button>
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
                  <th>Purchase ID</th>
                  <th>Supplier</th>
                  <th>Purchase Date</th>
                  <th>Warehouse</th>
                  <th>Purchase status</th>
                  <th>Total Amount(USD)</th>
                  <th>Paid Amount(USD)</th>
                  <th>Discount(USD)</th>
                  <th>Due Amount(USD)</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUnits.map(unit => (
                  <tr key={unit.id}>
                    <td>{unit.purchaseId}</td>
                    <td>{unit.supplier}</td>
                    <td>{unit.purchasedate}</td>
                    <td>{unit.warehouse}</td>
                    <td>{unit.purchaseStatus}</td>
                    <td>{unit.totalAmount}</td>
                    <td>{unit.paidAmount}</td>
                    <td>{unit.discount}</td>
                    <td>{unit.dueAmount}</td>
                    <td>{unit.View}</td>
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

export default ListPurchase;