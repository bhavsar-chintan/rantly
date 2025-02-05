"use client";
import Banner from "../components/common/common-banner/CommonBanner";
import RefundIntro from "../components/common/refund-intro/RefundIntro";
// img
import bannerImg from "../assets/banner/refundbanner.webp";
import { fatchPagesContent } from "../apis/commonApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Loader from "@/app/components/common/loader/Loader";

import React from "react";

function PageContent() {
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("refund-policy");
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
            activepage="Cancellation & Refund Policy"
            bgImg={
              pageData?.content?.banner?.background_image
                ? {
                    src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
                  }
                : bannerImg
            }
          />
          <RefundIntro content={pageData?.content?.intro} />
        </>
      )}
    </>
  );
}

export default PageContent;
