
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import {
  Routes,
  Route,
  Switch,
  HashRouter as Router,
} from "react-router-dom";
function App() {
  return (
    
     <>
     <h3>heloooo</h3>
     <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
     </>
        
     

  );
}

export default App;
