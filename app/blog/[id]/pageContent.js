"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Banner from "../../components/common/common-banner/CommonBanner";
import Details from "../../components/blogInner/Details/Details";
import RelatedBlogs from "../../components/blogInner/related-blogs/RelatedBlogs";
import ContactSection from "../../components/home/contact-section/ContactSection";
import FAQSection from "../../components/home/faq-section/FAQSection";
// api
import { fetchBlogData, fetchBlogDeatilsData } from "../../apis/commonApi";
// img
import bannerImg from "../../assets/banner/blogbanner.webp";

const PageContent = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState({});
  const [relatedBlog, setRelatedBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBlogListData = async () => {
    try {
      setIsLoading(true); // Show the loader

      const { data } = await fetchBlogData();
      const relBlogData = data?.filter((item) => item?.id !== id);
      setRelatedBlog(relBlogData);
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsLoading(false); // Hide the loader
    }
  };

  const fetchSingleBlogData = async () => {
    try {
      setIsLoading(true); // Show the loader

      const { data } = await fetchBlogDeatilsData(id);
      setSingleBlog(data);
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsLoading(false); // Hide the loader
    }
  };

  useEffect(() => {
    fetchBlogListData();
    fetchSingleBlogData();
  }, [id]);

  return (
    <>
      <Banner
        name={singleBlog?.title}
        indexpage="Home"
        indexvisit="/"
        activepage={singleBlog?.title}
        bgImg={
          singleBlog?.banner_image
            ? {
                src:
                  process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  singleBlog?.banner_image,
              }
            : bannerImg
        }
      />
      <Details singleBlog={singleBlog} />
      <RelatedBlogs blogData={relatedBlog} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default PageContent;
