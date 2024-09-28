import { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithFacebook } from '../firebase';

function LoginPage() {
  const [isBidderLogin, setIsBidderLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Toggle between Seller and Bidder login forms
  const toggleLogin = () => {
    setIsBidderLogin(!isBidderLogin);
  };

  // Handle Manual Login
  const handleLogin = async () => {
    setError(''); // Clear any previous error messages

    try {
      if (isBidderLogin) {
        // Implement bidder login logic if necessary
        console.log('Bidder login logic');
        // For now, redirect to bidder homepage
        navigate('/bidderhomepage');
      } else {
        // Seller login logic
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Seller logged in successfully');
        navigate('/sellerhomepage'); // Redirect to Seller Home Page
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.message); // Display error message
    }
  };

  // Navigate to Seller Registration
  const onSellerRegister = () => {
    navigate('/sellerregistration');
  };

  // Navigate to Bidder Registration
  const onBidderRegister = () => {
    navigate('/bidderregistration');
  };

  // Handle Facebook Login for Seller
  const handleFacebookLoginseller = async () => {
    try {
      await signInWithFacebook(); // Assuming this function returns a promise
      console.log('Facebook login successful for Seller');
      navigate('/sellerhomepage'); // Redirect to Seller Home Page
    } catch (error) {
      console.error('Error during Facebook login:', error);
      setError(error.message);
    }
  };

  // Handle Facebook Login for Bidder
  const handleFacebookLoginbidder = async () => {
    try {
      await signInWithFacebook(); // Assuming this function returns a promise
      console.log('Facebook login successful for Bidder');
      navigate('/bidderhomepage'); // Redirect to Bidder Home Page
    } catch (error) {
      console.error('Error during Facebook login:', error);
      setError(error.message);
    }
  };

  // Close the login page
  const onClose = () => {
    navigate(-1);
  };

  return (
    <div className="App">
      <div className="login-container">
        {/* Display Error Message */}
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
              <button onClick={handleFacebookLoginseller}>
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
              <button onClick={handleFacebookLoginbidder}>
                <i className="fab fa-facebook-f"></i> Login with Facebook
              </button>
              <button onClick={onClose}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
