import React, { useState, useEffect } from 'react'
import './Curtain.css'

export const Curtain = () => {
    
    const [curtainLoaded, setLoaded] = useState(false);
    const isMobile = window.innerWidth <= 650;

    const changeLoad = () => {
        setLoaded(true);
    }
    useEffect(() => {
        setInterval(changeLoad, 350);
    }, [])

    return (
        <>
          {isMobile ? 
            <div id='curtain'>
                <div className="emptyCurtain" style={{transform: curtainLoaded ? 'translateY(-100%)': 'translateY(0)', transition: `${Math.random()*750 + 250}ms`}}></div>
                <div className="emptyCurtain" style={{transform: curtainLoaded ? 'translateY(-100%)': 'translateY(0)', transition: `${Math.random()*1000 + 500}ms`}}></div>
                <div className="emptyCurtain" style={{transform: curtainLoaded ? 'translateY(-100%)': 'translateY(0)', transition: `${Math.random()*1000 + 250}ms`}}></div>
            </div>
          : 
            <div id='curtain'>
                <div className="emptyCurtain" style={{transform: curtainLoaded ? 'translateY(-100%)': 'translateY(0)', transition: `${Math.random()*750 + 250}ms`}}></div>
                <div className="emptyCurtain" style={{transform: curtainLoaded ? 'translateY(-100%)': 'translateY(0)', transition: `${Math.random()*1000 + 500}ms`}}></div>
                <div className="emptyCurtain" style={{transform: curtainLoaded ? 'translateY(-100%)': 'translateY(0)', transition: `${Math.random()*1000 + 250}ms`}}></div>
                <div className="emptyCurtain" style={{transform: curtainLoaded ? 'translateY(-100%)': 'translateY(0)', transition: `${Math.random()*500 + 250}ms`}}></div>
                <div className="emptyCurtain" style={{transform: curtainLoaded ? 'translateY(-100%)': 'translateY(0)', transition: `${Math.random()*1000 + 250}ms`}}></div>
                <div className="emptyCurtain" style={{transform: curtainLoaded ? 'translateY(-100%)': 'translateY(0)', transition: `${Math.random()*1000 + 500}ms`}}></div>
                <div className="emptyCurtain" style={{transform: curtainLoaded ? 'translateY(-100%)': 'translateY(0)', transition: `${Math.random()*750 + 250}ms`}}></div>
            </div>
          }
        
        </>
  )
}