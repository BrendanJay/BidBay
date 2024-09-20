import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './Homepage/homepage';
import LiveManagement from './AdminComponents/LiveManagement/LiveAdmin';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route path='*' element={<MainAdminContent/>}/>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

const MainAdminContent = () => {
  return (
    <div className="App">
      <div className="admin-content">
        <Routes>
          <Route path="/livemanagement" element={<LiveManagement />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
