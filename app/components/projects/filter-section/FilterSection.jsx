import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
// api
import { fatchZonesList } from "../../../apis/commonApi";
// css
import "./styles.scss";

function FilterSection({ onFilterChange, projectsData }) {
  const [allZones, setAllZones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedZone, setSelectedZone] = useState("");
  const [price, setPrice] = useState(5000000);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [propertyLocation, setPropertyLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const propertyLocations = projectsData
    .map((item) => item.property_location)
    .filter((location) => location !== null);
  const uniquePropertyLocations = [...new Set(propertyLocations)];

  useEffect(() => {
    const fetchZonesData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchZonesList();
        setAllZones(data);
        setLocations(data?.[0]?.locations || []);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchZonesData();
  }, []);

  const handleZoneChange = (e) => {
    const zoneRoute = e.target.value;
    setSelectedZone(zoneRoute);

    // Find the zone data based on the selected title
    const zone = allZones?.find((zone) => zone?.route === zoneRoute);

    // Reset the selected location & type when the zone changes
    setSelectedLocation("");
    setPrice(5000000);

    // Set the locations state based on the selected zone
    if (zone && zone?.locations.length > 0) {
      setLocations(zone?.locations);
    } else {
      setLocations([]); // No locations available for this zone
    }
  };

  // useEffect(() => {
  //   const rangeInput = document.querySelector(
  //     ".price_wrap input[type='range']"
  //   );
  //   const min = 5000000;
  //   const max = 150000000;
  //   const value = ((price - min) / (max - min)) * 100; // Calculate percentage

  //   // Apply gradient background to the slider
  //   if (rangeInput) {
  //     rangeInput.style.background = `linear-gradient(to right, #000 ${value}%, #e9ecef ${value}%)`;
  //   }
  // }, [price]);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const formatPrice = (value) => {
    if (value >= 10000000) {
      return (value / 10000000).toFixed(1) + "Cr"; // Convert to crores
    } else if (value >= 100000) {
      return (value / 100000).toFixed(1) + "L"; // Convert to lakhs
    }
    return value;
  };

  const handleApplyFilters = () => {
    onFilterChange({
      zone: selectedZone,
      location: selectedLocation,
      price: price,
      property_location: propertyLocation,
    });
  };

  return (
    <div className="project_filter_sec mt-60">
      <div className="container">
        <div className="filter_wrap">
          {uniquePropertyLocations?.length === 0 && (
            <div className="zone_wrap">
              <span className="main-label">Filter</span>
              <Form.Select
                aria-label="Zone"
                onChange={handleZoneChange}
                value={selectedZone}
              >
                <option value="" disabled>
                  Zone
                </option>
                {isLoading ? (
                  <option value="" disabled>
                    loading...
                  </option>
                ) : (
                  <>
                    {allZones?.map((zone) => (
                      <option key={zone?.id} value={zone?.route}>
                        {zone?.title}
                      </option>
                    ))}
                  </>
                )}
              </Form.Select>
            </div>
          )}
          {uniquePropertyLocations?.length > 0 ? (
            <div className="zone_wrap">
              <span className="main-label">Filter</span>
              <Form.Select
                aria-label="Location"
                onChange={(e) => setPropertyLocation(e.target.value)}
                value={propertyLocation}
              >
                <option value="" disabled>
                  Location
                </option>
                {uniquePropertyLocations?.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </Form.Select>
            </div>
          ) : (
            <div className="zone_wrap">
              <Form.Select
                aria-label="Location"
                onChange={(e) => setSelectedLocation(e.target.value)}
                value={selectedLocation}
              >
                <option value="" disabled>
                  {locations.length > 0 ? "Location" : "No Locations available"}
                </option>
                {locations.length > 0 &&
                  locations.map((location) => (
                    <option key={location.id} value={location.route}>
                      {location.title}
                    </option>
                  ))}
              </Form.Select>
            </div>
          )}
          <div className="d-flex align-items-center gap-3 price_wrap w-100">
            <span className="sub-label">Price</span>
            <Form.Range
              min={5000000}
              max={150000000}
              value={price}
              onChange={handlePriceChange}
            />
            <span className="sub-label">₹{formatPrice(price)}</span>
          </div>
          <button className="theme_btn2" onClick={handleApplyFilters}>
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
