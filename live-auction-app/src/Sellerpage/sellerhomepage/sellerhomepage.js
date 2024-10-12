import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sellerhomepage.css'; // Import CSS for styling

function SellerHomePage() {
  const navigate = useNavigate();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleAddNewItem = () => {
    navigate('/addnewitem');
  };

  const handleViewItems = () => {
    navigate('/viewitems');
  };

  const handleViewSales = () => {
    navigate('/salesanalytics');
  };

  const handleLogout = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
       
      

    <div className="App">


      
     <div className="seller-homepage">
     <div className="profile-container">
      <div className="profile-image"></div>
    
    </div>
      
      <div className={`nav-toggle ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`side-nav ${isNavOpen ? 'open' : ''}`}>
        <button className="dashboard-button">Add new Item</button>
        <button className="dashboard-button">View My Items</button>
        <button className="dashboard-button">View Sales Analytics</button>
        <button className="dashboard-button logout">Logout</button>
      </nav>
   
      



    </div>
    </div>

   


  );
}

export default SellerHomePage;
