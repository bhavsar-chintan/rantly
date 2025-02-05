import { fatchDeveloperSingle } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { id } = params;
  const { data } = await fatchDeveloperSingle(id);

  return {
    title:
      data?.content?.seo?.meta_title || "Newedge Property Management Services",
    description:
      data?.content?.seo?.meta_description ||
      "Newedge, is your trusted real estate agency specializing in property management. We maximize your property's value with tailored solutions and exceptional service.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/developers",
    },
  };
}

const DeveloperInner = () => {
  return <PageContent />;
};

export default DeveloperInner;
