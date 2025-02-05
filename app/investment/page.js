import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Land Investment Opportunities with Newedge | Grow Your Wealth",
    description:
      "Unlock the potential of land investment with Newedge. Explore premium land deals, expert guidance, and strategic insights to maximize your returns.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/investment",
    },
  };
}

const Investment = () => {
  return <PageContent />;
};

export default Investment;
