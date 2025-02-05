import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Mission = ({ missionData }) => {
  return (
    <div className="mission_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6}>
            <figure>
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  missionData?.featured_img
                }
                layout="fill"
                objectFit="cover"
                alt="Property Management, Newedge Realty"
                title="Newedge Realty Vision | Real Estate Services | Newedge Realty"
              />
            </figure>
          </Col>
          <Col lg={6}>
            <span className="tag_line">{missionData?.tagLine}</span>
            <h2 className="main_sec_heading">{missionData?.title}</h2>
            <div
              className="general-details"
              dangerouslySetInnerHTML={{ __html: missionData?.description }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mission;
