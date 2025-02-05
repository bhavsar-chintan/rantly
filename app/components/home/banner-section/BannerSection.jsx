import Image from "next/image";
import { useRouter } from "next/navigation";
import Slider from "react-slick";

import BannerForm from "./banner-form/BannerForm";
// css
import "./styles.scss";

const settings = {
  dots: true,
  infinite: true,
  fade: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2600,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
  pauseOnHover: true,
};

const BannerSection = () => {
  const router = useRouter();

  return (
    <div className="HomeBanner">
      <Slider {...settings}>
        {[1, 2, 3]?.map((item) => (
          <div key={item?.id} className="bannerWrapper">
            <Image src={item?.bg} alt="banner" />
            <div className="bannerDetails">
              <div className="content_wrap">
                <span className="tag_line">
                  Your One-Stop Real Estate & Property Consultancy
                </span>
                <h1>
                  Trusted Solutions for Businesses, Projects, and Homeowners
                  Since 1997
                </h1>
                <button className="theme_btn" onClick={() => router.push("/")}>
                  Learn More
                </button>
              </div>
              <div className="banner_form_wrap form_desktop_view">
                <BannerForm />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSection;
