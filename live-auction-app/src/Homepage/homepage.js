import React, {useState} from 'react';
import './homepage.css';

function App() {

  const [showRoleBox, setShowRoleBox] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);


  const toggleRoleBox = () => {
    setShowRoleBox(!showRoleBox);
    
  };

  const handleBidderClick = () => {
    setShowRoleBox(false);
    setShowLogin(true);
  };
  const handleRegistrationClick = () => {
    setShowLogin(false);
    setShowRegistration(true);
  };
  

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
        <button className="choose-role-btn" onClick={toggleRoleBox}>Choose Your Role</button>
      
      {showRoleBox && (
        <div className="role-box">
          <h2>Choose Your Role</h2>
          <button onClick={handleBidderClick}>Bidder</button>
          <button>Seller</button>
          <button onClick={toggleRoleBox}>Close</button>
        </div>
      )}

{showLogin && (
  <LoginPage onClose={() => setShowLogin(false)} onRegister={handleRegistrationClick} />
)}

    {showRegistration && (
  <RegistrationPage onClose={() => setShowRegistration(false)} />
)}

       
      
      <main>
        {/* Add your BidBay content here */}
      </main>
    </div>
  );
}

const LoginPage = ({ onClose, onRegister }) => (
  <div className="login-page">
    <h2>Bidder Login</h2>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Login</button>
    <button onClick={onRegister}>Register</button>
    <button>
  <i className="fab fa-facebook-f"></i> Login using your Facebook account
</button>
    <button onClick={onClose}>Close</button>

  </div>
);


const RegistrationPage = ({ onClose }) => (
  <div className="registration-page">
    <h2>Register as Bidder</h2>
    <input type="text" placeholder="First Name" />
    <input type="text" placeholder="Last Name" />
    <input type="text" placeholder="Gender" />
    <input type="date" placeholder="Birthdate"></input>
    <input type="text" placeholder="Address" />
    <input type="email" placeholder="Email" />
    <input type="text" placeholder="Password" />
   

    
    <input type="password" placeholder="Confirm Password" />

    <button>Register</button>
    <button onClick={onClose}>Back</button>
  </div>
);



export default App;
