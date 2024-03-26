import React from 'react'
import { useInView, animated } from '@react-spring/web'
import './Home.css'

export const Home = () => {

  const [ref, springs] = useInView(
    () => ({
      from: {
        y: -50,
        opacity: 0,
      },
      to: {
        y: 0,
        opacity: 1,
      },
    }),
    {
      threshold: 0,
      once: true,
    }
  );

  return (
    <div id="home">

        <animated.div id="navbarContainer" ref={ref} style={springs}>
            <div className="progressScroll"></div>
            <ul>
                <li>HOME</li>
                <li>PROJECTS</li>
                <li id="middleNav">BRANDON</li>
                <li>UPCOMING</li>
                <li>CONTACT</li>
            </ul>
            <hr />
        </animated.div>       

        <animated.div id="intro" ref={ref} style={springs}>
            <h1>BRANDON <br />QUON</h1><br />
            <h3>I'm Brandon, a computer science student based in British Columbia.</h3>
        </animated.div>

    </div>
  )
}
