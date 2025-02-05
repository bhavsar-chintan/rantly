import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import { useRouter } from "next/navigation";
// css
import "./styles.scss";

const Opportunities = ({ opportunitiesData }) => {
  console.log("🚀 ~ Opportunities ~ opportunitiesData:", opportunitiesData);
  const router = useRouter();
  return (
    <div className="opportunities_sec mt-60">
      <Container>
        <h2 className="main_sec_heading">{opportunitiesData?.title}</h2>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6}>
            <div
              className="opportunity_item"
              onClick={() => router.push("/investment/ahmadabad")}
            >
              <figure>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${opportunitiesData?.opportunity1?.featured_img}`}
                  layout="fill"
                  objectFit="cover"
                  alt={opportunitiesData?.opportunity1?.title}
                  title={opportunitiesData?.opportunity1?.title}
                />
              </figure>
              <div className="content_sec">
                <h3 className="sub_heading">
                  {opportunitiesData?.opportunity1?.title}
                </h3>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div
              className="opportunity_item"
              onClick={() => router.push("/investment/dholera")}
            >
              <figure>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${opportunitiesData?.opportunity2?.featured_img}`}
                  layout="fill"
                  objectFit="cover"
                  alt={opportunitiesData?.opportunity2?.title}
                  title={opportunitiesData?.opportunity2?.title}
                />
              </figure>
              <div className="content_sec">
                <h3 className="sub_heading">
                  {opportunitiesData?.opportunity2?.title}
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Opportunities;
