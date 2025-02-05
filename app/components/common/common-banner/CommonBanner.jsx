import Link from "next/link";
import { BsDash } from "react-icons/bs";
import { Container } from "react-bootstrap";
// css
import "./styles.scss";

const CommonBanner = ({ bgImg, name, indexvisit, indexpage, activepage }) => {
  return (
    <div
      className="common_banner_area"
      style={{ backgroundImage: `url(${bgImg.src})`, height: !name && "250px" }}
    >
      <Container>
        <div className="common_banner_content">
          <ul
            className={`list-unstyled d-flex justify-content-start align-items-center ${
              !name && "mb-5"
            }`}
          >
            <li>
              <Link href={indexvisit}> {indexpage} </Link>
            </li>
            <li>
              <BsDash />
            </li>
            <li>{activepage}</li>
          </ul>
          {name && <h1>{name}</h1>}
        </div>
      </Container>
    </div>
  );
};
export default CommonBanner;
