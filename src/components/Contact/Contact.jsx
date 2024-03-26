import React from 'react'
import { useInView, animated } from '@react-spring/web'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Contact = () => {
  
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

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3ccb779a-1b40-496b-aecb-0cd51f1e98d5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <animated.div id='contact' ref={ref} style={springs}>

      <div id="contactTitle">
        <h1>GET IN TOUCH</h1>
      </div>
      
      <form id='contactForm' onSubmit={onSubmit}>
          <input type="text" name="name" placeholder='Name' required/>
          <input type="email" name="email" placeholder='Email' required/>
          <textarea name="message" placeholder='Message' required></textarea>

          <button type="submit">SUBMIT</button>

      </form>
      <span>{result}</span>

      <div id="footer">
        <FontAwesomeIcon icon={faGithub}/>
        <FontAwesomeIcon icon={faLinkedin}/>
      </div>
    </animated.div>
  );
}