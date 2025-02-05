import { fatchPagesContent } from "../apis/commonApi";
import PageContent from "./PageContent";
// Generate metadata for the page
export async function generateMetadata() {
  const { data } = await fatchPagesContent("terms-and-condition");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "Terms and Conditions | NewEdge Realty - Trusted Real Estate Partner",
    description:
      data?.content?.seo?.meta_description ||
      "Read NewEdge Realty's terms and conditions. We offer a trustworthy and transparent real estate service that puts your interests first in every transaction.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/terms-and-condition",
    },
  };
}

const TermsCondition = () => {
  return (
    <div>
      <PageContent />
    </div>
  );
};
export default TermsCondition;
