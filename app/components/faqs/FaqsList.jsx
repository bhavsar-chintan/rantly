import { Accordion, Container } from "react-bootstrap";
// css
import "./style.scss";

const FaqsList = ({ faqsData, isLoading }) => {
  return (
    <div className="mt-60 faqs-area">
      <Container>
        <span className="tag_line">ASK US</span>
        <h2 className="main_sec_heading">Frequently Asked Questions</h2>
        {isLoading ? (
          <p className="para_comm text-center">loading...</p>
        ) : (
          <Accordion defaultActiveKey={1} flush>
            {faqsData?.map((item, i) => (
              <Accordion.Item eventKey={i + 1} key={item?.id}>
                <Accordion.Header>{item?.question}</Accordion.Header>
                <Accordion.Body>
                  <div
                    className="general-details"
                    dangerouslySetInnerHTML={{ __html: item?.answer }}
                  />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </Container>
    </div>
  );
};

export default FaqsList;
