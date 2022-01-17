import React from 'react'
import "../styles/Contact.css"
import contactImage from "../assets/fooda.jpg"

function Contact() {
    return (
        <div className='contact'>

            <div className='leftSide' style={{backgroundImage:`url(${contactImage})`}}>
                
            </div>

            <div className='rightSide'>
                <h1>Contact Us</h1>
                <form id='contact-form' method='POST'>
                    <label htmlFor="name" >Full Name</label>
                    <input name='name' type="text" placeholder='Enter your full name'></input>
                    <label htmlFor="email" >Email address</label>
                    <input name='email' type="email" placeholder='Enter your email adress'></input>
                    <label htmlFor="message" >Message</label>
                    <textarea name='message' placeholder='Enter your message' rows="7"></textarea>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Contact
