import Projects from "../components/projects/Projects";

// Generate metadata for the page
export async function generateMetadata() {
  return {
    title:
      "Luxury Farmhouse Retreats in India | Tranquil Getaways| Newedge Realty",
    description:
      "Discover exquisite luxury farmhouses in India, where serene landscapes meet modern comforts. Perfect for investment.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/farmhouse",
    },
  };
}

export default function FarmHouse() {
  return <Projects />;
}
