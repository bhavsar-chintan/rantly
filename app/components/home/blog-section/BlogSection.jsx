import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import moment from "moment";
import { Container } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// img
import blogImg from "../../../assets/blog/blog1.webp";
// api
import { fetchBlogData } from "../../../apis/commonApi";
// css
import "./style.scss";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 800,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const BlogSection = () => {
  const router = useRouter();
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBlogListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchBlogData();
        setBlogData(data?.slice(0, 5));
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchBlogListData();
  }, []);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };
  const showArrows = blogData?.length > settings.slidesToShow;

  const PrevArrow = () => (
    <button
      className="slider_custom2_arrows"
      onClick={previousSlide}
      disabled={currentSlide === 0}
    >
      <FaAngleLeft fontSize={"24px"} />
    </button>
  );

  const NextArrow = () => (
    <button
      className="slider_custom2_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= blogData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  const imgeGenerate = (item) => {
    if (item?.feature_image) {
      return `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.feature_image}`;
    } else {
      return blogImg;
    }
  };
  return (
    <div className="mt-60 blog-sec-area">
      <Container>
        <div className="header_wrap">
          <div>
            <span className="tag_line">Explore</span>
            <h3 className="main_sec_heading">BLOGS & ARTICLES</h3>
          </div>
          <div className="desktop_view">
            <button
              className="theme_btn2"
              onClick={() => router.push("/blogs")}
            >
              See More
            </button>
          </div>
        </div>
        {isLoading ? (
          <p className="para_comm text-center">loading...</p>
        ) : (
          <Slider
            {...settings}
            ref={sliderRef}
            afterChange={(index) => setCurrentSlide(index)}
          >
            {blogData?.map((item, i) => (
              <div className="blog_item" key={item?.id}>
                <figure>
                  <Image
                    src={
                      item?.feature_image
                        ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.feature_image}`
                        : blogImg
                    }
                    layout="fill"
                    objectFit="cover"
                    // width="100"
                    // height={"100"}
                    alt={item?.title}
                  />
                  <span className="date">
                    {moment(item?.date)?.format("MMMM D")}
                  </span>
                </figure>
                <div>
                  {/* <p className="para_comm">{item?.category}</p> */}
                  <h3
                    className="sub_heading"
                    onClick={() => router.push(`/blog/${item?.route}`)}
                  >
                    {item?.title}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        )}
        <div className="mobile_view">
          <button className="theme_btn2" onClick={() => router.push(`/blogs`)}>
            See More
          </button>
        </div>
        {/* {showArrows && (
          <div>
            <PrevArrow />
            <NextArrow />
          </div>
        )} */}
      </Container>
    </div>
  );
};

export default BlogSection;
