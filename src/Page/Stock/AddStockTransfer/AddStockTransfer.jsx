import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddStockTransfer.css';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';

const AddStockTransfer = () => {
  const [warehouseFrom, setWarehouseFrom] = useState('');
  const [warehouseTo, setWarehouseTo] = useState('');
  const [referenceNo, setReferenceNo] = useState('');
  const [transferDate, setTransferDate] = useState('');
  const [product, setProduct] = useState('');
  const [note, setNote] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransfer = {
      warehouseFrom,
      warehouseTo,
      referenceNo,
      transferDate,
      product,
      note,
    };
    navigate('/admin-panel/list-stock-transfer', { state: { newTransfer } });
  };

  return (
    <div className="add-stock-transfer-page">
      <Header />
      <div className="add-stock-transfer-container">
        <Sidebar />
        <main className="add-stock-transfer-main">
          <div className="content-area">
            <h2>Add Stock Transfer</h2>
            <hr className="title-divider" />
            <div className="form-container">
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="warehouse-from">Warehouse From</label>
                  <select
                    id="warehouse-from"
                    value={warehouseFrom}
                    onChange={(e) => setWarehouseFrom(e.target.value)}
                  >
                    <option>Select Warehouse From</option>
                    <option>Default Warehouse From</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="warehouse-to">Warehouse To</label>
                  <select
                    id="warehouse-to"
                    value={warehouseTo}
                    onChange={(e) => setWarehouseTo(e.target.value)}
                  >
                    <option>Select Warehouse To</option>
                    <option>Default Warehouse To</option>
                  </select>
                </div>
              </div>
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="reference-no">Reference No</label>
                  <input
                    type="text"
                    id="reference-no"
                    value={referenceNo}
                    onChange={(e) => setReferenceNo(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="transfer-date">Stock Transfer Date</label>
                  <input
                    type="date"
                    id="transfer-date"
                    value={transferDate}
                    onChange={(e) => setTransferDate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="product">Product</label>
                  <select
                    id="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                  >
                    <option>Select Product</option>
                    <option>Product 1</option>
                    <option>Product 2</option>
                    <option>Product 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="note">Note</label>
                  <textarea
                    id="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
              </div>
              <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddStockTransfer;
