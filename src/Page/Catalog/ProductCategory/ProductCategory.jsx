import React, { useState } from 'react';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';

const ProductCategory = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [isEditSliderOpen, setIsEditSliderOpen] = useState(false);
  const [productUnits, setProductUnits] = useState([{ id: 1, name: 'Unit 1', description: 'Sample Description', status: 'Active', slug: 'unit-1' }]);
  const [newUnit, setNewUnit] = useState({ category: '', description: '', status: 'Active', slug: '' });
  const [editUnit, setEditUnit] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
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
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editUnit) {
      setProductUnits(prevUnits =>
        prevUnits.map(unit => unit.id === editUnit.id
          ? { ...unit, name: newUnit.category, description: newUnit.description, slug: newUnit.slug }
          : unit
        )
      );
      setEditUnit(null);
    } else {
      const newId = productUnits.length ? Math.max(productUnits.map(unit => unit.id)) + 1 : 1;
      setProductUnits([...productUnits, { id: newId, name: newUnit.category, description: newUnit.description, slug: newUnit.slug }]);
    }
    setNewUnit({ category: '', description: '', status: 'Active', slug: '' });
    handleCloseSlider();
  };

  const handleEditClick = (unit) => {
    setEditUnit(unit);
    setNewUnit({ category: unit.name, description: unit.description, status: unit.status, slug: unit.slug });
    setIsEditSliderOpen(true);
  };

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

  return (
    <div className="product-units-page">
      <Header />
      <div className="product-units-container">
        <Sidebar />
        <main className="product-units-main">
          <div className="product-units-header">
            <h2>Product Category</h2>
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
                  <th>Description</th>
                  <th>Slug</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUnits.map(unit => (
                  <tr key={unit.id}>
                    <td>{unit.id}</td>
                    <td>{unit.name}</td>
                    <td>{unit.description}</td>
                    <td>{unit.slug}</td>
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
                <h2>{isEditSliderOpen ? 'Edit Category' : 'Add Category'}</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="category">Parent Category:</label>
                    <select
                      id="category"
                      name="category"
                      value={newUnit.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Testing">Testing</option>
                      <option value="SubCategory">Sub Category1</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={newUnit.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="slug">Slug:</label>
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
                      Upload Category Media
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
                    <button
                      type="button"
                      className="upload-button"
                      onClick={() => document.getElementById('icon-input').click()}
                    >
                      Upload Category Icon
                    </button>
                    <input
                      type="file"
                      id="icon-input"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                    <p>Select icon from gallery</p>
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

export default ProductCategory;
