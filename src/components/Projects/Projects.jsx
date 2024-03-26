import React from 'react';
import { useParallax } from "react-scroll-parallax";
import './Projects.css';

export const Projects = () => {

    const parallax = useParallax({
        translateY: [0, 7.5],
    });

    const rightParallax = useParallax({
        translateY: [10, -5],
    });

  return (
    <div id='projects'>
        <div id="projectsTitle">
            <h1>PROJECTS</h1>
        </div>

        <div id="gridContainer">

            <div id="leftGrid" ref={parallax.ref}>

                <div className="grid-item">
                    <h1>CineVerse</h1>
                    <img src="https://placehold.co/600x400" alt="" />
                    <h3>Full-stack movie review web-app</h3>
                    <h4>React.js • PostgreSQL • HTML • CSS</h4>
                </div>

                <div className="grid-item">
                    <h1>Asteroid Dodger (SystemsHacks)</h1>
                    <img src="https://placehold.co/600x400" alt="" />
                    <h3>2.5D web game with physics engine</h3>
                    <h4>React.js • three.js • HTML • Tailwind</h4>
                </div>

            </div>

            <div id="rightGrid" ref={rightParallax.ref}>

                <div className="grid-item">
                    <h1>FitFolio</h1>
                    <img src="https://placehold.co/600x400" alt="" />
                    <h3>Full-stack running & weightlifting tracker web-app</h3>
                    <h4>JavaScript • MySQL • HTML • CSS</h4>
                </div>

                <div className="grid-item">
                    <h1>Word Wizardy</h1>
                    <img src="https://placehold.co/600x400" alt="" />
                    <h3>Python Tkinter typing speed test</h3>
                    <h4>Python</h4>
                </div>

            </div>

        </div>

    </div>
  )
}
