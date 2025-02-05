import { fatchPagesContent } from "../apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("contact");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "Contact real estate agents India| Newedge Realty| Property India",
    description:
      data?.content?.seo?.meta_description ||
      "Contact Newedge real estate agents India for reliable real estate services in India. Connect with experienced agents and offices to efficiently buy, sell, or rent properties.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/contact",
    },
  };
}

const Contact = () => {
  return <PageContent />;
};

export default Contact;
