import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

const ListPurchaseQuotation = () => {
  const [productUnits, setProductUnits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const purchaseQuotation = location.state?.purchaseQuotation;
  const dummyData = [
    { id: 1, warehouse: 'Default Warehouse', supplier: 'Default Supplier', product: 'Product 1', note: 'First dummy note', subtotal: 100 },
    { id: 2, warehouse: 'Default Warehouse', supplier: 'Default Supplier', product: 'Product 2', note: 'Second dummy note', subtotal: 200 },
    { id: 3, warehouse: 'Default Warehouse', supplier: 'Default Supplier', product: 'Product 3', note: 'Third dummy note', subtotal: 300 },
  ];

  useEffect(() => {
    setProductUnits(dummyData);
  }, []);

  useEffect(() => {
    if (purchaseQuotation) {
      const newId = productUnits.length ? productUnits[productUnits.length - 1].id + 1 : 1;
      setProductUnits([...productUnits, { id: newId, ...purchaseQuotation }]);
    }
  }, [purchaseQuotation]);

  const totalPages = Math.ceil(productUnits.length / itemsPerPage);
  const paginatedUnits = productUnits
    .filter(unit => unit.product.toLowerCase().includes(searchTerm.toLowerCase()))
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

  const handleAddPurchaseQuotation = () => {
    navigate('/admin-panel/add-purchase-quotation');
  };

  return (
    <div className="product-units-page">
      <Header />
      <div className="product-units-container">
        <Sidebar />
        <main className="product-units-main">
          <div className="product-units-header">
            <h2>Stock List</h2>
            <button className="add-button" onClick={handleAddPurchaseQuotation}>+</button>
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
                  <th>Warehouse</th>
                  <th>Supplier</th>
                  <th>Product</th>
                  <th>Note</th>
                  <th>SubTotal(USD)</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUnits.map(unit => (
                  <tr key={unit.id}>
                    <td>{unit.id}</td>
                    <td>{unit.warehouse}</td>
                    <td>{unit.supplier}</td>
                    <td>{unit.product}</td>
                    <td>{unit.note}</td>
                    <td>${unit.subtotal.toFixed(2)}</td>
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

export default ListPurchaseQuotation;
