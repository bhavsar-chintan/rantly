import Image from "next/image";
import { Row, Col, Container, Accordion } from "react-bootstrap";
// css
import "./styles.scss";

const Dmic = ({ dmicData, content }) => {
  return (
    <div className="dmic_sec mt-60">
      <Container>
        <h2 className="main_sec_heading">{content?.title}</h2>
        <p
          className="para_comm"
          dangerouslySetInnerHTML={{ __html: content?.description }}
        ></p>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <Accordion defaultActiveKey={1} flush>
              {dmicData?.dmicList?.map((item, i) => (
                <Accordion.Item eventKey={i + 1} key={item?.id}>
                  <Accordion.Header>{item?.title}</Accordion.Header>
                  <Accordion.Body>
                    <div
                      className="general-details"
                      dangerouslySetInnerHTML={{ __html: item?.detail }}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${content?.featured_img}`}
                layout="fill"
                objectFit="cover"
                alt={content?.title}
                title={content?.title}
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dmic;
