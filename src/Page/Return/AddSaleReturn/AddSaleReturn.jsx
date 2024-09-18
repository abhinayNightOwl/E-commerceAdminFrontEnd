import React from 'react';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';
import './AddSaleReturn.css'; // Assuming you have a CSS file for styling

const AddSaleReturn = () => {
  return (
    <div className="add-sale-return-page">
      <Header />
      <div className="add-sale-return-container">
        <Sidebar />
        <main className="add-sale-return-main">
          <div className="add-sale-return-header-gap"></div>
          <h2 className="add-sale-return-title">Add Sale Return</h2>
          <hr className="add-sale-return-divider" />
          <div className="add-sale-return-rectangle">
            <p className="rectangle-text">Choose Sale</p>
            <select className="sale-dropdown">
              <option value="">Select Sale</option>
              <option value="sale1">Sale 1</option>
              <option value="sale2">Sale 2</option>
              <option value="sale3">Sale 3</option>
            </select>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddSaleReturn;
