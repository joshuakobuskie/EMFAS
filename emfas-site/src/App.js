import './App.css';
import Navbar from './components/nav';
import WeatherAlert from './components/weather';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Join from './pages/Join';
import Officers from './pages/Officers';
import {Route, Routes, Navigate} from "react-router-dom"
import Footer from './components/footer';
import EditOfficer from './pages/EditOfficer';
import EditHome from './pages/EditHome';


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
          <Route exact path="/" element={<Navigate exact to="/Home"/>}/>
          <Route exact path="/Donate" element={<Donate />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Join" element={<Join /> } />
          <Route exact path="/Officers" element={<Officers />} />
          <Route exact path="/EditOfficers" element={<EditOfficer/>} />
          <Route exact path="/EditHome" element={<EditHome/>} />
        </Routes>

        <Footer className="foot"/>
        
        
      </div>  
    
    </div>
    
  
  </>
  );

 
}

export default App;

