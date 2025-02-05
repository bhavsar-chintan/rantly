import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Airport = ({ airportData }) => {
  return (
    <div className="airport_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <figure>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${airportData?.featured_img}`}
                layout="fill"
                objectFit="cover"
                alt={airportData?.title}
                title={airportData?.title}
              />
            </figure>
          </Col>
          <Col lg={6}>
            <h2 className="main_sec_heading">{airportData?.title}</h2>
            <div
              className="general-details"
              dangerouslySetInnerHTML={{ __html: airportData?.description }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Airport;
