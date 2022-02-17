import React from 'react';
import '../../styles/Project.css'
// import json
import projects from '../../projects'

const projectList = projects.map(project => (
    <a className="project sub-project project-background" style={{ backgroundImage: `url(${project.image})`}} title="screenshot of project" href={project.deployed} target="_blank" rel="noreferrer" key={project.id}>
        <h3 className="project-heading">{project.title}</h3>
        <form action={project.repo} target="_blank" method="get">
        <button className="repo-heading"><i className="fab fa-github"></i></button></form>
    </a>
))

export default function Project() {
    return (
    <section className="section-container mx-2 mb-5">
        <h2 className="text-center text-white project-header my-4 p-3">Projects</h2>
        <section className="project-container">
            { projectList }
        </section>
    </section>
  );
}
