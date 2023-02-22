import './App.css';
import MainDiv from './componentes/main-div';
import NavBar from './componentes/navBar';
import { useState}  from 'react';


function App() {
  return (
    <div className="App">
      <div className="app-header">
        <NavBar/>
      </div>
      <MainDiv/>
      <div className="box-1"></div>
      <div className="box-2"></div>
      <div className="box-3"></div>
      <div className="box-4"></div>
    </div>
  );
}

export default App;
