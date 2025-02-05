// import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
// css
import "./styles.scss";

const MoreDetails = ({ title, featuresData }) => {
  return (
    <div className="more_details_sec mt-60">
      <Container>
        <h2 className="sub_heading">{title}</h2>
        <Row className="gy-4">
          {featuresData?.map((item, i) => (
            <Col sm={6} lg={4} key={i}>
              <div className="more_item">
                <div className="icon_wrap">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.icon}`}
                    // layout="fill"
                    // objectFit="cover"
                    alt={item?.name}
                  />
                </div>
                <div>
                  <h3>{item?.name}</h3>
                  <p>{item?.value}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MoreDetails;
