import { fatchPagesContent } from "../apis/commonApi";
import PageContent from "./pageContent";

export async function generateMetadata() {
  const { data } = await fatchPagesContent("blogs");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "Real Estate Market Trends & Analysis | Newedge Blog",
    description:
      data?.content?.seo?.meta_description ||
      "Stay updated with real estate blogs on market trends, in-depth analysis, and expert insights. Get valuable tips to navigate the property landscape with Newedge.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/blogs",
    },
  };
}

const Blog = () => {
  return <PageContent />;
};

export default Blog;
