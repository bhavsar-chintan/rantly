import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/custom.scss";
import "./globals.scss";

// Load the Poppins font with specific weights
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export async function generateMetadata() {
  // Logic to set title and description based on route or props
  return {
    title: "Newedge Realty Affordable Housing | Property at Exciting Rates",
    description:
      "Prime commercial properties for sale, affordable housing options, and office spaces for rent with Newedge Realty! Get yours now!",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
      // className={`${geistPoppinsRegular.variable} ${geistPoppinsSemiBold.variable} ${geistPoppinsMedium.variable} ${geistPoppinsBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
