"use client";
import Banner from "../../components/common/common-banner/CommonBanner";
import Intro from "../../components/investment/Intro/Intro";
import Maps from "../../components/dholera/maps/Maps";
import KeyBenefitsSlider from "@/app/components/ahmadabad/key-benefits-slider/KeyBenefitsSlider";
import ContactSection from "../../components/home/contact-section/ContactSection";
import FAQSection from "../../components/investment/faq-section/FAQSection";
// img
import bannerImg from "../../assets/banner/ahmadabadbanner.webp";
// data
import { investmentData } from "../../db/investmentData";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fatchPagesContent } from "@/app/apis/commonApi";

import Loader from "@/app/components/common/loader/Loader";

const PageContent = () => {
  const { ahmadabad } = investmentData;
  const { intro, benefits, locations } = ahmadabad;

  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("ahmadabad");
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
        name="AHMEDABAD"
        indexpage="Home"
        indexvisit="/"
        activepage="Investment"
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
          <KeyBenefitsSlider keyBenefitsData={pageData?.content?.benefits} />
          <Maps
            mapsData={{
              title: "Locations",
              location1: pageData?.content?.location1,
              location2: pageData?.content?.location2,
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
