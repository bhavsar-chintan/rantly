import Image from "next/image";
import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
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

const TeamList = ({ teamData }) => {
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

  const showArrows = teamData?.team_list?.length > settings.slidesToShow;

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
      disabled={currentSlide >= teamData?.team_list?.length - 1}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="team_sec mt-60">
      <Container>
        <div className="header_wrap">
          <div>
            <span className="tag_line">Meet</span>
            <h2 className="main_sec_heading">OUR TEAM</h2>
          </div>
          {showArrows && (
            <div className="desktop_view">
              <PrevArrow />
              <NextArrow />
            </div>
          )}
        </div>
        <Slider ref={sliderRef} {...settings}>
          {teamData?.map((item, i) => (
            <div key={i}>
              <div className="team_item">
                <figure>
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                      item?.featured_image
                    }
                    layout="fill"
                    objectFit="cover"
                    alt={item?.name}
                  />
                </figure>
                <div className="content_sec">
                  <p className="location">{item?.designation}</p>
                  <h3 className="sub_heading">{item?.name}</h3>
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

export default TeamList;
