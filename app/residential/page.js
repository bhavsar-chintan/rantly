import Projects from "../components/projects/Projects";

// Generate metadata for the page
export async function generateMetadata() {
  return {
    title: "Luxury Homes for Sale | Exclusive Listings by Newedge Realty",
    description:
      "Make your dream home come true with Newedge Realty. Browse from list of exquisite designs and world-class amenities.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/residential",
    },
  };
}

export default function Residential() {
  return <Projects />;
}
