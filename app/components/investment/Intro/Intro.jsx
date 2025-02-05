import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Intro = ({ introData }) => {
  return (
    <div className="invest_intro_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <figure>
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  introData?.featured_img
                }
                layout="fill"
                objectFit="cover"
                alt={introData?.title}
                title={introData?.title}
              />
            </figure>
          </Col>
          <Col lg={6}>
            <h2 className="main_sec_heading">{introData?.title}</h2>
            <p
              className="para_comm"
              dangerouslySetInnerHTML={{ __html: introData?.description }}
            ></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
