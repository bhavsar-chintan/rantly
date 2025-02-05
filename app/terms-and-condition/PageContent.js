"use client";

import React, { useEffect, useState } from "react";
import Banner from "../components/common/common-banner/CommonBanner";
import TermsIntro from "../components/common/terms-intro/TermsIntro";
// img
import bannerImg from "../assets/banner/termsbanner.webp";
import Loader from "@/app/components/common/loader/Loader";
import { fatchPagesContent } from "../apis/commonApi";
import { toast } from "react-toastify";

function PageContent() {
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("terms-and-condition");
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
    <div>
      {" "}
      <Banner
        name={pageData?.content?.banner?.title}
        indexpage="Home"
        indexvisit="/"
        activepage="Terms & Condition"
        bgImg={
          pageData?.content?.banner?.background_image
            ? {
                src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
              }
            : bannerImg
        }
      />
      <TermsIntro content={pageData?.content?.intro} />
    </div>
  );
}

export default PageContent;
