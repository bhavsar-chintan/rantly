import { fatchPagesContent } from "../apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("developers");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "Trusted Real Estate & Property Developers | Newedge Realty India",
    description:
      data?.content?.seo?.meta_description ||
      "One-stop-shop for innovative projects and expertly crafted properties tailored to your residential and commercial needs. Newedge Realty.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/developers",
    },
  };
}

const Developers = () => {
  return <PageContent />;
};

export default Developers;
