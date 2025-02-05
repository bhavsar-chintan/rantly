import { useRouter } from "next/navigation";
import { Accordion, Container } from "react-bootstrap";
// css
import "./style.scss";

const faqsData = [
  {
    id: 1,
    question: "Why should I invest in land instead of other assets?",
    answer: `Land investment is a time-tested approach to wealth-building due to its low maintenance, limited supply, and resistance to depreciation. Unlike stocks or other assets, land is a tangible resource that often appreciates over time, providing a reliable option for long-term investment.`,
  },
  {
    id: 2,
    question: "What are the financial benefits of investing in land?",
    answer: `Land investment offers numerous financial benefits, including potential appreciation, tax incentives, and low maintenance costs. Also, land is less volatile than many other asset classes, providing stability and acting as a hedge against inflation.`,
  },
  {
    id: 3,
    question:
      "How does land investment compare to real estate with structures?",
    answer: `Land investment typically has lower maintenance costs and fewer risks than properties with structures, as there are no repairs or tenant management required. Additionally, vacant land has fewer complications with regulatory requirements, making it a simpler, lower-maintenance asset.`,
  },
  {
    id: 4,
    question: "Can land investment help diversify my portfolio?",
    answer: `Yes, land is an excellent diversification tool due to its stability and relatively low correlation with other asset types. Including land in a portfolio helps balance risks, especially during market fluctuations, enhancing overall financial security.`,
  },
  {
    id: 5,
    question: "What factors should I consider before investing in land?",
    answer: `When investing in land, consider key factors such as location, zoning regulations, accessibility, and potential for future development. Evaluating these elements helps determine the land's long-term value and its suitability for your investment goals.`,
  },
];

const FAQSection = ({ content }) => {
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
          {content?.length ? (
            <>
              {content?.map((item, i) => (
                <Accordion.Item eventKey={i + 1} key={item?.id}>
                  <Accordion.Header>{item?.title}</Accordion.Header>
                  <Accordion.Body>
                    <div
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    ></div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </>
          ) : (
            <>
              {faqsData?.map((item, i) => (
                <Accordion.Item eventKey={i + 1} key={item?.id}>
                  <Accordion.Header>{item?.question}</Accordion.Header>
                  <Accordion.Body>
                    <div>{item?.answer}</div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </>
          )}
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
