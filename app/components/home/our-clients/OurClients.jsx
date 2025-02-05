import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
  // lazyLoad: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: "linear",
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
      },
    },
  ],
};

const OurClients = () => {
  const sliderRef = useRef();
  const [clientsData, setClientsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchClientsListData = async () => {
      try {
        setIsLoading(true);
        const { data } = await fatchCredentialsClients();

        let updatedData = [...data]?.filter((item) => item?.type === "clients");
        setClientsData(updatedData);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClientsListData();
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

  const showArrows = clientsData?.length > settings.slidesToShow;

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
      disabled={currentSlide >= clientsData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="clients_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={3}>
            <h2 className="main_sec_heading">Our Clients</h2>
          </Col>
          <Col lg={9}>
            {isLoading ? (
              <p className="para_comm text-center">loading...</p>
            ) : (
              <Slider
                {...settings}
                ref={sliderRef}
                afterChange={(index) => setCurrentSlide(index)}
              >
                {clientsData?.map((item, i) => (
                  <div className="clients_item" key={i}>
                    <div className="img_wrap">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.credential}`}
                        width={170}
                        height={60}
                        alt="client"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurClients;
