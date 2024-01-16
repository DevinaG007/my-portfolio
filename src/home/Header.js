import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";



export default function Header() {
  const history = useHistory();

  function handleClick(event){
    event.preventDefault();
    history.push("/")
  }
  return (
    <>
      <div className="header">
      <FontAwesomeIcon className="headings" onClick={handleClick} icon={faHouse} size="2xl" />
        {/* <h1 className="headings" onClick={handleClick}>Devina Gillis</h1> */}
          <div className="navigation">
            <NavLink to ="/about" className="navLinks">About Me</NavLink>
            <NavLink to="/projects" className="navLinks">Projects</NavLink>
            <NavLink to="/contact" className="navLinks">Contact</NavLink>
          </div>
      </div>
    </>
  );
}
