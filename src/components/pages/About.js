import React from 'react';
import profile from '../../images/profile-image.jpg'
import '../../styles/About.css'
import {icons} from '../../utils/projects'



export default function About() {
  return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row my-5 mx-3 align-items-center">
                    <div className="col-md-5 profile-img text-center">
                        <img className="img-size" src={profile} alt="profile of Jose Dominguez"></img>
                    </div>
                    <div className="about-me-card col-md-6">
                        <div className="card-body">
                            <h1 className="card-title mb-4">About Me</h1>
                            <p className="card-text">Full-stack web developer whose aim is to build enjoyable user experiences that help people get the information they need with ease. My focus is being an energetic problem-solver and hard working team member to build high quality functional apps. 
                                <br></br>
                                <br></br>
                                With my newly expanded skill set from a UPENN coding bootcamp, I’m ready to dive into the world of web development and continue my coding journey. My skills include knowledge in HTML, CSS, JavaScript, as well as, experience building full stack MERN apps, working with RESTful APIs and mySQL.
                                <br></br>
                                <br></br>
                                My interests include playing guitar, skateboarding, and playing video games in my free time. I also enjoy being outdoors and going "herping" at my local and state parks when I have the chance.</p>
                        </div>
                    </div>
                </div>
                <div className="row my-5 mx-3 align-items-center">
                    <div className="about-me-card col-md-12 ">
                        <div className="card-body">
                            <h1 className="card-title">Skills</h1>
                            <div className="text-center"> 
                                <ul className="list-unstyled list-inline icon-list mt-5">
                                    {icons.map(icon => ( <li className="list-inline-item" key={icon.id}><i id="icon-styles-about" className={icon.icon}></i></li>))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}