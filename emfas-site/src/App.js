import './App.css';
import Navbar from './components/nav';
import Footer from './components/footer';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Join from './pages/Join';
import Officers from './pages/Officers';
import {Route, Routes} from "react-router-dom"


function App() {
  return (
   <>
   
    
    <div className='container'>
      <Navbar />
      <Routes>
       <Route path="/Home" element={<Home />} />
       <Route path="/Donate" element={<Donate />} />
       <Route path="/Join" element={<Join /> } />
       <Route path="/Officers" element={<Officers />} />
      </Routes>
      <Footer className="footer"/>
      
    </div>
  </>
  );

 
}

export default App;

