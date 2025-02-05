import { Row, Col, Container } from "react-bootstrap";
import VideoSection from "../video-section/VideoSection";
// css
import "./styles.scss";

const Intro = ({ introData }) => {
  return (
    <div className="dholera_intro_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5">
          <Col sm={12}>
            <VideoSection
              videoThumbnail={introData?.featured_img}
              videoUrl={introData?.video_url}
            />
          </Col>
          <Col sm={12}>
            <h2 className="main_sec_heading">{introData?.title}</h2>
            <div
              className="general-details"
              dangerouslySetInnerHTML={{ __html: introData?.description }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
