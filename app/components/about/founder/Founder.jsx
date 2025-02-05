import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Founder = ({ founderData }) => {
  return (
    <div className="founder_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6}>
            <figure>
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  founderData?.featured_img
                }
                layout="fill"
                objectFit="cover"
                alt="Property Management, Newedge Realty"
                title="Newedge Realty Mission | Best Real Estate Company | Newedge Realty"
              />
            </figure>
          </Col>
          <Col lg={6}>
            <span className="tag_line">{founderData?.tagLine}</span>
            <h2 className="main_sec_heading">{founderData?.title}</h2>
            {/* <p className="para_comm">{founderData?.detail}</p> */}
            <div
              className="general-details"
              dangerouslySetInnerHTML={{ __html: founderData?.description }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Founder;
