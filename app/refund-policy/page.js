import { fatchPagesContent } from "../apis/commonApi";
import PageContent from "./PageContent";
// Generate metadata for the page
export async function generateMetadata() {
  const { data } = await fatchPagesContent("refund-policy");
  return {
    title:
      data?.content?.seo?.meta_title ||
      "Refund Policy | NewEdge Realty - Hassle-Free Real Estate Services",
    description:
      data?.content?.seo?.meta_description ||
      "Discover NewEdge Realty's clear and transparent refund policy. Learn how we ensure a seamless experience in real estate services, prioritizing customer satisfaction.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/refund-policy",
    },
  };
}

const RefundPolicy = () => {
  return (
    <div>
      <PageContent />
    </div>
  );
};
export default RefundPolicy;
