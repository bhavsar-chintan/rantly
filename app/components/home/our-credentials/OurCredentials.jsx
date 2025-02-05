import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// api
import { fatchCredentialsClients } from "../../../apis/commonApi";
// css
import "./styles.scss";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 800,
  autoplaySpeed: 2000,
  lazyLoad: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const OurCredentials = () => {
  const sliderRef = useRef();
  const [credentialsData, setCredentialsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCredentialsListData = async () => {
      try {
        setIsLoading(true);
        const { data } = await fatchCredentialsClients();

        let updatedData = [...data]?.filter(
          (item) => item?.type === "credentials"
        );
        setCredentialsData(updatedData);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCredentialsListData();
  }, []);
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

  const showArrows = credentialsData?.length > settings.slidesToShow;

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
      disabled={currentSlide >= credentialsData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="cred_sec mt-60">
      <Container>
        <div className="header_wrap">
          <h2 className="main_sec_heading">Our Credentials</h2>
          {/* {showArrows && (
            <div className="desktop_view">
              <PrevArrow />
              <NextArrow />
            </div>
          )} */}
        </div>
        {isLoading ? (
          <p className="para_comm text-center">loading...</p>
        ) : (
          <Slider
            {...settings}
            ref={sliderRef}
            afterChange={(index) => setCurrentSlide(index)}
          >
            {credentialsData?.map((item, i) => (
              <div className="cred_item mt-4" key={i}>
                <div className="img_wrap">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.credential}`}
                    width={100}
                    height={160}
                    alt="client"
                  />
                </div>
              </div>
            ))}
          </Slider>
        )}
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

export default OurCredentials;
