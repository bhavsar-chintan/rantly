"use client";
import Banner from "../../components/common/common-banner/CommonBanner";
import Intro from "../../components/dholera/intro/Intro";
import Maps from "../../components/dholera/maps/Maps";
import MoreFeatures from "../../components/dholera/more-features/MoreFeatures";
import Detail from "../../components/dholera/detail/Detail";
import DevelopmentPlan from "../../components/dholera/development-plan/DevelopmentPlan";
import Dmic from "../../components/dholera/dmic/Dmic";
import Airport from "../../components/dholera/airport/Airport";
import PhasesSlider from "../../components/investment/phases-slider/PhasesSlider";
import Investors from "../../components/dholera/investors/Investors";
import ContactSection from "../../components/home/contact-section/ContactSection";
import FAQSection from "../../components/investment/faq-section/FAQSection";
// img
import bannerImg from "../../assets/banner/dholerabanner.webp";
// data
import { investmentData } from "../../db/investmentData";
import { useEffect, useState } from "react";
import { fatchPagesContent } from "@/app/apis/commonApi";

import Loader from "@/app/components/common/loader/Loader";

const PageContent = () => {
  const { dholera } = investmentData;
  const {
    intro,
    maps,
    advatnages,
    industries,
    plan,
    dmic,
    airport,
    advantage,
    expectations,
    sectors,
    benefits,
    investors,
  } = dholera;

  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("dholera");
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
      <Banner
        name="DHOLERA SIR"
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Intro introData={pageData?.content?.intro} />
          <Maps
            mapsData={{
              title: "Maps",
              location1: pageData?.content?.location1,
              location2: pageData?.content?.location2,
            }}
          />
          <MoreFeatures
            title="Advantages of Dholera"
            moreFeaturesData={pageData?.content?.advatnages}
          />
          <Detail detailData={pageData?.content?.industries} />
          <DevelopmentPlan
            content={pageData?.content?.plan}
            devPlanData={plan}
          />
          <Dmic content={pageData?.content?.dmic} dmicData={dmic} />
          <Airport airportData={pageData?.content?.airport} />
          <Detail detailData={pageData?.content?.advantage} />
          <MoreFeatures
            title="What to Expect When You Invest in Dholera?"
            moreFeaturesData={pageData?.content?.expectations}
          />
          <MoreFeatures
            title="Permissible Industrial Sectors"
            moreFeaturesData={pageData?.content?.sectors}
          />
          <PhasesSlider
            title="Market Potential"
            subTitle="Dholera Special Investment Region (SIR) offers immense market potential for investors due to its strategic location, well-planned infrastructure, and government-backed initiatives. Here are some key factors highlighting its investment potential:"
            phasesData={pageData?.content?.benefits}
          />
          <Investors
            investorsData={{
              title: "Our Giant Investors",
              logos: pageData?.content?.investors,
            }}
          />
          <ContactSection />
          <FAQSection content={pageData?.content?.faqs} />
        </>
      )}
    </>
  );
};

export default PageContent;
