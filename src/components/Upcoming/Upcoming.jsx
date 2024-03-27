import React from 'react'
import { useInView, animated } from '@react-spring/web'
import './Upcoming.css'

export const Upcoming = () => {

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    }),
    {
      threshold: 0.1,
      once: true,
    }
  );

  return (
    <div id='upcoming'>
        <div id="upcomingTitle">
            <h1>WORKS IN PROGRESS</h1>
        </div>

        <animated.div id="upcomingGrid" ref={ref} style={springs}>

          <div className="upcomingGrid-item">
            <h2>Java Maven Game</h2>
            <p>2D maze game created with Maven and JUnit testing.</p>
          </div>
          
          <div className="upcomingGrid-item">
            <h2>This Website</h2>
            <p>I will be updating this website as needed and adding new features.</p>
          </div>
          
        </animated.div>
    </div>
  )
}
