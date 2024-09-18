import React from 'react';
import './Dashboard.css';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <main className="main-content">
          <h3>Dashboard</h3>
          <div className="stats-container">
            <div className="stats-box">
              <h4>Orders</h4>
              <div className="stats-details">
                <span className="total-number">1,200</span>
                <span className="increase">+15% <i className="fas fa-arrow-up"></i></span>
              </div>
              <p className="compare-text">Compare to last year</p>
            </div>
            <div className="stats-box">
              <h4>Products</h4>
              <div className="stats-details">
                <span className="total-number">3,500</span>
                <span className="increase">+20% <i className="fas fa-arrow-up"></i></span>
              </div>
              <p className="compare-text">Compare to last year</p>
            </div>
            <div className="stats-box">
              <h4>Users</h4>
              <div className="stats-details">
                <span className="total-number">2,800</span>
                <span className="increase">+10% <i className="fas fa-arrow-up"></i></span>
              </div>
              <p className="compare-text">Compare to last year</p>
            </div>
            <div className="stats-box">
              <h4>Sales</h4>
              <div className="stats-details">
                <span className="total-number">$75,000</span>
                <span className="increase">+25% <i className="fas fa-arrow-up"></i></span>
              </div>
              <p className="compare-text">Compare to last year</p>
            </div>
          </div>
          <div className="rectangles-container">
            <div className="rectangle-box users">
              <h4>Users</h4>
              <div className="monthly-users">
                <h5>Monthly Users</h5>
                <div className="bar-graph">
                  <span className="total-number">2,800</span>
                  <span className="increase">+10% <i className="fas fa-arrow-up"></i></span>
                </div>
              </div>
            </div>
            <div className="rectangle-box">
              <h4>Last Update</h4>
              <div className="update-details">
                <div className="update-item">
                  <i className="fas fa-box"></i>
                  <div>
                    <span>Total Products</span>
                    <span className="new-update">New Products</span>
                  </div>
                  <span className="total-number">3,500</span>
                </div>
                <div className="update-item">
                  <i className="fas fa-dollar-sign"></i>
                  <div>
                    <span>Total Sales</span>
                    <span className="new-update">New Sales</span>
                  </div>
                  <span className="total-number">$75,000</span>
                </div>
                <div className="update-item">
                  <i className="fas fa-shopping-cart"></i>
                  <div>
                    <span>Total Orders</span>
                    <span className="new-update">New Orders</span>
                  </div>
                  <span className="total-number">1,200</span>
                </div>
                <div className="update-item">
                  <i className="fas fa-users"></i>
                  <div>
                    <span>Total Users</span>
                    <span className="new-update">New Users</span>
                  </div>
                  <span className="total-number">2,800</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-section">
            <div className="monthly-sales-box">
              <h4 className="monthly-sales-title">Monthly Sales</h4>
              <div className="graph-section">
                <p>Monthly Sales</p>
                <div className="bar-graph">
                  {/* Placeholder for graph data */}
                  Graph showing all the data of every month
                </div>
              </div>
            </div>
            <div className="orders-box">
              <h4 className="orders-title">Orders</h4>
              <div className="table-container">
                <div className="table-title">Order Management</div>
                <div className="table-actions">
                  <div>
                    <label>Show </label>
                    <select>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                    <label> entries</label>
                  </div>
                  <div>
                    <label>Search: </label>
                    <input type="text" />
                  </div>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Order Id</th>
                      <th>Order Status</th>
                      <th>Order Price(USD)</th>
                      <th>Order Date</th>
                      <th>Paymrnt Method</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Garrett Winters</td>
                      <td>Accountant</td>
                      <td>Tokyo</td>
                      <td>63</td>
                      <td>2011/07/25</td>
                      <td>$170,750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
