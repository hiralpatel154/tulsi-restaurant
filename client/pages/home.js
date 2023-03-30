import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const home = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplaySpeed: 2000,
    autoplay: false,
    pauseOnHover: true,
    dots: true,
    arrows:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="main-page">
        {/* <div className="banner-image">
          <img src="/assets/images/banner-bg-image.png" alt="" />
        </div> */}

        <div className="daily-special-section">
          <div className="content-box">
            <div className="tag-line">
              <p className="font-55 d-flex">Taste Our Cuisine</p>
            </div>
          </div>

          <div className="review-section section-padding">
            <div className="container" id="testimonial">
              <Slider className="review-area" {...settings}>
                <div className="special-one">
                  <div className="image-box">
                    <img
                      src="/assets/images/italian/lasagne.jpg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <h3>Lasagna</h3>
                  <p>
                    Pasta dish of Italian origin, made with broad often ruffled
                    noodles and a tomato or white sauce
                  </p>
                </div>
                <div className="special-one">
                  <div className="image-box">
                    <img
                      src="/assets/images/gujarati/puran-poli-vedmi.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <h3>
                    Puran Podi
                    <span>(Vedmi)</span>
                  </h3>
                  <p>
                    Puran poli is traditional Indian stuffed bread with sweet
                    lentil filling.
                  </p>
                </div>
                <div className="special-one">
                  <div className="image-box">
                    <img src="/assets/images/south/Dosa.png" alt="" srcset="" />
                  </div>
                  <h3>Dosa</h3>
                  <p>
                    Pasta dish of Italian origin, made with broad often ruffled
                    noodles and a tomato or white sauce
                  </p>
                </div>
                <div className="special-one">
                  <div className="image-box">
                    <img src="/assets/images/north/gajar-ka-halwa.jpg" alt="" srcset="" />
                  </div>
                  <h3>Gajar Halwa</h3>
                  <p>
                    Pasta dish of Italian origin, made with broad often ruffled
                    noodles and a tomato or white sauce
                  </p>
                </div>
                <div className="special-one">
                  <div className="image-box">
                    <img src="/assets/images/mexican/bean-dip.png" alt="" srcset="" />
                  </div>
                  <h3>Bean Dip</h3>
                  <p>
                    Pasta dish of Italian origin, made with broad often ruffled
                    noodles and a tomato or white sauce
                  </p>
                </div>
                <div className="special-one">
                  <div className="image-box">
                    <img src="/assets/images/gujarati/dal-vada.jpg" alt="" srcset="" />
                  </div>
                  <h3>Dal Vada</h3>
                  <p>
                    Pasta dish of Italian origin, made with broad often ruffled
                    noodles and a tomato or white sauce
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
