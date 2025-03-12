import React from 'react'
import './Contact.css'
import msgicon3 from './msgicon3.png'
import mailicon from './mailicon.png'
import phoneicon from './phoneicon.png'
import locationicon from './locationicon.png'
import whitearrow from './whitearrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3266618c-4824-474f-bd21-41ce9eb630da");
  
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
    <div className='contact'>
        <div className='contact-col'>
         <h3>Send us a message<img src={msgicon3} alt=''/></h3>
         <p>Fee1 free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university commmunity.
         </p>
         <ul>
            <li><img src={mailicon} alt=''/>Contact@psgitech.dev</li>
            <li><img src={phoneicon} alt=''/>+1 123-456-789</li>
            <li><img src={locationicon} alt=''/>77 Massachusetts Ave, Cambridge<br/>MA 02139, United States</li>
         </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='enter your name' required></input>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='enter your mobile number' required></input><br></br>
                <label> Enter message here</label>
                <textarea name="message"  rows="6" placeholder='enter your message' required></textarea>
                 <button type='submit' className='btn dark-btn'>Submit Now<img src={whitearrow} alt=''/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact