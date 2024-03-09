import React, { Component } from 'react';
import { EffectFade } from 'swiper/modules';
import SwiperSlider, { SwiperSlide } from './swiper';

class HeroSlider extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      effect: 'fade',
      navigation: true,
      autoplay: {
        delay: 5000,
      },
      modules: [EffectFade],
    };

    let data = [
      {
        bgImg: 'slider1.jpg',
        sliderTitle: 'Build Your Dream With Passion',
        sliderSubtitle:
          'Cutting edge, customer focused solutions to ensure delivery of the best possible results.',
        btnLink: 'contact-us',
      },
      {
        bgImg: 'slider2.jpg',
        sliderTitle: 'Innovate Refine Deliver Satisfaction',
        sliderSubtitle:
          'Wide range of Engineering, Project Management and Information Technology Services.',
        btnLink: 'contact-us',
      },
      {
        bgImg: 'slider3.jpg',
        sliderTitle: 'Specialist Services Input',
        sliderSubtitle:
          'We strive to excel in all our dealings with emphasis on quality and efficiency.',
        btnLink: 'contact-us',
      },
    ];

    let DataList = data.map((val, i) => {
      return (
        <SwiperSlide key={i}>
          <div
            className="hero-slider__single-item"
            style={{ backgroundImage: `url(assets/img/slider/${val.bgImg})` }}
          >
            <div className="hero-slider__content-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero-slider__content m-auto text-center">
                      <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                      <p className="hero-slider__text">{val.sliderSubtitle}</p>
                      <a
                        className="hero-slider__btn hero-slider__btn--style2"
                        href={`${process.env.PUBLIC_URL}/${val.btnLink}`}
                      >
                        {' '}
                        GET STARTED
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <div>
        {/*====================  hero slider area ====================*/}
        <div className="hero-alider-area">
          <SwiperSlider options={params}>{DataList}</SwiperSlider>
        </div>
        {/*====================  End of hero slider area  ====================*/}
      </div>
    );
  }
}

export default HeroSlider;
