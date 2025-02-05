import Image from "next/image";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DevContactForm from "../dev-contact-form/DevContactForm";
import BrochureForm from "../../common/brochure-form/BrochureForm";
// css
import "./styles.scss";

const AboutDeveloper = ({
  developerData,
  propertyType,
  brochureUrl,
  propertyName,
}) => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);
  return (
    <div className="dev_detail_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6} className="order-last order-lg-first">
            <h2 className="sub_heading">About Developers</h2>
            <div
              className="general-details"
              dangerouslySetInnerHTML={{
                __html: developerData?.description,
              }}
            />
            <div className="btn_wrap">
              {brochureUrl && (
                <button className="theme_btn2" onClick={handleModalShow}>
                  Download Brochure
                </button>
              )}
              <button className="theme_btn3" onClick={handleShow}>
                Contact Us
              </button>
            </div>
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${developerData?.inner_page_image}`}
                alt="developer"
                layout="fill"
                objectFit="cover"
                // width="300"
                // height={"400"}
              />
            </figure>
          </Col>
        </Row>
        <DevContactForm
          show={show}
          handleClose={handleClose}
          propertyType={propertyType}
          propertyName={propertyName}
        />
        {brochureUrl && (
          <BrochureForm
            show={showModal}
            handleClose={handleModalClose}
            brochureLink={brochureUrl}
            propertyType={propertyType}
            propertyName={propertyName}
          />
        )}
      </Container>
    </div>
  );
};

export default AboutDeveloper;
