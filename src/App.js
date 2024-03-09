import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./home/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./service/Services'));
const ServiceDetails = lazy(() => import('./service/ServiceDetails'));
const Projects = lazy(() => import('./project/Projects'));
const ProjectDetails = lazy(() => import('./project/ProjectDetails'));
const Contact = lazy(() => import('./pages/Contact'));
const NoMAtch = lazy(() => import('./pages/404'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />

          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-details" element={<ProjectDetails />} />

          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<NoMAtch />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
