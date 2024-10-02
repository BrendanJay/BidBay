import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Live_Management from './Live_Management/Live_Admin';  
import Bidding_Management from './Bidding_Management/bidding';
import './App.css';

function App() {
  return (
   <Router>
      <Routes>
        <Route path='/live_management' element={<Live_Management/>}/>
        <Route path='/bidding_management' element={<Bidding_Management/>}/>
      </Routes>
    </Router>
  );
}

export default App;
