import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav';
import Home from './home';
import {BrowserRouter, Route, Routes} from  'react-router-dom';

function App() {
  return (
    <>
    
      <Navbar className="nav"/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={ <Home/> } />

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