import React from 'react'
import { useInView } from 'react-intersection-observer'
import './Upcoming.css'

export const Upcoming = () => {

  const [upcomingInView, inView] = useInView({
    threshold: 0.2,
  })

  return (
    <div id='upcoming'>
        <div id="upcomingTitle">
            <h1>FUTURE PROJECTS</h1>
        </div>

        <div id="upcomingGrid" ref={upcomingInView}>

          <div className="upcomingGrid-item" style={{transform: inView ? 'translateX(0)': 'translateX(-50%)', opacity: inView ? '1': '0'}}>
            <h2>Java Maven Game</h2>
            <p>2D maze game created with Maven and JUnit testing.</p>
          </div>
          
          <div className="upcomingGrid-item" style={{transform: inView ? 'translateX(0)': 'translateX(50%)', opacity: inView ? '1': '0'}}>
            <h2>This Website</h2>
            <p>I will be updating this website as needed and adding new features.</p>
          </div>
          
        </div>
    </div>
  )
}
