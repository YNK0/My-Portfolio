import './App.css';
import MainDiv from './componentes/main-div';
import NavBar from './componentes/navBar';
import React, { useState, useRef, useEffect }  from 'react';
import CardSlider from './componentes/cardSlider.jsx';
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App" >
      <div className="app-header">
        <NavBar />
      </div>
      <MainDiv />
      <div className="text-about" data-aos="fade-up" data-aos-duration="1000" >
        <h1 className='about-me'>About me</h1>
          <h2 className="description">
            I love exploring new technologies and methodologies to improve my workflow 
            and create high quality products. I am a collaborative team player and always 
            willing to learn and share knowledge with others. I am always looking for new 
            challenges to keep improving my skills and grow as a Front End developer.
          </h2>  
      </div>
      <div className="skills" data-aos="fade-up" data-aos-duration="2000">
        <div className='typeWriter skills-text'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(' < Skills />')
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        <CardSlider />
      </div>
      <div className="box-1"></div>
      <div className="box-2"></div>
      <div className="box-3"></div>
      <div className="box-4"></div>
    </div>
  );
}

export default App;
