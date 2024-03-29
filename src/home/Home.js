import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import HeroSlider from '../components/HeroSlider';
import VideoCta from '../components/VideoCta';
import ProjectSliderTwo from '../components/ProjectSliderTwo';
import ServiceTab from '../components/ServiceTab';
import TestimonialSlider from '../components/TestimonialSlider';
import TeamJob from '../components/TeamJob';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

class Home extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* Hero slider */}
        <HeroSlider />

        {/* Video CTA */}
        <VideoCta />

        {/* Project Slider */}
        <ProjectSliderTwo />

        {/* Service Tab */}
        <ServiceTab />

        {/* Testimonial Slider */}
        <TestimonialSlider />

        {/* Team job */}
        <TeamJob />

        {/* Brand logo */}
        <BrandLogoSlider background="grey-bg" />

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Home;
