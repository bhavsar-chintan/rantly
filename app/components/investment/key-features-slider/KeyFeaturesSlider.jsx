import Image from "next/image";
import { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// css
import "./styles.scss";

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  pauseOnHover: false,
  centerMode: true,
  centerPadding: "10%", // Remove center padding from here
  responsive: [
    {
      breakpoint: 992,
      settings: {
        centerMode: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const KeyFeaturesSlider = ({ title, subTitle, keyFeaturesData }) => {
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

  const showArrows = keyFeaturesData?.length > settings.slidesToShow;

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
      disabled={currentSlide >= keyFeaturesData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="key_features_sec mt-60">
      <Container>
        <div className="header_wrap">
          <div className="detail_sec">
            {subTitle ? (
              <h2 className="main_sec_heading">{title}</h2>
            ) : (
              <h2 className="sub_heading">{title}</h2>
            )}
            {subTitle && <p className="para_comm">{subTitle}</p>}
          </div>
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
          {keyFeaturesData?.map((item, i) => (
            <div className="key_feature_wrap" key={i + "tfr"}>
              <div className="key_feature_item">
                <div>
                  <figure>
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                        item?.featured_img
                      }
                      layout="fill"
                      objectFit="cover"
                      alt={item?.title}
                      title={item?.title}
                    />
                  </figure>
                </div>
                <div>
                  <h3>{item?.title}</h3>
                  <div
                    className="general-details"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
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

export default KeyFeaturesSlider;
