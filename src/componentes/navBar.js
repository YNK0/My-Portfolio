import React, { useState, useRef, useEffect }  from 'react';
import "../Estilos/navBar.css"

function NavBar () {
  //crear una funcion que actualice un estado cuando se cambie el tamaño de la pantalla 
  // y que ese estado se use para mostrar o no el menu
  
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
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>{" "}
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;