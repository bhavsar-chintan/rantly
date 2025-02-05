import Image from "next/image";
import { useRouter } from "next/navigation";
import { Row, Col, Container } from "react-bootstrap";
import CountUp from "react-countup";
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
const AboutSection = ({
  aboutData = {
    title:
      "Trusted Solutions for Businesses, Projects, & Homeowners Since 1997",
    description:
      "<p>At Newedge Realty, we are leaders in premium property consultancy services. We guide our clients through the entire process by using our global network from identifying the right property, negotiating favorable terms, managing documentation to completing transactions. With over 25 years of experience, we make buying and selling of real estate transparent and secure. Our team of experts is proactive, analytical, and committed to providing tailor-made solutions for your unique real estate needs. Thank you for choosing us as your trusted and respected brand,</p>",
  },
  countsData,
}) => {
  const router = useRouter();
  const processedData = preprocessCountsData(countsData);

  return (
    <div className="about_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6}>
            <span className="tag_line">{aboutData?.tagLine}</span>
            <h2 className="main_sec_heading">{aboutData?.title}</h2>
            <p
              className="para_comm"
              dangerouslySetInnerHTML={{ __html: aboutData?.description }}
            ></p>
            <Row>
              {processedData?.map((item) => (
                <Col xs={6} lg={4} key={item?.id}>
                  <div className="counts_wrap">
                    <h3 className="main_sec_heading">
                      <CountUp
                        enableScrollSpy={true}
                        start={0}
                        end={item?.numericValue}
                        duration={4}
                        decimals={item?.numericValue % 1 !== 0 ? 1 : 0} // This will ensure one decimal points
                        decimal="." // This sets the decimal separator
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
            <button
              className="theme_btn2"
              onClick={() => router.push("/about")}
            >
              Learn More
            </button>
          </Col>
          <Col lg={6}>
            <div className="img_wrap">
              <figure className="about_img1">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                    aboutData?.featured_img2
                  }
                  layout="fill"
                  objectFit="cover"
                  alt={aboutData?.title}
                  title={aboutData?.title}
                />
              </figure>
              <figure className="about_img2">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                    aboutData?.featured_img1
                  }
                  layout="fill"
                  objectFit="cover"
                  alt={aboutData?.title}
                  title={aboutData?.title}
                />
              </figure>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
