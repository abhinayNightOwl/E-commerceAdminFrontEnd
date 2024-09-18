import React, { useState } from 'react';
import './MediaSettings.css';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';

const MediaSettings = () => {
  const [activeSetting, setActiveSetting] = useState('large');

  const handleSettingClick = (setting) => {
    setActiveSetting(setting);
  };

  return (
    <div className="media-settings-page">
      <Header />
      <div className="media-settings-container">
        <Sidebar />
        <main className="media-settings-main">
          <div className="media-settings-box">
            <h2>Media Settings</h2>
            <div className="settings-section">
              <div className="settings-buttons">
                <button 
                  className={activeSetting === 'large' ? 'active' : ''} 
                  onClick={() => handleSettingClick('large')}
                >
                  Large Settings
                </button>
                <button 
                  className={activeSetting === 'medium' ? 'active' : ''} 
                  onClick={() => handleSettingClick('medium')}
                >
                  Medium Settings
                </button>
                <button 
                  className={activeSetting === 'thumbnail' ? 'active' : ''} 
                  onClick={() => handleSettingClick('thumbnail')}
                >
                  Thumbnail Settings
                </button>
              </div>
              <div className="settings-details">
                {activeSetting === 'large' && (
                  <div className="settings-form">
                    <label>Large Height</label>
                    <input type="text" placeholder="Enter large height" />
                    <label>Large Width</label>
                    <input type="text" placeholder="Enter large width" />
                  </div>
                )}
                {activeSetting === 'medium' && (
                  <div className="settings-form">
                    <label>Medium Height</label>
                    <input type="text" placeholder="Enter medium height" />
                    <label>Medium Width</label>
                    <input type="text" placeholder="Enter medium width" />
                  </div>
                )}
                {activeSetting === 'thumbnail' && (
                  <div className="settings-form">
                    <label>Thumbnail Height</label>
                    <input type="text" placeholder="Enter thumbnail height" />
                    <label>Thumbnail Width</label>
                    <input type="text" placeholder="Enter thumbnail width" />
                  </div>
                )}
                <div className="submit-section">
                  <button className="submit-button">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MediaSettings;
