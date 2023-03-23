import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav';
import Accordion from './components/accordion';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Join from './components/accordion';
import Officers from './pages/Officers';
import {Route, Routes} from "react-router-dom"


function App() {
  return (
   <>
    <div>
    <Navbar/>
    </div>
    <div className='container'>
      
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Donate" element={<Donate />} />
       <Route path="/Join" element={<Join />} />
       <Route path="/join" element={<Accordion title="Join"><Join /></Accordion>} />

       <Route path="/Officers" element={<Officers />} />
      </Routes>
    </div>
  </>

    

  );

 
}

export default App;

/*

<div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

*/