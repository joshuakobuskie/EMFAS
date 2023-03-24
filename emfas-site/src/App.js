import './App.css';
import Navbar from './components/nav';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Join from './components/accordion';
import Officers from './pages/Officers';
import {Route, Routes} from "react-router-dom"


function App() {
  return (
   <>
    <div>
    <Navbar className="nav"/>
    </div>
    <div className='container'>
      
      <Routes>
       <Route exact path="/njitdev" element={<Home />}/>
       <Route path="/Donate" element={<Donate />} />
       <Route path="/Join" element={<Join />} />
       <Route path="/Officers" element={<Officers />} />
      </Routes>
    </div>
  </>
  );

 
}

export default App;

