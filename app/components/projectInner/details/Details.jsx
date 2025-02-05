import Image from "next/image";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectForm from "../project-form/ProjectForm";
// img
import projectImg from "../../../assets/home/commercial1.webp";
// css
import "./styles.scss";

const Details = ({ singleProject }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="project_detail_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6} className="order-last order-lg-first">
            <figure>
              <Image
                src={
                  singleProject?.featured_img
                    ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${singleProject?.featured_img}`
                    : projectImg
                }
                layout="fill"
                objectFit="cover"
                // width="300"
                // height={"400"}
                alt={singleProject?.title}
              />
            </figure>
          </Col>
          <Col lg={6}>
            <h2 className="sub_heading">Overview</h2>
            <div
              className="general-details"
              dangerouslySetInnerHTML={{
                __html: singleProject?.description,
              }}
            />
            <button className="theme_btn2" onClick={handleShow}>
              Rent/Buy
            </button>
          </Col>
        </Row>
        <ProjectForm
          show={show}
          handleClose={handleClose}
          propertyType={singleProject?.property_type?.title}
          propertyName={singleProject?.title}
        />
      </Container>
    </div>
  );
};

export default Details;
