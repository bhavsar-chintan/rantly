"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Banner from "../../components/common/common-banner/CommonBanner";
import FilterSection from "../../components/projects/filter-section/FilterSection";
import ProjectsList from "../../components/projects/projects-list/ProjectsList";
import ContactSection from "../../components/home/contact-section/ContactSection";
import FAQSection from "../../components/home/faq-section/FAQSection";
// api
import { fatchProjectList } from "../../apis/commonApi";
// img
import bannerImg from "../../assets/banner/commercialbanner.webp";

const Projects = () => {
  const pathname = usePathname();
  const route = pathname?.split("/")?.[1];
  const [projectData, setProjectData] = useState([]);
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProjectListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchProjectList();
        const projectsList = data?.filter(
          (project) => project?.property_type?.route === route
        );
        setProjectData(projectsList);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    fetchProjectListData();
  }, [pathname, route]);

  // Function to update filters based on user input
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters, // Update only the changed filters (zone, location, type)
    }));
  };

  const formatPrice = (value) => {
    if (value >= 10000000) {
      return (value / 10000000).toFixed(1) + "Cr"; // Convert to crores
    } else if (value >= 100000) {
      return (value / 100000).toFixed(1) + "L"; // Convert to lakhs
    }
    return value;
  };

  // Apply filters to the project list
  const filteredProjects = projectData?.filter((project) => {
    // Check for Zone filter
    if (filters?.zone && project?.zone?.route !== filters?.zone) return false;
    // Check for location filter
    if (filters?.location && project?.location?.route !== filters?.location)
      return false;
    // Check for price filter
    if (filters?.price && project?.price !== formatPrice(filters?.price))
      return false;
    // Check for Property location filter
    if (
      filters?.property_location &&
      project?.property_location !== filters?.property_location
    )
      return false;

    return true;
  });

  return (
    <>
      <Banner
        name={projectData?.[0]?.property_type?.title}
        indexpage="Home"
        indexvisit="/"
        activepage={projectData?.[0]?.property_type?.title}
        bgImg={
          projectData?.[0]?.property_type?.banner_image
            ? {
                src: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${projectData?.[0]?.property_type?.banner_image}`,
              }
            : bannerImg
        }
      />
      <FilterSection
        onFilterChange={handleFilterChange}
        projectsData={projectData}
      />
      <ProjectsList
        projectsData={filteredProjects}
        route={route}
        isLoading={isLoading}
      />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default Projects;
