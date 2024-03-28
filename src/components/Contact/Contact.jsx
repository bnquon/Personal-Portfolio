import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Contact = () => {
  
  const isMobile = window.innerWidth <= 600;

  const [result, setResult] = useState("");

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
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact'>

      <div id="contactTitle">
        <h1>GET IN TOUCH</h1>
      </div>
      
      <form id='contactForm' onSubmit={onSubmit}>
        <input type="text" name="name" placeholder='Name' required/>
        <input type="email" name="email" placeholder='Email' required/>
        <textarea name="message" placeholder='Message' required rows={isMobile ? 3: 5}></textarea>

        <button type="submit">SUBMIT</button>

        {result ? <span>{result}</span> : null}
      </form>

      <div id="footer">
        <a href="https://github.com/bnquon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href="https://www.linkedin.com/in/brandon-quon/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
      </div>
    </div>
  );
}