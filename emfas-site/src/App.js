import './App.css';
import Navbar from './components/nav';
import WeatherAlert from './components/weather';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Join from './pages/Join';
import Officers from './pages/Officers';
import {Route, Routes} from "react-router-dom"
import Footer from './components/footer';
import Edit_Officer from './pages/edit_officer';


function App() {
  return (
   <>
    <div>
      <Navbar className="nav"/>
      <WeatherAlert/>
    </div>

    <div className="container">
      
      <div className="body">
    
        <Routes>
          <Route path="/njitDev" element={<Home />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Join" element={<Join /> } />
          <Route path="/Officers" element={<Officers />} />
          <Route path="/njitDev/edit" element={<Edit_Officer/>} />
        </Routes>

        <Footer className="foot"/>
        
        
      </div>  
    
    </div>
    
  
  </>
  );

 
}

export default App;

