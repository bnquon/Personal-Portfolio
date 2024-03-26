import React from 'react'
import './App.css'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Transition } from './components/Transition/Transition'
import { Upcoming } from './components/Upcoming/Upcoming'
import { Contact } from './components/Contact/Contact'

function App() {

  return (
    <>
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
