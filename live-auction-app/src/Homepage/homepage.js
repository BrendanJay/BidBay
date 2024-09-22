import React from 'react';
import './homepage.css';

function App() {
  return (
    <div className="App">
      
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/store">Store List</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
        <h1>Welcome User</h1>
        <button className="choose-role-btn">Choose Your Role</button>
      
      <main>
        {/* Add your BidBay content here */}
      </main>
    </div>
  );
}

export default App;
