import { Container } from "react-bootstrap";
import { FaBath, FaBed, FaChartArea } from "react-icons/fa";
import { PiLineVertical } from "react-icons/pi";
// css
import "./styles.scss";

const Overview = ({ singleProject }) => {
  return (
    <div className="overview_sec mt-60">
      <Container>
        <div className="overview_wrap">
          <div>
            <h2 className="main_sec_heading">{singleProject?.title}</h2>
            {!singleProject?.property_location && (
              <p className="para_comm mb-3">
                <strong>Location:</strong> {singleProject?.zone?.title},{" "}
                {singleProject?.location?.title}
              </p>
            )}
            {singleProject?.property_sub_type && (
              <p className="para_comm">{singleProject?.property_sub_type}</p>
            )}
            {singleProject?.company_type && (
              <p className="para_comm">
                <strong>Company Type:</strong> {singleProject?.company_type}
              </p>
            )}
            {singleProject?.property_location && (
              <p className="para_comm mb-3">
                <strong>Location:</strong> {singleProject?.property_location}
              </p>
            )}
            {singleProject?.area && (
              <p className="para_comm mb-3">
                <strong>Area Size:</strong> {singleProject?.area}
              </p>
            )}
            {/* <ul>
              <li>
                {singleProject?.location?.title},{" "}
                {singleProject?.zone?.title}
              </li>
              <li>
                <PiLineVertical />
              </li>
              <li>For Rent</li>
              <li>
                <PiLineVertical />
              </li>
              <li>2 Years Ago</li>
            </ul>
            <ul>
              <li>
                <FaBed /> 2 bed
              </li>
              <li>
                <FaBath /> 1 bath
              </li>
              <li>
                <FaChartArea /> 1200sqft
              </li>
            </ul> */}
          </div>
          <div className="price_wrap">
            {singleProject?.price && (
              <h4>
                <span>Starting from</span> ₹{singleProject?.price}
              </h4>
            )}
            {singleProject?.project_status && (
              <p className="para_comm mb-3">
                <strong>Project Status:</strong> {singleProject?.project_status}
              </p>
            )}
            {singleProject?.rera_no && (
              <p className="para_comm">
                <strong>RERA No:</strong> {singleProject?.rera_no}
              </p>
            )}
            {singleProject?.lease_duration && (
              <p className="para_comm mb-3">
                <strong>Lease Duration:</strong> {singleProject?.lease_duration}
              </p>
            )}
            {singleProject?.monthly_rent && (
              <p className="para_comm mb-3">
                <strong>Monthly Rent:</strong> {singleProject?.monthly_rent}
              </p>
            )}
            {singleProject?.roi && (
              <p className="para_comm mb-3">
                <strong>ROI%:</strong> {singleProject?.roi}
              </p>
            )}
            {singleProject?.tagline && (
              <p className="para_comm mb-3">{singleProject?.tagline}</p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Overview;
