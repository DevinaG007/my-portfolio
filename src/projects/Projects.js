import React from "react";
import projects from "../data/projects";
import "./Projects.css";


export default function Projects(){

   const projectList = projects.map((project) => (
        <li className="project-list">
            <a href={project.link}><h4>{project.name}</h4> </a>
                <img className="project-images" src={require("../images/" + project.image_url + ".png")} alt={project.name}/>
            <p className="description">Description: {project.description}</p>
            <p>Technologies: {project.technologies}</p>
        </li>
   ))
    return (
        <main>
            <section className="projects">
        <h2>Projects</h2>
        <ul>
        {projectList}
        </ul>
        </section>
        </main>
    )
};