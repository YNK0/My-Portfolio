import React, { useState, useEffect }  from 'react';
import "../Estilos/navBar.css"
import Boton from "./button.js"

function NavBar () {
  const [hideMenu, setHideMenu] = useState(true);

  const updateWidth = () => {
    if (window.innerWidth > 768) {
      setHideMenu(true);
    } else {  
      setHideMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  
  return (
    <header className="header">
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className={`hamb ${hideMenu ? "hide": ""}`} htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>

      <nav className="nav">
        <ul className="menu">
          <li>
            <a href="#mainDiv">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <Boton > Contact </Boton>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;