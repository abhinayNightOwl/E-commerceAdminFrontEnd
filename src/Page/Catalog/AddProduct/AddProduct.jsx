import React, { useState } from 'react';
import './AddProduct.css';
import Header from '../../../Component/Header/Header';
import Sidebar from '../../../Component/Sidebar/Sidebar';

const AddProduct = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [images, setImages] = useState([
    { id: 1, src: 'image1.jpg', alt: 'Image 1', category: 'All' },
    { id: 2, src: 'image2.jpg', alt: 'Image 2', category: 'Demo' },
    { id: 3, src: 'image3.jpg', alt: 'Image 3', category: 'Generals' },
    { id: 4, src: 'image4.jpg', alt: 'Image 4', category: 'Sliders' },
    { id: 5, src: 'image5.jpg', alt: 'Image 5', category: 'Banner' },
  ]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleShowMediaModal = () => {
    setShowMediaModal(true);
  };

  const handleCloseMediaModal = () => {
    setShowMediaModal(false);
  };

  const handleImageClick = (id) => {
    setSelectedItems(prevSelectedItems =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter(itemId => itemId !== id)
        : [...prevSelectedItems, id]
    );
  };

  const handleChooseImage = () => {
    const newSelectedImages = images.filter(image => selectedItems.includes(image.id));
    setSelectedImages(newSelectedImages);
    handleCloseMediaModal();
  };

  const filteredImages = images.filter(image => activeCategory === 'All' || image.category === activeCategory);

  return (
    <div className="add-product-page">
      <Header />
      <div className="add-product-container">
        <Sidebar />
        <div className="content">
          <h1>Add Product</h1>
          <hr />
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === 'basic' ? 'active' : ''}`}
              onClick={() => handleTabClick('basic')}
            >
              Basic Info
            </button>
            <button
              className={`tab-button ${activeTab === 'advanced' ? 'active' : ''}`}
              onClick={() => handleTabClick('advanced')}
            >
              Advanced Info
            </button>
            <button
              className={`tab-button ${activeTab === 'seo' ? 'active' : ''}`}
              onClick={() => handleTabClick('seo')}
            >
              SEO
            </button>
          </div>

          <div className={`tab-content ${activeTab === 'basic' ? 'active' : ''}`}>
            <div className="general-info">
              <h2>General Information</h2>
              <div className="info-content">
                <div className="info-row">
                  <div className="add-media">
                    <button className="add-media-button" onClick={handleShowMediaModal}>
                      Add Media
                    </button>
                    <div className="media-previews">
                      {selectedImages.map((image) => (
                        <div key={image.id} className="media-preview">
                          <img src={image.src} alt={image.alt} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="category-info">
                    <label htmlFor="category">Category</label>
                    <select id="category">
                      <option value="testing">Testing</option>
                      <option value="sub-cat">Sub Cat</option>
                    </select>
                    <div className="gap"></div>
                    <label htmlFor="video-code">Video Embedded Code</label>
                    <input type="text" id="video-code" />
                  </div>
                </div>
              </div>
            </div>
            <button className="continue-button" onClick={() => handleTabClick('advanced')}>
              Continue
            </button>
          </div>

          <div className={`tab-content ${activeTab === 'advanced' ? 'active' : ''}`}>
            <div className="advanced-info rectangle">
              <h2>Advanced Information</h2>
              <div className="info-row">
                <div className="leftadvancedinfo">
                  <label htmlFor="product-type">Product Type</label>
                  <select id="product-type">
                    <option value="select">Select Product Type</option>
                    <option value="simple">Simple</option>
                    <option value="variable">Variable</option>
                  </select>
                  <div className="gap"></div>
                  <div className="rectangle-container">
                    <span>Point</span>
                    <div className="switch">
                      <input type="checkbox" id="point-switch" />
                      <label htmlFor="point-switch"></label>
                    </div>
                  </div>
                  <div className="gap"></div>
                  <label htmlFor="units">Units</label>
                  <select id="units">
                    <option value="select">Select Unit</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                  </select>
                  <div className="gap"></div>
                  <label htmlFor="product-weight">Product Weight</label>
                  <input type="text" id="product-weight" />
                  <div className="gap"></div>
                  <label htmlFor="discount-price">Discount Price</label>
                  <input type="text" id="discount-price" />
                  <div className="gap"></div>
                  <label htmlFor="max-order">Maximum Order</label>
                  <input type="text" id="max-order" defaultValue="5" />
                </div>
                <div className="rightadvancedinfo">
                  <div className="rectangle-container">
                    <span>Is Active</span>
                    <div className="switch">
                      <input type="checkbox" id="is-active-switch" />
                      <label htmlFor="is-active-switch"></label>
                    </div>
                  </div>
                  <div className="gap"></div>
                  <div className="rectangle-container">
                    <span>Is Feature</span>
                    <div className="switch">
                      <input type="checkbox" id="is-feature-switch" />
                      <label htmlFor="is-feature-switch"></label>
                    </div>
                  </div>
                  <div className="gap"></div>
                  <label htmlFor="brand">Brand</label>
                  <select id="brand">
                    <option value="select">Select Brand</option>
                    <option value="brand1">Brand 1</option>
                    <option value="brand2">Brand 2</option>
                  </select>
                  <div className="gap"></div>
                  <label htmlFor="price">Price</label>
                  <input type="text" id="price" />
                  <div className="gap"></div>
                  <label htmlFor="minimum-order">Minimum Order</label>
                  <input type="text" id="minimum-order" />
                  <div className="gap"></div>
                  <label htmlFor="sku">SKU</label>
                  <input type="text" id="sku" />
                </div>
              </div>
              <div className="button-row">
                <button className="back-button" onClick={() => handleTabClick('basic')}>Back</button>
                <button className="continue-button" onClick={() => handleTabClick('seo')}>Continue</button>
              </div>
            </div>
          </div>
          <div className={`tab-content ${activeTab === 'seo' ? 'active' : ''}`}>
            <div className="seo-info">
              <h2>SEO Information</h2>
              <div className="rectangle seo-rectangle">
                <div className="leftseodescription">
                  <label htmlFor="seo-meta-tags">SEO Meta Tags</label>
                  <input type="text" id="seo-meta-tags" />
                </div>
                <div className="rightseodescription">
                  <label htmlFor="seo-description">SEO Description</label>
                  <input type="text" id="seo-description" />
                </div>
              </div>
              <div className="button-row">
                <button className="back-button" onClick={() => handleTabClick('advanced')}>Back</button>
                <button className="save-button">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
