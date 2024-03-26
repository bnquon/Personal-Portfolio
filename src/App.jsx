import React from 'react'
import './App.css'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Transition } from './components/Transition/Transition'
import { Upcoming } from './components/Upcoming/Upcoming'
import { Contact } from './components/Contact/Contact'

function App() {

  // const trailer = document.getElementById('trailer');

  // window.onmousemove = e => {
  //   const x = e.clientX - trailer.offsetWidth / 2,
  //   y = e.clientY - trailer.offsetHeight / 2;
    
  //   const keyframes = {
  //     transform: `translate(${x}px, ${y}px)`
  //   }

  //   trailer.animate(keyframes, {
  //     duration: 800,
  //     fill: 'forwards'
  //   })
  // }

  return (
    <>
      {/* <div id="trailer"></div> */}
      <Home/>
      <About/>
      <Projects/>
      <Transition/>
      <Upcoming/>
      <Contact/>
    </>
  )
}

export default App
