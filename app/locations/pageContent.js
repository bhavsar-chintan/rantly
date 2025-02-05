"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Banner from "../components/common/common-banner/CommonBanner";
import FilterSection from "../components/locations/filter-section/FilterSection";
import LocationsList from "../components/locations/locations-list/LocationsList";
import ContactSection from "../components/home/contact-section/ContactSection";
import FAQSection from "../components/home/faq-section/FAQSection";
// api
import { fatchPagesContent, fatchProjectList } from "../apis/commonApi";
// img
import bannerImg from "../assets/banner/locationsbanner.webp";
import { toast } from "react-toastify";

const PageContent = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const [locationData, setLocationData] = useState([]);
  const [filters, setFilters] = useState({ zone: "zone-1" });
  const [isLoading, setIsLoading] = useState(false);

  const [pageData, setPageData] = useState({});

  const getPageData = async () => {
    try {
      setIsLoading(true);
      const resp = await fatchPagesContent("locations");
      setPageData(resp?.data);
    } catch (err) {
      toast.error("Opps!, something went wrong, please try again later");
      console.log("Err: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchProjectListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchProjectList();
        const locationsList = data?.filter((project) => {
          // Apply the default zone filter or user-selected zone
          return project?.zone?.route === filters.zone;
        });
        setLocationData(locationsList);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    getPageData();
    fetchProjectListData();
  }, [filters.zone]);

  // useEffect(() => {
  //   const locationsList = projectsData?.filter((project) => {
  //     // Apply the default zone filter or user-selected zone
  //     return project?.zone?.route === filters.zone;
  //   });
  //   setLocationData(locationsList);
  // }, [filters.zone]);

  // Update filters based on the `location` search parameter if it changes
  useEffect(() => {
    if (location) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        zone: location,
      }));
    }
  }, [location]);

  // Function to update filters based on user input
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters, // Update only the changed filters (zone, location, type)
    }));
  };

  // Apply filters to the project list
  const filteredProjects = locationData?.filter((location) => {
    // Check for location filter
    if (filters?.location && location?.location?.route !== filters?.location)
      return false;
    // Check for type filter
    if (filters?.type && location?.property_type?.route !== filters?.type)
      return false;
    return true;
  });

  return (
    <>
      <Banner
        name={pageData?.content?.banner?.title}
        indexpage="Home"
        indexvisit="/"
        activepage="Locations"
        bgImg={
          pageData?.content?.banner?.background_image
            ? {
                src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${pageData?.content?.banner?.background_image}`,
              }
            : bannerImg
        }
      />
      <FilterSection
        onFilterChange={handleFilterChange}
        selectedZone={filters.zone}
      />
      <LocationsList locationList={filteredProjects} isLoading={isLoading} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default PageContent;
