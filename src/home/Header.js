import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const history = useHistory();

  function handleClick(event){
    event.preventDefault();
    history.push("/")
  }
  return (
    <>
      <div className="header">
        <h1 className="headings" onClick={handleClick}>Devina Gillis</h1>
        {/* <div className="nav"> */}
          {/* <h2 className="headings">Software Engineer</h2> */}
          <div className="navigation">
            <NavLink to ="/about" className="navLinks">About Me</NavLink>
            <NavLink to="/projects" className="navLinks">Projects</NavLink>
            <NavLink to="/contact" className="navLinks">Contact</NavLink>
          </div>
        {/* </div> */}
      </div>
    </>
  );
}
