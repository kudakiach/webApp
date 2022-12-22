import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import {
  Routes,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      </Router>

  );
}

export default App;
