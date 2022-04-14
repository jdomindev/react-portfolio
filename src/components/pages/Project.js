import React from 'react';
import '../../styles/Project.css'
// import json
import projects from '../../utils/projects'

// const projectList = projects.map(project => (
//     <a className="project sub-project project-background" style={{ backgroundImage: `url(${project.image})`}} title="screenshot of project" href={project.deployed} target="_blank" rel="noreferrer" key={project.id}>
//         <h3 className="project-heading">{project.title}</h3>
//         <form action={project.repo} target="_blank" method="get">
//         <button className="repo-heading"><i className="fab fa-github"></i></button></form>
//     </a>
// ))

// {/* <div className="card-body ">
// <div className="row project-mobile">
//     <div className="col-6">
//         <h2 className="card-title mb-5">{project.title}</h2>
//         <p>{project.description}</p>
//         <br></br>
//         <h4  className="card-title">Tech used:</h4>
        // {/* <form action={project.repo} target="_blank" method="get">
        // <button className="repo-heading"><i className="fab fa-github"></i></button></form> */}
//     </div>
//     <div className="col-6">
//         <h2 className="mb-4 text-end">
//             <a href={project.deployed} target="_blank" rel="noreferrer" className=""><i className="fa fa-external-link pe-2"></i></a>
//             <a href={project.repo} target="_blank" rel="noreferrer" className=""><i className="fab fa-github ps-2"></i></a>
//         </h2>
//         <img className="project-image" src={project.image} alt="project landing page"></img>
        
//     </div>
// </div>
// </div> */}

const projectList = projects.map(project => (
  
    <section className="project-card p-3 mb-5" key={project.id}>
            <h2 className="project-title mt-1">{project.title}</h2>
            <div className="card-links m-0 h2">
                <a href={project.deployed} target="_blank" rel="noreferrer" aria-label="deployed link"><i className="fa fa-external-link pe-2 card-link-item"></i></a>
                <a href={project.repo} target="_blank" rel="noreferrer" aria-label="repository link"><i className="fab fa-github ps-2 card-link-item"></i></a>
            </div>
            <div className="project-bio container">
                <div className="col-lg-4 col-xs-12 color-wrapper color-wrapper-margin">
                    <h4  className="card-title">Developer | Designer</h4>
                    <h6 className="my-3">{project.description}</h6>
                    <h4  className="card-title">Tech:</h4>
                    {/* project.icons -- make icons dynamic to each project */}
                    <ul className="list-unstyled list-inline m-0">
                        <li className="list-inline-item"><i className="devicon-html5-plain-wordmark px-0 icon"></i></li>
                        <li className="list-inline-item"><i className="devicon-css3-plain-wordmark px-0 icon"></i></li>
                        <li className="list-inline-item"><i className="devicon-javascript-plain icon"></i></li>
                        <li className="list-inline-item"><i className="devicon-react-original-wordmark icon px-0"></i></li>
                        <li className="list-inline-item"><i className="devicon-express-original-wordmark icon px-0"></i></li>
                        <li className="list-inline-item"><i className="devicon-nodejs-plain-wordmark icon px-0"></i></li>
                        <li className="list-inline-item"><i className="devicon-mongodb-plain-wordmark icon px-0"></i></li>
                        <li className="list-inline-item"><i className="devicon-mysql-plain-wordmark icon px-0"></i></li>
                    </ul>
                </div>
                <div className="col-xs-12 color-wrapper">
                    <img className="project-image" src={project.image} alt="project landing page"></img>
                </div>
                
            </div>
           
    </section>
))

export default function Project() {
    return (
    <section className="section-container mx-3 mb-5 mt-4">
        <h1 className="text-center text-white project-header mb-4 pb-3 px-3">Projects</h1>
        <section className="">
            { projectList }
        </section>
    </section>
  );
}