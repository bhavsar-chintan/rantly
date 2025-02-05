import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import placeholder from "@/app/assets/placeholder.webp";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// css
import "./style.scss";
import { fatchProjectsrList } from "@/app/apis/commonApi";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 4,
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

const PortfolioSlider = ({ singleDeveloper }) => {
  const router = useRouter();
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderData, setSliderData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchProjectsrList();
        let UpdatedData = data?.filter(
          (item) => item?.developer_id == singleDeveloper?.id
        );
        setSliderData(UpdatedData);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    if (singleDeveloper?.id) {
      fetchData();
    }
  }, [singleDeveloper?.id]);

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

  const showArrows = sliderData?.length > settings.slidesToShow;

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
      disabled={currentSlide >= sliderData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  if (isLoading) {
    return <p className="para_comm text-center">loading...</p>;
  }
  if (!sliderData?.length) {
    return null;
  }
  return (
    <div className="portfolio_slider_sec mt-60">
      <Container>
        <div className="header_wrap">
          <div>
            <span className="tag_line">Discover</span>
            <h3 className="main_sec_heading">Portfolio Highlights</h3>
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
          {sliderData?.map((item) => (
            <div
              key={item?.id}
              className="portfolio_item"
              onClick={() => router.push(`/commercial/${item?.route}`)}
            >
              <figure>
                <Image
                  src={
                    item?.featured_img
                      ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.featured_img}`
                      : placeholder
                  }
                  alt="residential"
                  layout="fill"
                  objectFit="cover"
                />
                <span className="category">{item?.property_type?.title}</span>
              </figure>
              <div className="content_sec">
                <p className="location">
                  <span>Starting from</span> ₹{item?.price}
                </p>
                <h3 className="sub_heading">{item?.title}</h3>
                {item?.property_location ? (
                  <p className="para_comm">{item?.property_location}</p>
                ) : (
                  <p className="para_comm">
                    {item?.zone?.title}, {item?.location?.title}
                  </p>
                )}
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

export default PortfolioSlider;
