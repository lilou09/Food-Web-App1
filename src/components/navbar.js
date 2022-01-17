import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/logo.png"
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const[showLinks,setShowLinks]=React.useState(false);
  
  function Click(){
    setShowLinks(!showLinks)
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={showLinks? "open":"close"}>
        <img src= {Logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">About</Link>
          <Link to="/Menu">Menu</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Menu">Menu</Link>
        <button onClick={Click}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
