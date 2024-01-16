import React from "react";
import "./Introduction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";


export default function Introduction() {
  return (
    <main className="intro">
    <div className="desc">
      <h1>Devina Gillis</h1>
      <h2>Full-Stack Software Engineer</h2>
      <div>
        <a href="https://www.linkedin.com/in/devina-gillis/">
      <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x"/>
      </a>
      <a href="https://www.github.com/DevinaG007/">
      <FontAwesomeIcon className="icon" icon={faGithubSquare} size="2x" />
      </a>
      </div>
    </div>
    </main>
  );
}
