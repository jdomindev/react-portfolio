import React from "react";
import '../styles/Nav.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-dark sticky-top navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#about" onClick={() => handlePageChange("About")}>
          <h2 className="m-0">Jose Dominguez</h2>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto text-decoration-none">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active m-0 h5" : "nav-link m-0 h5"
              }
            >
              About
            </a>
            <a 
              href="#project"
              onClick={() => handlePageChange("Project")}
              className={
                currentPage === "Project" ? "nav-link active m-0 h5" : "nav-link m-0 h5"
              } 
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active m-0 h5" : "nav-link m-0 h5"
              }
            >
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1XPvQN6AZCTswh5gEIgW8Gjur9PCPnZ0U/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="nav-link m-0 h5"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
