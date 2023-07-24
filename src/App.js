import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Header/>
        
    </Router>
  );
}

export default App;
