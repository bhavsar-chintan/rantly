import PageContent from "./pageContent";
import { fatchPagesContent } from "../apis/commonApi";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("about");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "Newedge Property Management Services | Trusted Real Estate Agency",
    description:
      data?.content?.seo?.meta_description ||
      "Newedge, is your trusted real estate agency specializing in property management. We maximize your property's value with tailored solutions and exceptional service.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/about",
    },
  };
}

const About = () => {
  return <PageContent />;
};

export default About;
