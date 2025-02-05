import { Container, Modal } from "react-bootstrap";
// css
import "./styles.scss";

const TaglinePopup = ({ show, handleClose, popUpref }) => {
  return (
    <div ref={popUpref}>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
        centered
        className="tagline-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <p className="para_comm">
              We aim to achieve <b>2000 happy customers</b> by <b>2030</b>{" "}
              because real estate <b>investment</b> is a critical life decision,
              and everyone deserves to <b>secure</b> their lifelong earnings in
              the <b>right property</b>.
            </p>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TaglinePopup;
