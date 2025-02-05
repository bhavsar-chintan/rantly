import { Container } from "react-bootstrap";
// css
import "./style.scss";

const ContactSection = () => {
  return (
    <Container>
      <div className="mt-60 contact-sec-area">
        <div className="content_sec ptb-60">
          <h2 className="main_sec_heading">NEED HELP ? TALK TO OUR EXPERT</h2>
          <p className="para_comm">
            Talk to our Experts or Browse through more properties
          </p>
          <a href="tel:+917940307106" className="theme_btn">
            Call Now
          </a>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
