import React, { useState, useEffect } from 'react'
import { useInView, animated } from '@react-spring/web'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown, faMoon, faSun } from '@fortawesome/free-regular-svg-icons'

export const Home = () => {

  const [atTop, setAtTop] = useState(true);

  const [curTheme, setTheme] = useState(true);

  const updateTheme = () => {
    setTheme(!curTheme);
    if (curTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else document.documentElement.setAttribute('data-theme', 'light');
  }
  
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

  const scroll = (sectionName) => {
    if (sectionName == 'top') {
      window.scrollTo(0, 0);
     } else {
       const section = document.getElementById( `${sectionName}` );
       section.scrollIntoView( { behavior: 'smooth' } );
     }

  };

  return (
    <div id="home">

      <animated.div id="navbarContainer" ref={ref} style={springs}>
        <ul>
            <li onClick={() => scroll('about')}>ABOUT</li>
            <li onClick={() => scroll('projects')}>PROJECTS</li>
            <li onClick={() => scroll('top')} id="middleNav">BRANDON</li>
            <li onClick={() => scroll('upcoming')}>UPCOMING</li>
            <li onClick={() => scroll('contact')}>CONTACT</li>
        </ul>
        
        <FontAwesomeIcon id='themePicker' icon={curTheme ? faMoon : faSun} onClick={() => updateTheme()}/>

        <div className="progressScroll"></div>
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
