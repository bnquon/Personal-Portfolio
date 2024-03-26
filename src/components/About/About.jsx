import React from 'react'
import './About.css'
import pfp from '../../assets/images/icon.jpg'

export const About = () => {
  return (
    <div id='about'>

        <div id="aboutTitle">
            <h1>ABOUT</h1>
        </div>

        <div id="aboutContainer">

            <div id="pfp">
                <img src={pfp} alt="" />
            </div>

            <div id="bio">
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ac tortor placerat interdum eget 
                    a libero. Quisque sed porta elit. Nam et vestibulum nisl. Vestibulum rhoncus nulla non venenatis cursus. 
                    Donec vitae massa nec nulla efficitur viverra a non augue. In accumsan libero tortor, at sodales ante 
                    sollicitudin nec. Vestibulum bibendum semper ex eu rutrum. Mauris ac velit efficitur, iaculis metus id, 
                    pulvinar ante. Aliquam ac ligula tortor. Curabitur augue turpis, commodo nec nibh nec, volutpat commodo dolor. 
                    Vivamus accumsan eget urna et bibendum. Nunc imperdiet a massa vel venenatis. Curabitur quis consequat diam, 
                    eu volutpat diam. Suspendisse in nibh quam.
                </span>
            </div>

        </div>
    </div>
  )
}
