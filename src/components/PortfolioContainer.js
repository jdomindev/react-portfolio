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
      <Router>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          <Routes>
        
            <Route exact path="/react-portfolio" element={<About />}></Route>
            <Route exact path="/projects" element={<Project />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
      <Footer/>
      </Router>
    </div>
  );
}
