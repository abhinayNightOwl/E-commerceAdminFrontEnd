import React, { useState } from 'react';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';

const ProductBrand = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [isEditSliderOpen, setIsEditSliderOpen] = useState(false);
  const [productUnits, setProductUnits] = useState([{ id: 1, name: 'Unit 1', status: 'Active', slug: 'unit-1' }]);
  const [newUnit, setNewUnit] = useState({ name: '', status: 'Active', slug: '' });
  const [editUnit, setEditUnit] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Number of items to show per page
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddButtonClick = () => {
    setIsSliderOpen(true);
  };

  const handleCloseSlider = () => {
    setIsSliderOpen(false);
    setIsEditSliderOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUnit(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      // Handle the file upload logic here
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editUnit) {
      // Update existing unit
      setProductUnits(prevUnits =>
        prevUnits.map(unit => unit.id === editUnit.id
          ? { ...unit, name: newUnit.name, status: newUnit.status, slug: newUnit.slug }
          : unit
        )
      );
      setEditUnit(null);
    } else {
      // Add new unit
      const newId = productUnits.length ? Math.max(productUnits.map(unit => unit.id)) + 1 : 1;
      setProductUnits([...productUnits, { id: newId, name: newUnit.name, status: newUnit.status, slug: newUnit.slug }]);
    }
    setNewUnit({ name: '', status: 'Active', slug: '' });
    handleCloseSlider();
  };

  const handleEditClick = (unit) => {
    setEditUnit(unit);
    setNewUnit({ name: unit.name, status: unit.status, slug: unit.slug });
    setIsEditSliderOpen(true);
  };

  const handleDeleteClick = (id) => {
    setProductUnits(prevUnits => prevUnits.filter(unit => unit.id !== id));
  };

  // Pagination handlers
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
    setCurrentPage(1); // Reset to first page whenever items per page change
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
            <h2>Product Brand</h2>
            <button className="add-button" onClick={handleAddButtonClick}>+</button>
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
                  <th>Slug</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUnits.map(unit => (
                  <tr key={unit.id}>
                    <td>{unit.id}</td>
                    <td>{unit.name}</td>
                    <td>{unit.slug}</td>
                    <td>{unit.status}</td>
                    <td>
                      <button className="edit-button" onClick={() => handleEditClick(unit)}>✎</button>
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
          {(isSliderOpen || isEditSliderOpen) && (
            <div className="slider">
              <div className="slider-content">
                <button className="close-button" onClick={handleCloseSlider}>×</button>
                <h2>{isEditSliderOpen ? 'Edit Brand' : 'Add Brand'}</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name"> Brand Name (English):</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newUnit.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="slug"> Slug:</label>
                    <input
                      type="text"
                      id="slug"
                      name="slug"
                      value={newUnit.slug}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      className="upload-button"
                      onClick={() => document.getElementById('file-input').click()}
                    >
                      Upload Brand Media
                    </button>
                    <input
                      type="file"
                      id="file-input"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                    <p>Select image from gallery</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <select
                      id="status"
                      name="status"
                      value={newUnit.status}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <button type="submit" className="submit-button">{isEditSliderOpen ? 'Update' : 'Submit'}</button>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductBrand;
