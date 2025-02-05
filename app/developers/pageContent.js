"use client";
import { useState, useEffect } from "react";
import Banner from "../components/common/common-banner/CommonBanner";
import FilterSection from "../components/developers/filter-section/FilterSection";
import DevelopersList from "../components/developers/developers-list/DevelopersList";
import ContactSection from "../components/home/contact-section/ContactSection";
import FAQSection from "../components/home/faq-section/FAQSection";
// api
import { fatchDeveloperList, fatchPagesContent } from "../apis/commonApi";
// img
import bannerImg from "../assets/banner/developerbanner.webp";
import { toast } from "react-toastify";

const PageContent = () => {
  const [developerData, setDeveloperData] = useState([]);
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [pageData, setPageData] = useState({});

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("developers");
      setPageData(resp?.data);
    } catch (err) {
      toast.error("Opps!, something went wrong, please try again later");
      console.log("Err: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchDeveloperList();
        setDeveloperData(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    getPageData();
    fetchData();
  }, []);

  // Function to update filters based on user input
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters, // Update only the changed filters (zone, location, type)
    }));
  };

  // Apply filters to the developer list
  const filteredDevelopers = developerData?.filter((dev) => {
    // Check for Developer filter
    if (filters?.developer && dev?.route !== filters?.developer) return false;

    return true;
  });

  return (
    <>
      <Banner
        name={pageData?.content?.banner?.title}
        indexpage="Home"
        indexvisit="/"
        activepage="Developers"
        bgImg={
          pageData?.content?.banner?.background_image
            ? {
                src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
              }
            : bannerImg
        }
      />
      <FilterSection
        developerList={developerData}
        onFilterChange={handleFilterChange}
      />
      <DevelopersList
        developerList={filteredDevelopers}
        isLoading={isLoading}
      />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default PageContent;
