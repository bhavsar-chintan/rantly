"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Banner from "../../components/common/common-banner/CommonBanner";
import Overview from "../../components/developerInner/overview/Overview";
import PortfolioSlider from "../../components/developerInner/portfolio-slider/PortfolioSlider";
import ContactSection from "../../components/home/contact-section/ContactSection";
import FAQSection from "../../components/home/faq-section/FAQSection";
// api
import { fatchDeveloperSingle } from "@/app/apis/commonApi";
// img
import bannerImg from "../../assets/banner/developerinnerbanner.webp";

const PageContent = () => {
  const { id } = useParams();
  const [singleDeveloper, setsingleDeveloper] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSingleDeveloperData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchDeveloperSingle(id);
        setsingleDeveloper(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchSingleDeveloperData();
  }, []);

  return (
    <>
      <Banner
        name={singleDeveloper?.name}
        indexpage="Home"
        indexvisit="/"
        activepage={singleDeveloper?.name}
        bgImg={
          singleDeveloper?.banner_image
            ? {
                src:
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  singleDeveloper?.banner_image,
              }
            : bannerImg
        }
      />
      <Overview singleDeveloper={singleDeveloper} />
      <PortfolioSlider singleDeveloper={singleDeveloper} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default PageContent;
