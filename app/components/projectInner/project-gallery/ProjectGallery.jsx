import Image from "next/image";
import Slider from "react-slick";

// css
import "./style.scss";

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  lazyLoad: true,
  pauseOnHover: false,
  centerMode: true,
  centerPadding: "15%",
};

function ProjectGallery({ galleryData }) {
  return (
    <div className="project_gallery_sec mt-60">
      <Slider {...settings}>
        {galleryData?.map((item, i) => (
          <div key={i}>
            <figure>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item}`}
                alt="project gallery"
                layout="fill"
                objectFit="cover"
                // width="300"
                // height={"400"}
              />
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectGallery;
