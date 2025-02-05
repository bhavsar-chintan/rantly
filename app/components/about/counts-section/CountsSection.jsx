import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import CountUp from "react-countup";
// img
import countsImg from "../../../assets/about/countsImg.webp";
// css
import "./styles.scss";

// Preprocess countsData to split numeric value, unit, and tag
const preprocessCountsData = (data) => {
  return data?.map((item) => {
    const match = item?.value?.match(/^([\d.]+)([a-zA-Z\s.+]*)$/);
    const numericValue = match ? parseFloat(match[1]) : 0;
    const suffix = match ? match[2].trim() : "";

    // Assign "Mn Sq.Ft" to `unit` and any other suffix to `tag`
    const unit = suffix.includes("Mn Sq.Ft") ? "Mn Sq.Ft" : "";
    const tag = unit ? suffix.replace("Mn Sq.Ft", "").trim() : suffix;

    return {
      ...item,
      numericValue,
      unit,
      tag,
    };
  });
};

const CountsSection = ({ countsData, countsInfo }) => {
  const processedData = preprocessCountsData(countsData);

  return (
    <div className="counts_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6} className="order-last order-lg-first">
            <figure>
              <Image
                src={countsImg}
                layout="fill"
                objectFit="cover"
                alt="Property Management, Newedge Realty"
                title="Retail Spaces Leased | Real Estate Agency | Newedge Realty"
              />
            </figure>
          </Col>
          <Col lg={6}>
            <Row className="gy-4">
              {processedData?.map((item) => (
                <Col xs={6} lg={4} key={item?.id}>
                  <div className="counts_wrap">
                    <h3 className="main_sec_heading">
                      <CountUp
                        enableScrollSpy={true}
                        start={0}
                        end={item?.numericValue}
                        duration={4}
                        decimals={item?.numericValue % 1 !== 0 ? 1 : 0} // Shows one decimal if value has decimal
                        decimal="."
                      >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                      </CountUp>
                      {item?.tag}
                      {item?.unit && <span className="unit">{item?.unit}</span>}
                    </h3>
                    <p className="para_comm">{item?.title}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CountsSection;
