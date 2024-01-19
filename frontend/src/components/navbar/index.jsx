import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const [position, setPosition]=useState("static")
  window.addEventListener("scroll",()=>{
    window.scrollY>=70?setPosition("fixed"):setPosition("statoc")
  })
  return (
    <header style={{position:position}}>
      <div className="container">
        <div className="logo">
          <p>Tasty</p>
        </div>
        <ul>
          <Link to="/">    <li>Home</li></Link>
          <Link to="/add">    <li>Add</li></Link>
          <Link to="/basket">    <li>Basket</li></Link>
          <Link to="/wishlist">    <li>Wishlist</li></Link>
       
          <li>Menu</li>
          <li>Specialist</li>
          <li>Reservation</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div
          className="mobile-menu-bar"
          onClick={() => {
            setDisplay(!display);
          }}
        >
          <MenuIcon style={{ color: "#8f9193" }} />
          <p>Menu</p>
        </div>
      </div>
      <div
        className="mobile-nav"
        style={{ display: display ? "block" : "none" }}
      >
        <ul>
        <Link to="/">    <li>Home</li></Link>
          <Link to="/add">    <li>Add</li></Link>
          <Link to="/basket">    <li>Basket</li></Link>
          <Link to="/wishlist">    <li>Wishlist</li></Link>
       
          <li>Menu</li>
          <li>Specialist</li>
          <li>Reservation</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
