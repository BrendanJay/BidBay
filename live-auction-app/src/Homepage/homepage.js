import './homepage.css';
import { useNavigate } from 'react-router-dom'; 
function App() {
  const navigate = useNavigate();
  const handleLogin =() => {
    navigate('/login');
  };
  
  return (
    <div className="App">
        <nav>
          <ul>
          <li><a href="/" data-tooltip="Home">Home</a></li>
          <li><a href="/about" data-tooltip="About">About Us</a></li>
           <li><a href="/contact" data-tooltip="Contact">Contact</a></li>
          <li><a href="/store">Store List</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>


        <h1>Welcome User</h1>
        <button className="choose-role-btn" onClick={handleLogin}>Continue to LogIn</button>
    
    </div>
  );
}

export default App;
