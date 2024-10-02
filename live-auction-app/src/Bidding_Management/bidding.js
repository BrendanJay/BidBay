import React from 'react';
import { NavLink } from 'react-router-dom';
import './bidding.css';

function Biddingpage() {
  return (
    <div className="bidding-page">
      {/* Header Section */}
      <header className="header">
        <h1>BIDDING MANAGEMENT</h1>
        <nav>
          <NavLink to="/manage-auction">Manage Auction</NavLink>
          <NavLink to="/auction-items">Auction Items</NavLink>
          <NavLink to="/report">Report</NavLink>
        </nav>
      </header>

      {/* Main Section */}
      <div className="main-section">
        <div className="auction-info">
          <h2>BIDDING MANAGEMENT/HISTORY</h2>
          <div className="auction-dates">
            <p>Opening Package: 08/30/2024</p>
            <p>Closing Package: 09/30/2024</p>
            <button className="status-button">Status: Open Auction</button>
          </div>
          <div className="banner-image">
            {/* Placeholder for image */}
            <img src="./Image/BiddingImage.jpg" alt="Auction Banner" />
          </div>
        </div>

        {/* Bid Form Section */}
        <div className="bid-form">
          <h3>BID FORM</h3>
          <div className="bidder-info">
            <div className="bidder-row">
              <label>Name & Surname:</label>
              <input type="text" value="auto" readOnly />
              <label>Section:</label>
              <input type="text" value="auto" readOnly />
              <label>Position:</label>
              <input type="text" value="auto" readOnly />
            </div>
            <div className="bidder-row">
              <label>Account Number:</label>
              <input type="text" value="input" />
              <label>Phone Number:</label>
              <input type="text" value="auto" readOnly />
            </div>
          </div>

          {/* Auction History Table */}
          <h4>Auction History:</h4>
          <table className="auction-table">
            <thead>
              <tr>
                <th>Bid Number</th>
                <th>Seller Name</th>
                <th>Specification/Version</th>
                <th>Quantity</th>
                <th>Item</th>
                <th>Bidding Price</th>
                <th>Payment</th>
                <th>Condition</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Isaac</td>
                <td>1</td>
                <td>99</td>
                <td>Painting</td>
                <td>20.000</td>
                <td><button>Choose Payment</button></td>
                <td>Old</td>
                <td>Oh my god</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ramses</td>
                <td>2</td>
                <td>99</td>
                <td>Robotics</td>
                <td>40,000</td>
                <td><button>Choose Payment</button></td>
                <td>New</td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Ben</td>
                <td>3</td>
                <td>99</td>
                <td>Nintendo</td>
                <td>60.000</td>
                <td><button>Choose Payment</button></td>
                <td>New</td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Kyle</td>
                <td>4</td>
                <td>99</td>
                <td>House</td>
                <td>20.000</td>
                <td><button>Choose Payment</button></td>
                <td>Old</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          {/* Options Button */}
            <div className="options-container">
            <button className="options-button">Options</button></div>
        </div>
      </div>
    </div>
  );
}

export default Biddingpage;