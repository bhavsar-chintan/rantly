import Image from "next/image";
import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
  responsive: [
    {
      breakpoint: 767,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const KeyBenefitsSlider = ({ keyBenefitsData }) => {
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

  const showArrows = keyBenefitsData?.length > settings.slidesToShow;

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
      disabled={currentSlide >= keyBenefitsData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="key_benefits_sec mt-60">
      <Container>
        <div className="header_wrap">
          <div className="detail_sec">
            <h2 className="sub_heading">Key Benefits of Ahmedabad</h2>
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
          {keyBenefitsData?.map((item) => (
            <div className="key_benefit_wrap" key={item?.id}>
              <Row className="gy-5 gx-lg-5 align-items-center">
                <Col lg={6}>
                  <span className="tag_line">{item?.tagLine}</span>
                  <h2 className="main_sec_heading">{item?.title}</h2>
                  <p
                    className="para_comm"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>
                </Col>
                <Col lg={6}>
                  <figure>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.featured_img}`}
                      layout="fill"
                      objectFit="cover"
                      alt={item?.title}
                      title={item?.title}
                    />
                  </figure>
                </Col>
              </Row>
              {/* <div className="key_feature_item">
                <div>
                  <figure>
                    <Image
                      src={item?.featured_img}
                      layout="fill"
                      objectFit="cover"
                      alt={item?.img_alt}
                      title={item?.img_title}
                    />
                  </figure>
                </div>
                <div>
                  <h3>{item?.title}</h3>
                  <div
                    className="general-details"
                    dangerouslySetInnerHTML={{ __html: item?.detail }}
                  />
                </div>
              </div> */}
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

export default KeyBenefitsSlider;
