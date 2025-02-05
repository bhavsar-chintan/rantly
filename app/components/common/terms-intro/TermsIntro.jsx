import { Container } from "react-bootstrap";
import "./styles.scss";

const TermsIntro = ({ content }) => {
  return (
    <div className="terms_intro_sec mt-60">
      <Container>
        <span className="tag_line">Terms</span>
        <h2 className="main_sec_heading">{content?.title}</h2>
        <div
          className="content_wrap"
          dangerouslySetInnerHTML={{ __html: content?.description }}
        ></div>
      </Container>
    </div>
  );
};

export default TermsIntro;
