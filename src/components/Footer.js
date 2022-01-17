import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <LinkedInIcon />
                <p>&copy; 2022 AlgeriaFood.com</p>

            </div>
        </div>
    )
}

export default Footer
