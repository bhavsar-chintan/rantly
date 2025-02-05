import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import { useRouter } from "next/navigation";
// css
import "./styles.scss";

const Maps = ({ mapsData }) => {
  const router = useRouter();
  return (
    <div className="maps_sec mt-60">
      <Container>
        <h2 className="main_sec_heading">{mapsData?.title}</h2>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6}>
            <div
              className="map_item"
              onClick={() =>
                router.push(`/locations?location=${mapsData?.location1?.link}`)
              }
            >
              <figure>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${mapsData?.location1?.featured_img}`}
                  layout="fill"
                  objectFit="cover"
                  alt={mapsData?.location1?.title}
                  title={mapsData?.location1?.title}
                />
              </figure>
              <div className="content_sec">
                <h3 className="sub_heading">{mapsData?.location1?.title}</h3>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div
              className="map_item"
              onClick={() =>
                router.push(`/locations?location=${mapsData?.location2?.link}`)
              }
            >
              <figure>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${mapsData?.location2?.featured_img}`}
                  layout="fill"
                  objectFit="cover"
                  alt={mapsData?.location2?.title}
                  title={mapsData?.location2?.title}
                />
              </figure>
              <div className="content_sec">
                <h3 className="sub_heading">{mapsData?.location2?.title}</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Maps;
