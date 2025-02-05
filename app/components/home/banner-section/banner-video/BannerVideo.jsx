import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const BannerForm = dynamic(() => import("../banner-form/BannerForm"));
// import BannerForm from "../banner-form/BannerForm";
// data
import { homeData } from "../../../../db/homeData";
// css
import bannerImg1 from "@/app/assets/banner/homebanner1.webp";

import "./styles.scss";

const BannerVideo = ({ content, setShowForm, showForm }) => {
  const { bannerData } = homeData;
  const router = useRouter();
  const videoRef = useRef(null);
  const [loadForm, setLoadForm] = useState(false);

  const autoPlay = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      setTimeout(() => {
        video.play();
      }, 2000);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // setLoadForm(true);
    }, 2000);
    if (content?.video_url) {
      autoPlay();
    }
  }, [content?.video_url]);

  return (
    <div
      className="banner-video-area"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${content?.thumbnail})`,
        backgroundSize: "cover",
      }}
    >
      {content?.video_url ? (
        <video
          // id="myVideo"
          autoPlay
          loop
          muted
          className="banner_video"
          playsInline
          webkit-playsinline="true"
          fetchPriority="high"
          // poster={bannerData?.bg}
          poster={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + content?.thumbnail}
          ref={videoRef}
        >
          <source
            src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + content?.video_url}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : null}

      {/* Add content you want to display on top of the video */}
      <div className="container" fetchPriority="high">
        <div className="banner-content mtb-60">
          <div className="bannerDetails">
            <div className="content_wrap">
              <span className="tag_line">{bannerData?.tagLine}</span>
              <h1>
                {content?.title
                  ? content?.title
                  : "Trusted Solutions for Businesses, Projects, and Homeowners Since 1997"}
              </h1>
              <button
                className="theme_btn"
                onClick={() => router.push(bannerData?.link)}
              >
                Learn More
              </button>
              {loadForm ? null : (
                <button
                  className="theme_btn serchBTN DesktopBTNTHEME"
                  onClick={() => setLoadForm(true)}
                >
                  Search Property
                </button>
              )}
              {showForm ? null : (
                <button
                  className="theme_btn MobileBTNTHEME"
                  onClick={() => setShowForm(true)}
                >
                  Search Property
                </button>
              )}
            </div>
            <div className="banner_form_wrap form_desktop_view">
              {loadForm && <BannerForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
