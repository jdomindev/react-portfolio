import React from "react";
import { Link } from "react-router-dom";
// 

import '../styles/Nav.css'

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-dark sticky-top navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={() => handlePageChange("About")}>
          <h2 className="m-0">José Dominguez</h2>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto text-decoration-none">
            <Link
              to="/"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link nav-link-adjust active m-0 h5" : "nav-link nav-link-adjust m-0 h5"
              }
            >
              About
            </Link>
            <Link 
              to="/projects"
              onClick={() => handlePageChange("Project")}
              className={
                currentPage === "Project" ? "nav-link nav-link-adjust active m-0 h5" : "nav-link nav-link-adjust m-0 h5"
              } 
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link nav-link-adjust active m-0 h5" : "nav-link nav-link-adjust m-0 h5"
              }
            >
              Contact
            </Link>
            {/* <div className="dropdown">
              <a className="nav-link resume-btn dropdown-toggle" href="https://drive.google.com/file/d/1XPvQN6AZCTswh5gEIgW8Gjur9PCPnZ0U/view?usp=sharing" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Resumé
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><hr className="dropdown-divider"></hr></li>
                <li>
                  <a
                  href="https://drive.google.com/file/d/1XPvQN6AZCTswh5gEIgW8Gjur9PCPnZ0U/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                  >
                  Resumé
                  </a>
                </li>
               
                <li>
                    <a
                    href="https://drive.google.com/file/d/1URkiU2vqHl6UBqxUWpSQpxsIAiFqyd6W/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link">
                    Resumé (ATF)
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="btn-group">
              <a className="resume-btn nav-link" href="https://drive.google.com/file/d/1XPvQN6AZCTswh5gEIgW8Gjur9PCPnZ0U/view?usp=sharing" target="_blank"
                    rel="noreferrer">Resumé</a>
              <button type="button" className="btn resume-btn nav-link dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="resume-btn ats-resume nav-link" href="https://drive.google.com/file/d/1URkiU2vqHl6UBqxUWpSQpxsIAiFqyd6W/view?usp=sharing" target="_blank"
                    rel="noreferrer">Resumé (ATS)</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}