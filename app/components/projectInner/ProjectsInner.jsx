"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import AboutDeveloper from "../../components/projectInner/about-developer/AboutDeveloper";
import Banner from "../../components/common/common-banner/CommonBanner";
import Overview from "../../components/projectInner/Overview/Overview";
import ProjectVideo from "../../components/projectInner/project-video/ProjectVideo";
import ProjectSlider from "../../components/projectInner/project-slider/ProjectSlider";
import Details from "../../components/projectInner/details/Details";
import MoreDetails from "../../components/projectInner/more-details/MoreDetails";
import ProjectGallery from "../../components/projectInner/project-gallery/ProjectGallery";
import ContactSection from "../../components/home/contact-section/ContactSection";
import FAQSection from "../../components/home/faq-section/FAQSection";
// api
import { fatchProjectSingle } from "../../apis/commonApi";
// img
import bannerImg from "../../assets/banner/contactbanner.webp";

const ProjectsInner = () => {
  const { id } = useParams();
  const [singleProject, setSingleProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSingleProjectData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchProjectSingle(id);
        setSingleProject(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    fetchSingleProjectData();
  }, [id]);

  return (
    <>
      <Banner
        name={singleProject?.title}
        indexpage="Home"
        indexvisit="/"
        activepage={singleProject?.title}
        bgImg={
          singleProject?.banner_image
            ? {
                src: ` ${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${singleProject?.banner_image}`,
              }
            : bannerImg
        }
      />
      <Overview singleProject={singleProject} />
      {singleProject?.video_url && (
        <ProjectVideo
          projectVideo={singleProject?.video_url}
          videoThumbnail={singleProject?.video_thumbnail}
        />
      )}
      {singleProject?.slider_image?.length > 0 && (
        <ProjectSlider sliderData={singleProject?.slider_image} />
      )}
      <Details singleProject={singleProject} />
      {singleProject?.key_details?.length > 0 && (
        <MoreDetails
          title="Key Details"
          featuresData={singleProject?.key_details}
        />
      )}
      {singleProject?.gallery_image?.length > 0 && (
        <ProjectGallery galleryData={singleProject?.gallery_image} />
      )}
      {singleProject?.amenities?.length > 0 && (
        <MoreDetails
          title="Amenities"
          featuresData={singleProject?.amenities}
        />
      )}
      <AboutDeveloper
        developerData={singleProject?.developer}
        propertyType={singleProject?.property_type?.title}
        brochureUrl={singleProject?.brochure}
        propertyName={singleProject?.title}
      />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default ProjectsInner;
