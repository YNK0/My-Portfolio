import "../Estilos/mainDiv.css";
import mainImg from "../images/main-img.png";
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
        <h2 className="main-description">
          I'm a Front End Jr. developer currently studying Systems Engineering, passionate about creating interactive
          and engaging experiences for users. My main focus is working with
          modern web technologies and design trends to build innovative digital
          solutions.
        </h2>
        <Button>Contact Me </Button>
      </div>
      <div className="div2">
        <img src={mainImg} className="main-img"></img>
      </div>
    </div>
  );
}

export default MainDiv;
