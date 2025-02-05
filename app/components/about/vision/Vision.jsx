import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Vision = ({ visionData }) => {
  return (
    <div className="vision_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6} className="order-last order-lg-first">
            <span className="tag_line">{visionData?.tagLine}</span>
            <h2 className="main_sec_heading">{visionData?.title}</h2>
            {/* <p className="para_comm">{visionData?.detail}</p> */}
            <div
              className="general-details"
              dangerouslySetInnerHTML={{ __html: visionData?.description }}
            />
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  visionData?.featured_img
                }
                layout="fill"
                objectFit="cover"
                alt="Property Management | Newedge Realty"
                title="Newedge Realty Banner | Real Estate Agency | Newedge Realty"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vision;
