import { useRouter } from "next/navigation";
import { Accordion, Container } from "react-bootstrap";
// css
import "./style.scss";

const faqsData = [
  {
    id: 1,
    question: "What should I consider before buying a property?",
    answer: `Potential buyers need to take into account things like geographical area, available funds, the state of the building, and how the economy is behaving, and also arrange for an affordable return price. It would help to know if their intended residence has no legal issues as well as account for expenses like taxes or maintenance costs.`,
  },
  {
    id: 2,
    question: "How do I determine the right price for a property?",
    answer: `Research similar houses in your locality and compare these prices; then look at the patterns of recent sale transactions within this town; after all these, consider the condition among other features before making a decision. You will get a complete market analysis from a real estate specialist which would allow him/her to recommend an asking price that isn’t too low or too high.`,
  },
  {
    id: 3,
    question: "What services does Newedge Realty provide?",
    answer: `Newedge Realty offers a comprehensive range of real estate services, including premium property consultancy, market analysis, general documentation management, and transaction closure. We work with entrepreneurs, construction sites, and homeowners among others in guiding them through each stage involved in buying or selling their properties.`,
  },
  {
    id: 4,
    question: "How can Newedge Realty assist with property transactions?",
    answer: `Our services in property transactions include identifying suitable properties, negotiating terms that are good for our clients, managing all required documents as well as overseeing the closure. With our extensive expertise and global network at our disposal, every transaction will be quick, smooth, and clear.`,
  },
  {
    id: 5,
    question: "What areas does Newedge Realty cover?",
    answer: `Many towns and cities are parts of the Newedge Realty sites as we take advantage of a vast local network and great global partnerships to give you service where ever you may call for it. We customize our services according to every client’s individual needs no matter their location.`,
  },
];

const FAQSection = () => {
  const router = useRouter();
  return (
    <div className="mt-60 faqs-area">
      <Container>
        <div className="header_wrap">
          <div>
            <span className="tag_line">Help</span>
            <h2 className="main_sec_heading">FAQs</h2>
          </div>
          <div className="desktop_view">
            <button className="theme_btn2" onClick={() => router.push("/faqs")}>
              See More
            </button>
          </div>
        </div>
        <Accordion defaultActiveKey={1} flush>
          {faqsData?.map((item, i) => (
            <Accordion.Item eventKey={i + 1} key={item?.id}>
              <Accordion.Header>{item?.question}</Accordion.Header>
              <Accordion.Body>
                <div>{item?.answer}</div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <div className="mobile_view">
          <button className="theme_btn2" onClick={() => router.push("/faqs")}>
            See More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default FAQSection;
