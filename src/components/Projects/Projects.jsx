import React from 'react';
import { useParallax } from "react-scroll-parallax";
import cineverse from '../../assets/images/CineVerseHome.png'
import fitfolio from '../../assets/images/FitFolioPic2.png'
import asteroid from '../../assets/images/AsteroidDodger.png'
import wordwizardry from '../../assets/images/WordWizardry.png'
import Tilt from 'react-parallax-tilt';
import './Projects.css';

export const Projects = () => {

    const parallax = useParallax({
        translateY: [0, 7.5],
    });

    const rightParallax = useParallax({
        translateY: [10, -2.5],
    });

  return (
    <div id='projects'>
        <div id="projectsTitle">
            <h1>PROJECTS</h1>
        </div>

        <div id="gridContainer">

            <div id="leftGrid" ref={parallax.ref}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={12.5}>
                  <div className="grid-item">
                    <h1>CineVerse</h1>
                    <img src={cineverse} alt="" height='395' width='650'/>
                    <h3>Full-stack movie review web-app</h3>
                    <h4>React.js • PostgreSQL • HTML • CSS</h4>
                  </div>
                </Tilt>

                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={12.5}>
                  <div className="grid-item">
                    <h1>Asteroid Dodger (SystemsHacks)</h1>
                    <img src={asteroid} alt="" height='395' width='650'/>
                    <h3>2.5D web game with physics engine</h3>
                    <h4>React.js • three.js • HTML • Tailwind</h4>
                  </div>
                </Tilt>
            </div>

            <div id="rightGrid" ref={rightParallax.ref}>
                
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={12.5}>
                  <div className="grid-item">
                    <h1>FitFolio</h1>
                    <img src={fitfolio} alt="" height='395' width='650'/>
                    <h3>Full-stack running & weightlifting tracker web-app</h3>
                    <h4>JavaScript • MySQL • HTML • CSS</h4>
                  </div>
                </Tilt>
                
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={12.5}>
                  <div className="grid-item">
                    <h1>Word Wizardy</h1>
                    <img src={wordwizardry} alt="" height='395' width='650'/>
                    <h3>Python Tkinter typing speed test</h3>
                    <h4>Python</h4>
                  </div>
                </Tilt>

            </div>

        </div>

    </div>
  )
}
