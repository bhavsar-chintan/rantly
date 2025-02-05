import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("ahmadabad");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "Buy Property in Ahmedabad with Newedge | Expert Real Estate Solutions",
    description:
      data?.content?.seo?.meta_description ||
      "Looking to buy property in Ahmedabad? Newedge provides SEO-optimized listings, market insights, and expert advice for residential and commercial investments.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/investment/ahmadabad",
    },
  };
}

const Ahmadabad = () => {
  return <PageContent />;
};

export default Ahmadabad;
