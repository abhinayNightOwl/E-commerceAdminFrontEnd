import React, { useState } from 'react';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';

const ProductReview = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [isEditSliderOpen, setIsEditSliderOpen] = useState(false);
  const [productUnits, setProductUnits] = useState([
    { id: 1, name: 'Junk Food', status: 'Active', customerReview: 'Great!', customerEmail: 'customer1@example.com', customerName: 'John Doe', rating: 4, productName: 'Junk Food' },
    { id: 2, name: 'Healthy Snack', status: 'Inactive', customerReview: 'Good', customerEmail: 'customer2@example.com', customerName: 'Jane Doe', rating: 3, productName: 'Healthy Snack' },
    { id: 3, name: 'Junk Food', status: 'Active', customerReview: 'Excellent!', customerEmail: 'customer3@example.com', customerName: 'Sam Smith', rating: 5, productName: 'Junk Food' }
  ]);
  const [newUnit, setNewUnit] = useState({ name: '', status: 'Active' });
  const [editUnit, setEditUnit] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUnit(prevState => ({ ...prevState, [name]: value }));
  };

  const handleEditClick = (unit) => {
    setEditUnit(unit);
    setNewUnit({ name: unit.name, status: unit.status });
    setIsEditSliderOpen(true);
  };

  const handleDeleteClick = (id) => {
    setProductUnits(prevUnits => prevUnits.filter(unit => unit.id !== id));
  };

  // Filter productUnits to only include 'Junk Food' and 'Active' status
  const filteredUnits = productUnits
    .filter(unit => unit.productName === 'Junk Food' && unit.status === 'Active')
    .filter(unit => unit.customerName.toLowerCase().includes(searchTerm.toLowerCase()));

  const totalPages = Math.ceil(filteredUnits.length / itemsPerPage);
  const paginatedUnits = filteredUnits
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

  return (
    <div className="product-units-page">
      <Header />
      <div className="product-units-container">
        <Sidebar />
        <main className="product-units-main">
          <div className="product-units-header">
            <h2>Product Review</h2>
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
                  <th>Customer Review</th>
                  <th>Customer Email</th>
                  <th>Customer Name</th>
                  <th>Rating</th>
                  <th>Product Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUnits.map(unit => (
                  <tr key={unit.id}>
                    <td>{unit.id}</td>
                    <td>{unit.customerReview}</td>
                    <td>{unit.customerEmail}</td>
                    <td>{unit.customerName}</td>
                    <td>{unit.rating}</td>
                    <td>{unit.productName}</td>
                    <td>{unit.status}</td>
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

export default ProductReview;
