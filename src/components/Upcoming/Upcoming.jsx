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
            <h2>TITLE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed magna et ligula sagittis tristique non eu est. Cras fringilla.</p>
          </div>
          
          <div className="upcomingGrid-item">
            <h2>TITLE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed magna et ligula sagittis tristique non eu est. Cras fringilla.</p>
          </div>

          <div className="upcomingGrid-item">
            <h2>TITLE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed magna et ligula sagittis tristique non eu est. Cras fringilla.</p>
          </div>
          
        </animated.div>
    </div>
  )
}
