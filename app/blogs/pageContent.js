"use client";
import { useState, useEffect } from "react";
import Banner from "../components/common/common-banner/CommonBanner";
import BlogList from "../components/blog/BlogList";
import ContactSection from "../components/home/contact-section/ContactSection";
import FAQSection from "../components/home/faq-section/FAQSection";
// api
import { fatchPagesContent, fetchBlogData } from "../apis/commonApi";
// img
import bannerImg from "../assets/banner/blogbanner.webp";
import { toast } from "react-toastify";

const PageContent = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [pageData, setPageData] = useState({});

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("blogs");
      setPageData(resp?.data);
    } catch (err) {
      toast.error("Opps!, something went wrong, please try again later");
      console.log("Err: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchBlogListData = async () => {
      try {
        setIsLoading(true); // Show the loader

        const { data } = await fetchBlogData();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    getPageData();
    fetchBlogListData();
  }, []);

  return (
    <>
      <Banner
        name={pageData?.content?.banner?.title}
        indexpage="Home"
        indexvisit="/"
        activepage="Blogs"
        bgImg={
          pageData?.content?.banner?.background_image
            ? {
                src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
              }
            : bannerImg
        }
      />
      <BlogList blogsList={blogData} isLoading={isLoading} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default PageContent;
