import { Container } from "react-bootstrap";
// css
import "./styles.scss";

const RefundIntro = ({ content }) => {
  return (
    <div className="refund_intro_sec mt-60">
      <Container>
        <span className="tag_line">Policy</span>
        <h2 className="main_sec_heading">{content?.title}</h2>

        <div
          className="content_wrap"
          dangerouslySetInnerHTML={{ __html: content?.description }}
        ></div>
      </Container>
    </div>
  );
};

export default RefundIntro;
