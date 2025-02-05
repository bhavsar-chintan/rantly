import { useState } from "react";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
// data
// import zoneData from "../../../db/zoneData";
// css
import "./styles.scss";

function FilterSection({ developerList, onFilterChange }) {
  const [formVal, setFormVal] = useState("");

  const handleFieldChange = (event) => {
    setFormVal(event.target.value);
  };

  const handleApplyFilters = () => {
    onFilterChange({
      developer: formVal,
    });
  };
  return (
    <div className="developer_filter_sec mt-60">
      <div className="container">
        <div className="filter_wrap">
          <div className="zone_wrap">
            <span className="main-label">Filter</span>
            <Form.Select
              aria-label="Location"
              value={formVal}
              onChange={(e) => handleFieldChange(e)}
            >
              <option value="">Developer</option>
              {developerList?.map((dev) => (
                <option key={dev?.route} value={dev?.route}>
                  {dev?.name}
                </option>
              ))}
            </Form.Select>
          </div>
          {/* <div className="d-flex align-items-center gap-3 w-100">
            <Form.Select aria-label="Location">
              <option>Developer</option>
              <option value="Developer 1">Developer 1</option>
              <option value="Developer 2">Developer 2</option>
              <option value="Developer 3">Developer 3</option>
              <option value="Developer 4">Developer 4</option>
            </Form.Select>
          </div>
          <div className="d-flex align-items-center gap-3 w-100">
            <Form.Select aria-label="Location">
              <option>Project</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="pre-leased">Pre-Leased</option>
              <option value="farmhouse">Farmhouse</option>
            </Form.Select>
          </div> */}
          <button className="theme_btn2" onClick={handleApplyFilters}>
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
