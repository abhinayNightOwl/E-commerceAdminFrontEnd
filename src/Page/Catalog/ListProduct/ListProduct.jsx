import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';

const ListProduct = () => {
  const [productUnits, setProductUnits] = useState([{ id: 1, name: 'Unit 1', status: 'Active' }]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleDeleteClick = (id) => {
    setProductUnits(prevUnits => prevUnits.filter(unit => unit.id !== id));
  };

  const totalPages = Math.ceil(productUnits.length / itemsPerPage);
  const paginatedUnits = productUnits
    .filter(unit => unit.name.toLowerCase().includes(searchTerm.toLowerCase()))
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

  const handleAddProductClick = () => {
    navigate('/admin-panel/add-product');
  };

  return (
    <div className="product-units-page">
      <Header />
      <div className="product-units-container">
        <Sidebar />
        <main className="product-units-main">
          <div className="product-units-header">
            <h2>Product List</h2>
            <button className="add-button" onClick={handleAddProductClick}>+</button>
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
                  <th>ID</th>
                  <th>Name</th>
                  <th>Product Image</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Discount Price(USD)</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUnits.map(unit => (
                  <tr key={unit.id}>
                    <td>{unit.id}</td>
                    <td>{unit.name}</td>
                    <td>{unit.productImage}</td>
                    <td>{unit.category}</td>
                    <td>{unit.type}</td>
                    <td>{unit.price}</td>
                    <td>{unit.discountPrice}</td>
                    <td>{unit.status}</td>
                    <td>
                      <button className="edit-button">✎</button>
                      <button className="delete-button" onClick={() => handleDeleteClick(unit.id)}>🗑️</button>
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

export default ListProduct;
