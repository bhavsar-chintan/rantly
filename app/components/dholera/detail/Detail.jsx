import { Container } from "react-bootstrap";
// css
import "./styles.scss";

const Detail = ({ detailData }) => {
  return (
    <div className="dholera_detail_sec mt-60">
      <Container>
        <h2 className="main_sec_heading">{detailData?.title}</h2>
        <div
          className="general-details"
          dangerouslySetInnerHTML={{ __html: detailData?.description }}
        />
      </Container>
    </div>
  );
};

export default Detail;
