import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import FeatureIcon from '../components/FeatureIcon';
import Funfact from '../components/Funfact';
import TeamMemberGrid from '../components/TeamMemberGrid';
import TestimonialSlider from '../components/TestimonialSlider';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import ModalVideo from 'react-modal-video';
class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div
          className="breadcrumb-area breadcrumb-bg"
          style={{
            backgroundImage: `url(assets/img/backgrounds/funfact-bg.jpg)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>About Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--top--120">
          {/*About section start*/}
          <div className="about-section section-space--inner--bottom--120">
            <div className="container">
              <div className="row row-25 align-items-center">
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-image-two">
                    <img src="assets/img/about/about-3.jpg" alt="" />
                    <span className="video-popup">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="OrS-93U4AYQ"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <button onClick={this.openModal}>
                        <i className="ion-ios-play-outline" />
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h3>Welcome to Tritrac</h3>
                    <h1>12 Years of Experience in Industry</h1>
                    <h4>
                      TRITRAC ENGINEERS LTD is a Ugandan-based engineering
                      company serving the needs of the local industry and
                      beyond.
                    </h4>
                    <p>
                      We focus on providing cost-effective and innovative design
                      & building solutions using our extensive experience in
                      Civil, mechanical and electrical engineering.
                    </p>
                    <p>
                      Tritrac also provides a range of valuation services
                      including the management of customer service and provision
                      of information to stakeholders, valuation contracts, the
                      provision of information to contract valuers, the
                      objection review process as well as auditing and ensuring
                      the quality of land values and the day to day management
                      of valuations completed.{' '}
                    </p>
                    <p>
                      At Tritrac Engineers, we believe in a hands-on approach on
                      all projects. That is why our team will always be in
                      control of the key functions on our projects.{' '}
                    </p>
                    <a
                      href="services"
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Feature Icon */}
          <FeatureIcon background="grey-bg" />

          {/*About section start*/}
          <div className="about-section section-space--inner--120">
            <div className="container">
              <div className="about-wrapper row">
                <div className="col-sm-6 col-12 order-1 order-lg-2">
                  <div className="about-image about-image-1">
                    <img src="assets/img/about/about-1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-6 col-12 order-2 order-lg-3">
                  <div className="about-image about-image-2">
                    <img src="assets/img/about/about-2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-3 order-lg-1">
                  <div className="about-content about-content-1">
                    <h1>
                      <span>12</span>Years of Experience
                    </h1>
                    <p>
                      At TRITRAC ENGINEERS LTD, we are passionate about
                      providing our clients with the best services, in an
                      effective and efficient way. To achieve this, we have the
                      latest registered design modules/Software dating to 2011.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-4">
                  <div className="about-content about-content-2">
                    <p>
                      As TRITRAC ENGINEERS LTD has an IT/Drafting division, the
                      firm has software for Drawing Registers, Office
                      Administration and various design utilities e.g. quantity
                      calculations etc.
                    </p>
                    <a
                      href={`${process.env.PUBLIC_URL}/contact-us`}
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Fun fact */}
          <Funfact />

          {/* Team member */}
          <TeamMemberGrid />

          {/* Testimonial Slider */}
          <TestimonialSlider />

          {/* Brand logo */}
          <BrandLogoSlider background="" />
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default About;
