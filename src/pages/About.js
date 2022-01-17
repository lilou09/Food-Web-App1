import React from 'react'
import AboutImage from "../assets/masala.jpg"
import "../styles/About.css"


function About() {
    return (
        <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${AboutImage})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut efficitur neque, at vehicula mi. Proin ac velit eget mauris semper gravida. Donec pellentesque rutrum odio, ut euismod ex faucibus at. Vivamus et urna eleifend libero suscipit rhoncus id nec magna. Integer nec eros ac urna fringilla semper eu at lacus. Ut vel fermentum justo, non volutpat felis. Vivamus eget magna ut quam euismod consequat in malesuada enim. Integer laoreet tincidunt libero eget volutpat. Maecenas fermentum purus at mollis dictum. Suspendisse malesuada elit tristique nunc euismod porta. Vestibulum sem nulla, facilisis scelerisque odio id, aliquam pretium nisi. </p>
        </div>
            
        </div>
    )
}

export default About
