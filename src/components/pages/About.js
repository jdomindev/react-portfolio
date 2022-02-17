import React from 'react';
import profile from '../../images/profile-image.jpg'
import '../../styles/About.css'

export default function About() {
  return (
    <section id="about">
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row my-5 mx-3 align-items-center profile">
                    <div className="col-md-5 profile-img text-center">
                        <img className="img-size" src={profile} alt="profile of Jose Dominguez"></img>
                    </div>
                    <div className="about-me-card col-md-6">
                        <div className="card-body">
                            <h2 className="card-title mb-4">About Me</h2>
                            <p className="card-text">Hey, I'm Jose Dominguez, an ecology degree graduate from the University of Delaware. I recently switched lanes and I'm pursuing being a full stack developer after I finish a coding bootcamp with UPenn.
                                <br></br>
                                <br></br>
                                My interests include playing guitar, skateboarding, and playing video games in my free time. I also enjoy being outdoors and going "herping" at my local and state parks when I have the chance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}