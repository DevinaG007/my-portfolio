import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1 className="headings">Devina Gillis</h1>
        <div className="nav">
          <h2 className="headings">Software Engineer</h2>
          <div className="navigation">
            <p className="navLinks">Home</p>
            <p className="navLinks">Projects</p>
            <p className="navLinks">Contact</p>
          </div>
        </div>
      </div>
    </>
  );
}
