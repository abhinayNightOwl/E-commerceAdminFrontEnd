import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isStockOpen, setIsStockOpen] = useState(false);
  const [isQuotationOpen, setIsQuotationOpen] = useState(false);
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);
  const [isReturnOpen, setIsReturnOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isPeopleOpen, setIsPeopleOpen] = useState(false);

  const handleMediaClick = () => {
    setIsMediaOpen(!isMediaOpen);
  };

  const handleCatalogClick = () => {
    setIsCatalogOpen(!isCatalogOpen);
  };

  const handleStockClick = () => {
    setIsStockOpen(!isStockOpen);
  };

  const handleQuotationClick = () => {
    setIsQuotationOpen(!isQuotationOpen);
  };

  const handlePurchaseClick = () => {
    setIsPurchaseOpen(!isPurchaseOpen);
  };
  const handleSellClick = () => {
    setIsSellOpen(!isSellOpen);
  };
  const handleReturnClick = () => {
    setIsReturnOpen(!isReturnOpen);
  };
  const handleAccountClick = () => {
    setIsAccountOpen(!isAccountOpen);
  };
  const handlePeopleClick = () => {
    setIsPeopleOpen(!isPeopleOpen);
  };

  return (
    <aside className="sidebar">
      <Link to="/admin-panel/dashboard" className="sidebar-item">
        <i className="icon fas fa-tachometer-alt"></i>
        <span className="sidebar-text">Dashboard</span>
      </Link>
      <div className="sidebar-item" onClick={handleMediaClick}>
        <i className="icon fas fa-photo-video"></i>
        <span className="sidebar-text">Media</span>
        <i className={`icon fas fa-chevron-right ${isMediaOpen ? 'rotate' : ''}`}></i>
      </div>
      {isMediaOpen && (
        <div className="sidebar-subitems">
          <Link to="/admin-panel/media-settings" className="sidebar-subitem">
            <input type="radio" id="media-settings" name="media" />
            <label htmlFor="media-settings" className="sidebar-text">Media Settings</label>
          </Link>
          <Link to="/admin-panel/manage-media" className="sidebar-subitem">
            <input type="radio" id="manage-media" name="media" />
            <label htmlFor="manage-media" className="sidebar-text">Manage Media</label>
          </Link>
        </div>
      )}
      <div className="sidebar-item" onClick={handleCatalogClick}>
        <i className="icon fas fa-book"></i>
        <span className="sidebar-text">Catalog</span>
        <i className={`icon fas fa-chevron-right ${isCatalogOpen ? 'rotate' : ''}`}></i>
      </div>
      {isCatalogOpen && (
        <div className="sidebar-subitems">
          <Link to="/admin-panel/product-units" className="sidebar-subitem">
            <input type="radio" id="product-units" name="catalog" />
            <label htmlFor="product-units" className="sidebar-text">Product Units</label>
          </Link>
          <Link to="/admin-panel/product-attributes" className="sidebar-subitem">
            <input type="radio" id="product-attributes" name="catalog" />
            <label htmlFor="product-attributes" className="sidebar-text">Product Attributes</label>
          </Link>
          <Link to="/admin-panel/product-variation" className="sidebar-subitem">
            <input type="radio" id="product-variation" name="catalog" />
            <label htmlFor="product-variation" className="sidebar-text">Product Variation</label>
          </Link>
          <Link to="/admin-panel/product-brand" className="sidebar-subitem">
            <input type="radio" id="product-brands" name="catalog" />
            <label htmlFor="product-brands" className="sidebar-text">Product Brands</label>
          </Link>
          <Link to="/admin-panel/product-category" className="sidebar-subitem">
            <input type="radio" id="product-category" name="catalog" />
            <label htmlFor="product-category" className="sidebar-text">Product Category</label>
          </Link>
          <Link to="/admin-panel/add-product" className="sidebar-subitem">
            <input type="radio" id="add-product" name="catalog" />
            <label htmlFor="add-product" className="sidebar-text">Add Product</label>
          </Link>
          <Link to="/admin-panel/product-list" className="sidebar-subitem">
            <input type="radio" id="list-product" name="catalog" />
            <label htmlFor="list-product" className="sidebar-text">List Products</label>
          </Link>
          <Link to="/admin-panel/product-review" className="sidebar-subitem">
            <input type="radio" id="product-reviews" name="catalog" />
            <label htmlFor="product-reviews" className="sidebar-text">Product Reviews</label>
          </Link>
        </div>
      )}
      <div className="sidebar-item" onClick={handleStockClick}>
        <i className="icon fas fa-boxes"></i>
        <span className="sidebar-text">Stock/Inventory</span>
        <i className={`icon fas fa-chevron-right ${isStockOpen ? 'rotate' : ''}`}></i>
      </div>
      {isStockOpen && (
        <div className="sidebar-subitems">
          <Link to="/admin-panel/list-stock" className="sidebar-subitem">
            <input type="radio" id="list-stock" name="stock" />
            <label htmlFor="list-stock" className="sidebar-text">List Stock</label>
          </Link>
          <Link to="/admin-panel/add-stock" className="sidebar-subitem">
            <input type="radio" id="add-stock" name="stock" />
            <label htmlFor="add-stock" className="sidebar-text">Add Stock</label>
          </Link>
          <Link to="/admin-panel/list-stock-transfer" className="sidebar-subitem">
            <input type="radio" id="list-stock-transfer" name="stock" />
            <label htmlFor="list-stock-transfer" className="sidebar-text">List Stock Transfer</label>
          </Link>
          <Link to="/admin-panel/add-stock-transfer" className="sidebar-subitem">
            <input type="radio" id="add-stock-transfer" name="stock" />
            <label htmlFor="add-stock-transfer" className="sidebar-text">Add Stock Transfer</label>
          </Link>
        </div>
      )}
      <div className="sidebar-item" onClick={handleQuotationClick}>
        <i className="icon fas fa-file-invoice"></i>
        <span className="sidebar-text">Quotation</span>
        <i className={`icon fas fa-chevron-right ${isQuotationOpen ? 'rotate' : ''}`}></i>
      </div>
      {isQuotationOpen && (
        <div className="sidebar-subitems">
          <Link to="/admin-panel/list-purchase-quotation" className="sidebar-subitem">
            <input type="radio" id="list-purchase-quotation" name="quotation" />
            <label htmlFor="list-purchase-quotation" className="sidebar-text">List Purchase Quotation</label>
          </Link>
          <Link to="/admin-panel/add-purchase-quotation" className="sidebar-subitem">
            <input type="radio" id="add-purchase-quotation" name="quotation" />
            <label htmlFor="add-purchase-quotation" className="sidebar-text">Add Purchase Quotation</label>
          </Link>
          <Link to="/admin-panel/list-sale-quotation" className="sidebar-subitem">
            <input type="radio" id="list-sale-quotation" name="quotation" />
            <label htmlFor="list-sale-quotation" className="sidebar-text">List Sale Quotation</label>
          </Link>
          <Link to="/admin-panel/add-sale-quotation" className="sidebar-subitem">
            <input type="radio" id="add-sale-quotation" name="quotation" />
            <label htmlFor="add-sale-quotation" className="sidebar-text">Add Sale Quotation</label>
          </Link>
        </div>
      )}
      <div className="sidebar-item" onClick={handlePurchaseClick}>
        <i className="icon fas fa-shopping-cart"></i>
        <span className="sidebar-text">Purchase</span>
        <i className={`icon fas fa-chevron-right ${isPurchaseOpen ? 'rotate' : ''}`}></i>
      </div>
      {isPurchaseOpen && (
        <div className="sidebar-subitems">
          <Link to="/admin-panel/list-purchase" className="sidebar-subitem">
            <input type="radio" id="list-purchase" name="purchase" />
            <label htmlFor="list-purchase" className="sidebar-text">List Purchase</label>
          </Link>
          <Link to="/admin-panel/add-purchase" className="sidebar-subitem">
            <input type="radio" id="add-purchase" name="purchase" />
            <label htmlFor="add-purchase" className="sidebar-text">Add Purchase</label>
          </Link>
        </div>
      )}
      <div className="sidebar-item" onClick={handleSellClick}>
        <i className="icon fas fa-shopping-cart"></i>
        <span className="sidebar-text">Sell/Orders</span>
        <i className={`icon fas fa-chevron-right ${isSellOpen ? 'rotate' : ''}`}></i>
      </div>
      {isSellOpen && (
        <div className="sidebar-subitems">
          <Link to="/admin-panel/order" className="sidebar-subitem">
            <input type="radio" id="order" name="order" />
            <label htmlFor="order" className="sidebar-text">Order</label>
          </Link>
          <Link to="/admin-panel/add-sale" className="sidebar-subitem">
            <input type="radio" id="add-sale" name="sell" />
            <label htmlFor="add-sale" className="sidebar-text">Add Sale</label>
          </Link>
          <Link to="/admin-panel/pos" className="sidebar-subitem">
            <input type="radio" id="pos" name="sell" />
            <label htmlFor="pos" className="sidebar-text">POS</label>
          </Link>
        </div>
      )}
      <div className="sidebar-item" onClick={handleReturnClick}>
        <i className="icon fas fa-shopping-cart"></i>
        <span className="sidebar-text">Return</span>
        <i className={`icon fas fa-chevron-right ${isReturnOpen ? 'rotate' : ''}`}></i>
      </div>
      {isReturnOpen && (
        <div className="sidebar-subitems">
          <Link to="/admin-panel/sale-return" className="sidebar-subitem">
            <input type="radio" id="add-sale-return" name="order" />
            <label htmlFor="add-sale-return" className="sidebar-text">Add Sale Return</label>
          </Link>
          <Link to="/admin-panel/purchase-return" className="sidebar-subitem">
            <input type="radio" id="add-return-purchase" name="return" />
            <label htmlFor="add-return-purchase" className="sidebar-text">Add Return Purchase</label>
          </Link>
        </div>
      )}
      <div className="sidebar-item" onClick={handleAccountClick}>
        <i className="icon fas fa-shopping-cart"></i>
        <span className="sidebar-text">Account</span>
        <i className={`icon fas fa-chevron-right ${isAccountOpen ? 'rotate' : ''}`}></i>
      </div>
      {isAccountOpen && (
        <div className="sidebar-subitems">
          <Link to="/admin-panel/list-account" className="sidebar-subitem">
            <input type="radio" id="list-account" name="list-account" />
            <label htmlFor="list-account" className="sidebar-text">List Account</label>
          </Link>
          <Link to="/admin-panel/ledger-report" className="sidebar-subitem">
            <input type="radio" id="ledger-report" name="ledger-report" />
            <label htmlFor="ledger-report" className="sidebar-text">Ledger Report</label>
          </Link>
          <Link to="/admin-panel/asset-adjustments" className="sidebar-subitem">
            <input type="radio" id="asset-adjustments" name="asset-adjustments" />
            <label htmlFor="asset-adjustments" className="sidebar-text">Asset Adjustment</label>
          </Link>
          <Link to="/admin-panel/payment" className="sidebar-subitem">
            <input type="radio" id="payment" name="payment" />
            <label htmlFor="payment" className="sidebar-text">Payments</label>
          </Link>
          <Link to="/admin-panel/receipts" className="sidebar-subitem">
            <input type="radio" id="receipts" name="receipts" />
            <label htmlFor="receipts" className="sidebar-text">Receipts</label>
          </Link>
          <Link to="/admin-panel/expense" className="sidebar-subitem">
            <input type="radio" id="expense" name="expense" />
            <label htmlFor="expense" className="sidebar-text">Expense</label>
          </Link>
        </div>
      )}
      <div className="sidebar-item" onClick={handlePeopleClick}>
        <i className="icon fas fa-shopping-cart"></i>
        <span className="sidebar-text">People</span>
        <i className={`icon fas fa-chevron-right ${isPeopleOpen ? 'rotate' : ''}`}></i>
      </div>
      {isPeopleOpen && (
        <div className="sidebar-subitems">
          <Link to="/admin-panel/role" className="sidebar-subitem">
            <input type="radio" id="role" name="people" />
            <label htmlFor="role" className="sidebar-text">Role</label>
          </Link>
          <Link to="/admin-panel/customer" className="sidebar-subitem">
            <input type="radio" id="customer" name="people" />
            <label htmlFor="customer" className="sidebar-text">Customer</label>
          </Link>
          <Link to="/admin-panel/supplier" className="sidebar-subitem">
            <input type="radio" id="supplier" name="people" />
            <label htmlFor="Supplier" className="sidebar-text">Suppliers</label>
          </Link>
          <Link to="/admin-panel/users" className="sidebar-subitem">
            <input type="radio" id="user" name="payment" />
            <label htmlFor="user" className="sidebar-text">Users</label>
          </Link>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
