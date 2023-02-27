import "../Estilos/mainDiv.css";
import logo from "../images/main-photo.png";
import Typewriter from "typewriter-effect";
import Button from "./button";

function MainDiv() {
  return (
    <div className="mainDiv" id="mainDiv">
      <div className="div1">
        <div className="subDiv">
          <h1 className="typeWriter">
            <Typewriter 
              options={{
                strings: ["Hi", "I'm Francisco Magaña"],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                pauseFor: 200,
              }}
            />
          </h1>
          <h2 className="front-end-text">Jr Front End</h2>
        </div>

        <h2 className="description">
          I try to stand out with my knowledge and skills in HTML, CSS and
          JavaScript and my ability to quickly learn new technologies and tools.
        </h2>
        <Button>Contact Me </Button>
      </div>
      <div className="div2">
        <img src={logo} className="main-img"></img>
      </div>
    </div>
  );
}

export default MainDiv;
