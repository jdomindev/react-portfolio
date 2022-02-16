import React from 'react';

export default function Project() {
  return (
    <section className="section-container">
            <div className="header-container" id="projects">
              <h2>Projects</h2>
            </div>
            <section className="project-container">
                <a className="project project-background project-background-img-1 main-project" title="screenshot of project" href="https://jdomindev.github.io/game-getter/" target="_blank" rel="noreferrer">
                    <h3 className="project-heading">Game Getter</h3>
                    <form action="https://github.com/jdomindev/game-getter" target="_blank" method="get"><button className="repo-heading"><i className="fab fa-github"></i></button></form>
                </a>
                <div className="sub-projects">
                    <a className="project project-background project-background-img-2 sub-project" title="screenshot of project" href="https://jdomindev.github.io/work-day-planner/" target="_blank" rel="noreferrer">
                        <h3 className="project-heading">Work Day Planner</h3>
                        <form action="https://github.com/jdomindev/work-day-planner" target="_blank" method="get"><button className="repo-heading"><i className="fab fa-github"></i></button></form>
                    </a>
                    <a className="project project-background project-background-img-3 sub-project" title="screenshot of project" href="https://jdomindev.github.io/password-generator/" target="_blank" rel="noreferrer">
                        <h3 className="project-heading">Password Generator</h3>
                        <form action="https://github.com/jdomindev/password-generator" target="_blank" method="get"><button className="repo-heading"><i className="fab fa-github"></i></button></form>
                    </a>
                    <a className="project project-background project-background-img-4 sub-project" title="screenshot of project" href="https://jdomindev.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
                        <h3 className="project-heading">Weather Dashboard</h3>
                        <form action="https://github.com/jdomindev/weather-dashboard" target="_blank" method="get"><button className="repo-heading repo-button"><i className="fab fa-github"></i></button></form>
                    </a>
                </div>
            </section>
        </section>
  );
}
