import { fatchPagesContent } from "../apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("faqs");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "Commercial Property for Sale| Newedge Realty India| FAQs",
    description:
      data?.content?.seo?.meta_description ||
      "Got questions about buying commercial real estate? Our FAQs provide quick answers on property for sale, financing options, zoning regulations, and the purchasing process.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/faqs",
    },
  };
}

const Faqs = () => {
  return <PageContent />;
};

export default Faqs;
