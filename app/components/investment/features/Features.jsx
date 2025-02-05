// import Image from "next/image";
import { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// css
import "./styles.scss";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 800,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const Features = ({ title, featuresData }) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const showArrows = featuresData?.length > settings.slidesToShow;

  const PrevArrow = () => (
    <button
      className="slider_custom_arrows"
      onClick={previousSlide}
      disabled={currentSlide === 0}
    >
      <FaAngleLeft fontSize={"24px"} />
    </button>
  );

  const NextArrow = () => (
    <button
      className="slider_custom_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= featuresData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="invest_features_sec mt-60">
      <Container>
        <div className="header_wrap">
          <h2 className="sub_heading">{title}</h2>
          {showArrows && (
            <div className="desktop_view">
              <PrevArrow />
              <NextArrow />
            </div>
          )}
        </div>
        <Slider
          {...settings}
          ref={sliderRef}
          afterChange={(index) => setCurrentSlide(index)}
        >
          {featuresData?.map((item, i) => (
            <div className="feature_wrap" key={i + "fjdik"}>
              <div className="feature_item">
                {/* <Image
                  src={item?.icon}
                  alt={item?.img_alt}
                  title={item?.img_title}
                /> */}
                <div>
                  <h3>{item?.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item?.description }}>
                    {/* {item?.detail} */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {showArrows && (
          <div className="mobile_view">
            <PrevArrow />
            <NextArrow />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Features;
