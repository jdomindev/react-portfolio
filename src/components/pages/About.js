import React from 'react';
import '../../styles/About.css'

export default function About() {
  return (
    <section id="about">
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row mb-3 profile">
                    <div className="col-md-6 profile-img">
                        <img className="img-size" src="/images/profile-image.jpg" alt="profile of Jose Dominguez"></img>
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