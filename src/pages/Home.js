import React from 'react'
import home from "../assets/Home.jpg";
import {Link} from "react-router-dom"
import "../styles/Home.css"

function Home() {
    return (
        <div className="home" style={{backgroundImage:`url(${home})`}}>
        
        <div className="headerContainer">
            <h1>Food Corner</h1>
            <p>ALGERIAN FOOD AT CLICK</p>
            <Link to="/menu">
                <button>Order Now</button>
            </Link>
            
        </div>
            
        </div>
    )
}

export default Home
