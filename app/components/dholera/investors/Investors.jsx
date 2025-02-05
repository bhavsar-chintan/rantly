import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
// css
import "./styles.scss";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 800,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 2000,
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

const Investors = ({ investorsData }) => {
  return (
    <div className="investors_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={3}>
            <h2 className="sub_heading">{investorsData?.title}</h2>
          </Col>
          <Col lg={9}>
            <Slider {...settings}>
              {investorsData?.logos?.map((item, i) => (
                <div className="investors_item" key={i}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.img}`}
                    width={150}
                    height={150}
                    alt={item?.title}
                    title={item?.title}
                  />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Investors;
