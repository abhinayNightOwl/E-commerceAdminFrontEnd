import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

const ListStockTransfer = () => {
  const [productUnits, setProductUnits] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (location.state && location.state.newTransfer) {
      setProductUnits((prevUnits) => [...prevUnits, location.state.newTransfer]);
    }
  }, [location.state]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const totalPages = Math.ceil(productUnits.length / itemsPerPage);
  const paginatedUnits = productUnits
    .filter(unit => unit.referenceNo.toLowerCase().includes(searchTerm.toLowerCase()))
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
  const handleAddStockTransfer = () => {
    navigate('/admin-panel/add-stock-transfer');
  };

  return (
    <div className="product-units-page">
      <Header />
      <div className="product-units-container">
        <Sidebar />
        <main className="product-units-main">
          <div className="product-units-header">
            <h2>Product Units</h2>
            <button className="add-button" onClick={handleAddStockTransfer}>+</button>
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
                  <th>Warehouse From</th>
                  <th>Warehouse To</th>
                  <th>Reference No</th>
                  <th>Transfer Date</th>
                  <th>Product</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUnits.map((unit, index) => (
                  <tr key={index}>
                    <td>{unit.warehouseFrom}</td>
                    <td>{unit.warehouseTo}</td>
                    <td>{unit.referenceNo}</td>
                    <td>{unit.transferDate}</td>
                    <td>{unit.product}</td>
                    <td>{unit.note}</td>
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

export default ListStockTransfer;
