import Image from "next/image";
import { useRouter } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
// img
import blogImg from "../../assets/blog/blog1.webp";
// css
import "./style.scss";

const BlogList = ({ blogsList, isLoading }) => {
  const router = useRouter();

  return (
    <div className="mt-60 blog-list-area">
      <Container>
        <div className="header_wrap">
          <div>
            <span className="tag_line">Explore</span>
            <h3 className="main_sec_heading">LATEST BLOGS</h3>
          </div>
          {/* <div className="desktop_view">
            <div className=" d-flex flex-wrap gap-3">
              <button className="theme_btn3 active">All</button>
              <button className="theme_btn3">Residential</button>
              <button className="theme_btn3">Commercial</button>
            </div>
          </div> */}
        </div>
        {/* <div className="mobile_view">
          <div className=" d-flex flex-wrap justify-content-center gap-3">
            <button className="theme_btn3 active">All</button>
            <button className="theme_btn3">Residential</button>
            <button className="theme_btn3">Commercial</button>
          </div>
        </div> */}
        {isLoading ? (
          <p className="para_comm text-center">loading...</p>
        ) : (
          <Row className="gy-5 gx-lg-2">
            {blogsList?.map((blog) => (
              <Col md={6} lg={4} key={blog?.id}>
                <div className="blog_item">
                  <figure>
                    <Image
                      src={
                        blog?.feature_image
                          ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                            blog?.feature_image
                          : blogImg
                      }
                      layout="fill"
                      objectFit="cover"
                      alt={blog?.title}
                    />
                    <span className="date">
                      {moment(blog?.date)?.format("MMMM D")}
                    </span>
                  </figure>
                  <div>
                    {/* <p className="para_comm">{blog?.category}</p> */}
                    <h3
                      className="sub_heading"
                      onClick={() => router.push(`/blog/${blog?.route}`)}
                    >
                      {blog?.title}
                    </h3>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default BlogList;
