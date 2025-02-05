"use client";
import Banner from "../components/common/common-banner/CommonBanner";
import Intro from "../components/investment/Intro/Intro";
import Features from "../components/investment/features/Features";
import WhyInvest from "../components/investment/why-invest/WhyInvest";
import PhasesSlider from "../components/investment/phases-slider/PhasesSlider";
import Opportunities from "../components/investment/opportunities/Opportunities";
import KeyFeaturesSlider from "../components/investment/key-features-slider/KeyFeaturesSlider";
import ExpertTips from "../components/investment/expert-tips/ExpertTips";
import TestimonialsSection from "../components/home/testimonials-section/TestimonialsSection";
import ContactSection from "../components/home/contact-section/ContactSection";
import FAQSection from "../components/investment/faq-section/FAQSection";
// img
import bannerImg from "../assets/banner/investmentbanner.webp";
// data
import { investmentData } from "../db/investmentData";
import { useEffect, useState } from "react";
import { fatchPagesContent } from "../apis/commonApi";
import { toast } from "react-toastify";

import Loader from "@/app/components/common/loader/Loader";

const PageContent = () => {
  const {
    intro,
    key_details,
    factors,
    expertTips,
    phases,
    whyInvest,
    offerings,
    opportunities,
    testimonials,
  } = investmentData;

  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("investment");
      setPageData(resp?.data);
    } catch (err) {
      toast.error("Opps!, something went wrong, please try again later");
      console.log("Err: ", err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPageData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Banner
            name={pageData?.content?.banner?.title}
            indexpage="Home"
            indexvisit="/"
            activepage="Investment"
            // bgImg={bannerImg}
            bgImg={
              pageData?.content?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
                  }
                : bannerImg
            }
          />
          <Intro introData={pageData?.content?.intro} />
          <Features
            title="KEY BENEFITS OF LAND INVESTMENT"
            featuresData={pageData?.content?.benefits}
          />
          <KeyFeaturesSlider
            title="KEY FACTORS TO CONSIDER WHEN INVESTING IN LAND"
            subTitle="To make the most out of your land investments, here are some essential factors to keep in mind:"
            keyFeaturesData={pageData?.content?.factors}
          />
          <ExpertTips
            content={pageData?.content?.expertTips}
            expertTipsData={expertTips}
          />
          <PhasesSlider
            title="LAND APPRECIATION PHASES"
            phasesData={pageData?.content?.phases}
          />
          <WhyInvest whyInvestData={pageData?.content?.whyInvest} />
          <Features
            title="How We Help You Succeed"
            featuresData={pageData?.content?.offerings}
          />
          <Opportunities
            opportunitiesData={{
              title: "CURRENT OPPORTUNITIES",
              opportunity1: pageData?.content?.opportunity1,
              opportunity2: pageData?.content?.opportunity2,
            }}
          />
          <TestimonialsSection testimonialsData={testimonials} />
          <ContactSection />
          <FAQSection content={pageData?.content?.faqs} />
        </>
      )}
    </>
  );
};

export default PageContent;
