"use client";
import React, { useEffect, useState } from "react";
import Banner from "../components/common/common-banner/CommonBanner";
import PrivacyIntro from "../components/common/privacy-intro/PrivacyIntro";
// img
import bannerImg from "../assets/banner/privacybanner.webp";
import { fatchPagesContent } from "../apis/commonApi";

import Loader from "@/app/components/common/loader/Loader";
import { toast } from "react-toastify";

function PageContent() {
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("privacy-policy");
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
            activepage="Privacy Policy"
            bgImg={
              pageData?.content?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
                  }
                : bannerImg
            }
          />
          <PrivacyIntro content={pageData?.content?.intro} />
        </>
      )}
    </>
  );
}

export default PageContent;
