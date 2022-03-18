import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavTabs from './NavTabs';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // const renderPage = () => {
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Project') {
  //     return <Project />;
  //   }
  //   return <Contact />;
  // };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Router basename='/react-portfolio'>
      <div id="page-container">
        <div id="content-wrap">
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        
            <Route exact path="/"><About /></Route>
            <Route exact path="/projects"><Project /></Route>
            <Route exact path="/contact"><Contact /></Route>
        </div>
        <Footer/>
      </div>
      </Router>
    </div>
  );
}
