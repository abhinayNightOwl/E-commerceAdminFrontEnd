import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';
import './RolesAdd.css';

const RolesAdd = () => {
  const [roleName, setRoleName] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const availableItems = [
    'Dashboard', 'Media', 'Catalog', 'Stocks', 'Quotation',
    'Purchase', 'See/Order', 'Return', 'Accounts', 'People',
    'Reports', 'Delivery Boy', 'Blog/News', 'Content Page'
  ];

  const handleItemClick = (item) => {
    setSelectedItems(prevItems => 
      prevItems.includes(item) ? prevItems.filter(i => i !== item) : [...prevItems, item]
    );
  };
   
  const handleSwitchToggle = (item) => {
    // Implement switch toggle logic if necessary
  };

  const handleSave = () => {
    // Save logic here
    navigate('/admin-panel/role');
  };

  return (
    <div className="roles-add-page">
      <Header />
      <div className="roles-add-container">
        <Sidebar />
        <main className="roles-add-main">
          <h2>Roles and Permission</h2>
          <hr className="divider" />
          <div className="role-input-container">
            <label>Role</label>
            <input
              type="text"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
            />
          </div>
          <div className="permissions-container">
            <div className="permissions-list">
              {availableItems.map(item => (
                <div
                  key={item}
                  className={`permission-item ${selectedItems.includes(item) ? 'selected' : ''}`}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="selected-permissions">
              {selectedItems.map(item => (
                <div key={item} className="selected-permission-item">
                  <span>{item}</span>
                  <input
                    type="checkbox"
                    checked={true}
                    onChange={() => handleSwitchToggle(item)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="actions">
            <button className="save-button" onClick={handleSave}>Save</button>
            <button className="cancel-button" onClick={() => navigate('/roles')}>Cancel</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RolesAdd;
