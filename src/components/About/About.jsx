import React from 'react'
import './About.css'
import pfp from '../../assets/images/icon.jpg'

export const About = () => {
  return (
    <div id='about'>

        <div id="aboutContainer">

            <div id="pfp">
                <img src={pfp} alt="" />
            </div>

            <div id="bio">
                <h1>ABOUT ME</h1>
                <span>
                    Hello there! I'm Brandon Quon, a second-year student at Simon Fraser University studying computer science. 
                    I'm on an exciting journey fueled by my passion for lifelong learning and my insatiable curiosity about all things related to 
                    technology. As I continue to learn and grow, I look forward to sharing more exciting projects and improvements on this site.
                </span>
            </div>

        </div>
    </div>
  )
}
