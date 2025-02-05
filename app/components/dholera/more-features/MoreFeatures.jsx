import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
// css
import "./styles.scss";

const MoreFeatures = ({ title, moreFeaturesData }) => {
  return (
    <div className="more_features_sec mt-60">
      <Container>
        <h2 className="sub_heading">{title}</h2>
        <Row className="gy-4">
          {moreFeaturesData?.map((item, i) => (
            <Col sm={6} lg={4} key={i}>
              <div className="more_features_item">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.icon}`}
                  alt={item?.name}
                  width={60}
                  height={60}
                />
                <div>
                  <h3>{item?.name}</h3>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MoreFeatures;
