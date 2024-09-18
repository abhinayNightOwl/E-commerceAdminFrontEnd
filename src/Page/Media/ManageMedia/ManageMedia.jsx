import React, { useState } from 'react';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';
import './ManageMedia.css';

const ManageMedia = () => {
  const [items, setItems] = useState([
    { id: 1, src: 'image1.jpg', alt: 'Image 1', category: 'All' },
    { id: 2, src: 'image2.jpg', alt: 'Image 2', category: 'Demo' },
    { id: 3, src: 'image3.jpg', alt: 'Image 3', category: 'Generals' },
    { id: 4, src: 'image4.jpg', alt: 'Image 4', category: 'Sliders' },
    { id: 5, src: 'image5.jpg', alt: 'Image 5', category: 'Banner' },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const handleLoadMore = () => {
    const moreItems = [
      { id: 6, src: 'image6.jpg', alt: 'Image 6', category: 'Category' },
      { id: 7, src: 'image7.jpg', alt: 'Image 7', category: 'Product' },
    ];
    setItems(prevItems => [...prevItems, ...moreItems]);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(items.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleImageClick = (id) => {
    setSelectedItems(prevSelectedItems =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter(itemId => itemId !== id)
        : [...prevSelectedItems, id]
    );
  };

  const filteredItems = items.filter(item => activeCategory === 'All' || item.category === activeCategory);

  return (
    <div className="manage-media-page">
      <Header />
      <div className="manage-media-container">
        <Sidebar />
        <main className="manage-media-main">
          <div className="manage-media-box">
            <h2>Manage Gallery</h2>
            <hr className="divider" />
            <div className="manage-media-buttons">
              {['All', 'Demo', 'Generals', 'Sliders', 'Banner', 'Category', 'Product', 'Parallax', 'Home Blocks', 'Home Sliders'].map(category => (
                <button
                  key={category}
                  className={`media-button ${activeCategory === category ? 'active-button' : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="actions-section">
              <div className="select-all">
                <input type="checkbox" id="select-all" onChange={handleSelectAll} />
                <label htmlFor="select-all">Select All</label>
                <span>({selectedItems.length} selected)</span>
              </div>
              <div className="action-buttons">
                <button className="delete-button">Delete</button>
                <button className="add-new-button">Add New</button>
              </div>
            </div>
            <div className="images-section">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className={`media-image-container ${selectedItems.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleImageClick(item.id)}
                >
                  <img src={item.src} alt={item.alt} className="media-image" />
                </div>
              ))}
            </div>
            <div className="load-more-section">
              <span className="product-count">({filteredItems.length} products displayed)</span>
              <button className="load-more-button" onClick={handleLoadMore}>Load More</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManageMedia;
