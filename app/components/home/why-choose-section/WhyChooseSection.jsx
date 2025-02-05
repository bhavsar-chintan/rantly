import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import ChooseusCard from "../../common/why-choose-us-slide-card/ChooseusCard";
// css
import "./styles.scss";
const WhyChooseSection = ({ whyChooseData }) => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0; // Reset scroll to start
        } else {
          scrollContainer.scrollLeft += 2; // Adjust scroll speed here
        }
      }, 15); // Adjust scroll timing here
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Start auto-scroll when in view
    if (isInView) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      clearInterval(scrollInterval);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView]);

  // Animation variant for items
  const itemVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="why-choose-sec mt-60" ref={sectionRef}>
      <Container>
        <div className="scroll-container" ref={scrollContainerRef}>
          <div className="scroll-content">
            {/* Why Choose Us Section */}
            <div className="why-choose">
              <span className="tag_line">{whyChooseData?.tagLine}</span>
              <h2 className="main_sec_heading">{whyChooseData?.title}</h2>
              <p className="para_comm">{whyChooseData?.detail}</p>
              <button className="theme_btn2">Learn More</button>
            </div>
            {whyChooseData?.processData?.map((item, i) => {
              return (
                <ChooseusCard
                  item={item}
                  i={i}
                  itemVariant={itemVariant}
                  key={"konDI" + i}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseSection;
