import React from 'react';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';
import './AddReturnPurchase.css';

const AddReturnPurchase = () => {
  return (
    <div className="add-purchase-return-page">
      <Header />
      <div className="add-purchase-return-container">
        <Sidebar />
        <main className="add-purchase-return-main">
          <div className="add-purchase-return-header-gap"></div>
          <h2 className="add-purchase-return-title">Add Purchase Return</h2>
          <hr className="add-purchase-return-divider" />
          <div className="add-purchase-return-rectangle">
            <p className="rectangle-text">Choose Purchase</p>
            <select className="purchase-dropdown">
              <option value="">Select Purchase</option>
              <option value="purchase1">Purchase 1</option>
              <option value="purchase2">Purchase 2</option>
              <option value="purchase3">Purchase 3</option>
            </select>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddReturnPurchase;
