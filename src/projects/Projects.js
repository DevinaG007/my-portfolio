import React from "react";
import projects from "../data/projects";

export default function Projects(){

   const projectList = projects.map((project) => (
        <li>
            <h4>{project.name}</h4>
            <p>Description: {project.description}</p>
            <p>technologies</p>
            <a href={project.link}>Link</a>
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