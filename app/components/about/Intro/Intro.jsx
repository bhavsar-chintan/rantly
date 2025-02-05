import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Intro = ({ introData }) => {
  return (
    <div className="intro_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6}>
            <span className="tag_line">{introData?.tagLine}</span>
            <h2 className="main_sec_heading">{introData?.title}</h2>
            {/* <p className="para_comm">{introData?.description}</p> */}
            <div
              className="general-details"
              dangerouslySetInnerHTML={{ __html: introData?.description }}
            />
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  introData?.featured_img
                }
                layout="fill"
                objectFit="cover"
                alt="Property Management, Newedge Realty"
                title="Property Consultancy Firms | Property Management | Newedge Realty"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
