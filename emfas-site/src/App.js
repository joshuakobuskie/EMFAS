import './App.css';
import Navbar from './components/nav';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Join from './pages/Join';
import Officers from './pages/Officers';
import {Route, Routes} from "react-router-dom"
import Footer from './components/footer';


function App() {
  return (
   <>
    <div>
    <Navbar className="nav"/>
    </div>

    <div className="container">
      
      <div className="body">
        <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Donate" element={<Donate />} />
       <Route path="/Join" element={<Join /> } />
       <Route path="/Officers" element={<Officers />} />
      </Routes>
        
        <div className="footer">
          <Footer/>
        </div>
      </div>


   

    </div>
    
  
  </>
  );

 
}

export default App;

