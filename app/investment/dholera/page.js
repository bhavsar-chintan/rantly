import { fatchPagesContent } from "@/app/apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("dholera");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "Invest in Dholera Special Investment Region (DSIR) | Newedge Realty",
    description:
      data?.content?.seo?.meta_description ||
      "Ready to take your investment to the next level? Discover Dholera Special Investment Region (DSIR) with Newedge!",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/investment/dholera",
    },
  };
}

const Dholera = () => {
  return <PageContent />;
};

export default Dholera;
