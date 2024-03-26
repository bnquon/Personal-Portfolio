import React from 'react';
import { useParallax } from "react-scroll-parallax";
import './Transition.css';

export const Transition = () => {

  const topParallax = useParallax({
    translateX: [0, -15],
  });

  const botParallax = useParallax({
    translateX: [-50, -40],
  });
  
  return (
    <div id='transition'>
      <div id='transitionContainer'>
        <div id="top" ref={topParallax.ref}>
          <h1>BRANDON QUON BRANDON QUON BRANDON QUON BRANDON QUON</h1>
        </div>
        <div id="bottom" ref={botParallax.ref}>
          <h1>BRANDON QUON BRANDON QUON BRANDON QUON BRANDON QUON</h1>
        </div>
      </div>
    </div>
  );
};
