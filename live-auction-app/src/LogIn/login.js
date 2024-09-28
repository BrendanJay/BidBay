import { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';



function SellerLoginPage() {
  const [isBidderLogin, setIsBidderLogin] = useState(false);
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate();

  // Toggle the state to show either Seller or Bidder form
  const toggleLogin = () => {
    setIsBidderLogin(!isBidderLogin);
  };
   
  



  const handleLogin = async () => {
    setError(''); // Clear any previous error messages

    try {
      if (isBidderLogin) {
        // Handle bidder login logic here
        console.log('Bidder login logic');
        // Implement bidder login if necessary
      } else {
        // Handle seller login logic
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Seller logged in successfully');
        navigate('/sellerdashboard'); // Redirect to the seller dashboard or another page
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.message); // Set error message if login fails
    }
  };

  const onSellerRegister = () => {
    navigate('/sellerregistration'); // Navigate to seller registration
  };

  const onBidderRegister = () => {
    navigate('/bidderregistration'); // Navigate to bidder registration
  };

  const onClose = () => {
    navigate(-1); // Close the login page
  };

  return (
    <div className="App">
      <div className="login-container">
        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}
        
        {/* Toggle Panel */}
        <div className="toggle-panel">
          <button
            className={`toggle-button ${!isBidderLogin ? 'active' : ''}`}
            onClick={() => setIsBidderLogin(false)}
          >
            Login as Seller
          </button>
          <button
            className={`toggle-button ${isBidderLogin ? 'active' : ''}`}
            onClick={() => setIsBidderLogin(true)}
          >
            Login as Bidder
          </button>
        </div>
        
        {/* Login Form Containers */}
        <div className="form-container">
          {!isBidderLogin ? (
            <div className="login-form seller-login-form">
              <h2>Seller Login</h2>
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Capture email input
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Capture password input
              />
              <button onClick={handleLogin}>Login</button>
              <button onClick={onSellerRegister}>Register as Seller</button>
              <button>
                <i className="fab fa-facebook-f"></i> Login with Facebook
              </button>
              <button onClick={onClose}>Close</button>
            </div>
          ) : (
            <div className="login-form bidder-login-form">
              <h2>Bidder Login</h2>
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Capture email input
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Capture password input
              />
              <button onClick={handleLogin}>Login</button>
              <button onClick={onBidderRegister}>Register as Bidder</button>
              <button onClick={onClose}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SellerLoginPage;
