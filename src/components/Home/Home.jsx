import React, { useState, useEffect } from 'react'
import { useInView, animated } from '@react-spring/web'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-regular-svg-icons'

export const Home = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li id="middleNav">BRANDON</li>
            <li>UPCOMING</li>
            <li>CONTACT</li>
        </ul>
        <hr />
      </animated.div>       

      <animated.div id="intro" ref={ref} style={springs}>
        <h1>BRANDON <br />QUON</h1><br />
        <h3>I'm Brandon, an asipiring software developer based in British Columbia.</h3>
      </animated.div>

      <div id="scrollTip" style={{opacity: atTop ? '1': '0'}}>
        <h4>Scroll Down</h4>
        <FontAwesomeIcon icon={faCircleDown} size='2xl'/>
      </div>

    </div>
  )
}
