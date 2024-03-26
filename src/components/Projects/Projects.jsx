import React, { useEffect } from 'react';
import { useParallax } from "react-scroll-parallax";
import cineverse from '../../assets/images/CineVerseHome.png'
import fitfolio from '../../assets/images/FitFolioPic2.png'
import asteroid from '../../assets/images/AsteroidDodger.png'
import wordwizardry from '../../assets/images/WordWizardry.png'
import Tilt from 'react-parallax-tilt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
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
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={12.5} scale={1.08}>
                  <div className="grid-item">
                    <h1>CineVerse</h1>
                    <div className="projectImage interactable">
                      <div className="linkIndicator">
                        <FontAwesomeIcon icon={faArrowUp} style={{color: "#ffffff",}} id='rotated' />
                      </div>

                      <img src={cineverse} alt=""/>
                    </div>
                    <h3>Full-stack movie review web-app</h3>
                    <h4>React.js • PostgreSQL • HTML • CSS</h4>
                  </div>
                </Tilt>

                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={12.5} scale={1.08}>
                  <div className="grid-item">
                    <h1>Asteroid Dodger (SystemsHacks)</h1>
                    <div className="projectImage interactable">
                      <div className="linkIndicator">
                        <FontAwesomeIcon icon={faArrowUp} style={{color: "#ffffff",}} id='rotated' />
                      </div>

                      <img src={asteroid} alt=""/>
                    </div>
                    <h3>2.5D web game with physics engine</h3>
                    <h4>React.js • Three.js • HTML • Tailwind</h4>
                  </div>
                </Tilt>
            </div>

            <div id="rightGrid" ref={rightParallax.ref}>
                
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={12.5} scale={1.08}>
                  <div className="grid-item">
                    <h1>FitFolio</h1>
                    <div className="projectImage interactable">
                      <div className="linkIndicator">
                        <FontAwesomeIcon icon={faArrowUp} style={{color: "#ffffff",}} id='rotated' />
                      </div>
                      <img src={fitfolio} alt=""/>
                    </div>
                    <h3>Full-stack running & weightlifting tracker web-app</h3>
                    <h4>JavaScript • MySQL • HTML • CSS</h4>
                  </div>
                </Tilt>
                
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={12.5} scale={1.08}>
                  <div className="grid-item">
                    <h1>Word Wizardry</h1>
                    <div className="projectImage interactable">
                      <div className="linkIndicator">
                        <FontAwesomeIcon icon={faArrowUp} style={{color: "#ffffff",}} id='rotated' />
                      </div>
                      <img src={wordwizardry} alt=""/>
                    </div>
                    <h3>Python Tkinter typing speed test</h3>
                    <h4>Python</h4>
                  </div>
                </Tilt>

            </div>

        </div>

    </div>
  )
}
