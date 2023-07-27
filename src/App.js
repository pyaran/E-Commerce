import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Header/>
        <div>
          <Routes>
            <Route path='/' element={<Main/>}/>
          </Routes>
        </div>
      </div>
      
      
        
    </Router>
  );
}

export default App;
