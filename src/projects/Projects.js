import React from "react";
import projects from "../data/projects";
import "./Projects.css";
import deck from "../images/flash-card-deck.png"


export default function Projects(){

   const projectList = projects.map((project) => (
        <li>
            <h4>{project.name}</h4>
            <img src={require("../images/" + project.image_url + ".png")}/>
            <p>Description: {project.description}</p>
            <p>Technologies: {project.technologies}</p>
            <a src={project.link}>Live Site</a>
        </li>
   ))
    return (
        <main>
        <h2>Projects</h2>
        <ul>
        {projectList}
        </ul>
        </main>
    )
};