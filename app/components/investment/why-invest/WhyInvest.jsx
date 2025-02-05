import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const WhyInvest = ({ whyInvestData }) => {
  return (
    <div className="why_invest_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <span className="tag_line">{whyInvestData?.tagLine}</span>
            <h2 className="main_sec_heading">{whyInvestData?.title}</h2>
            <p
              className="para_comm"
              dangerouslySetInnerHTML={{ __html: whyInvestData?.description }}
            ></p>
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  whyInvestData?.featured_img
                }
                layout="fill"
                objectFit="cover"
                alt={whyInvestData?.title}
                title={whyInvestData?.title}
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyInvest;
