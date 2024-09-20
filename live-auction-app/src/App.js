import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Live_Management from './src/Live_Management';  
import './App.css';

function App() {
  return (
   <Router>
      <Routes>
        <Route path='/live_management' element={<Live_Management/>}/>
      </Routes>
    </Router>
  );
}

export default App;
