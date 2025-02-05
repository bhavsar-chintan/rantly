"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Container,
  Offcanvas,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../../assets/logo/logo.svg";
import blacklogo from "../../../assets/logo/blacklogo.svg";
import { FaAngleRight } from "react-icons/fa";
// css
import "./style.scss";

const MainNavbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeToggler = () => {
    setShowOffcanvas(false); // Use state to control the visibility of the Offcanvas
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`navbar-area ${scrolled ? "sticky-top" : "fixed-top"}`}
      >
        <Container>
          <Navbar.Brand as={Link} href="/" className="d-lg-none">
            <Image src={logo} alt="logo" width="180px" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            onClick={() => setShowOffcanvas(true)} // Open the offcanvas on click
          />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={closeToggler} // Close on hide
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <Image src={blacklogo} alt="logo" width="180px" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <NavDropdown
                  title="Projects"
                  id="about-dropdown"
                  className="about_dropdown"
                >
                  <NavDropdown.Item
                    as={Link}
                    onClick={closeToggler}
                    href="/residential"
                    className={`nav-drop-link ${
                      pathname === "/residential" ? "active" : ""
                    }`}
                  >
                    Residential <FaAngleRight className="angle-arrow" />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    onClick={closeToggler}
                    href="/commercial"
                    className={`nav-drop-link ${
                      pathname === "/commercial" ? "active" : ""
                    }`}
                  >
                    Commercial <FaAngleRight className="angle-arrow" />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    onClick={closeToggler}
                    href="/pre-leased"
                    className={`nav-drop-link ${
                      pathname === "/pre-leased" ? "active" : ""
                    }`}
                  >
                    Pre-Leased <FaAngleRight className="angle-arrow" />
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    onClick={closeToggler}
                    href="/farmhouse"
                    className={`nav-drop-link ${
                      pathname === "/farmhouse" ? "active" : ""
                    }`}
                  >
                    Farmhouse <FaAngleRight className="angle-arrow" />
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  onClick={closeToggler}
                  as={Link}
                  href="/developers"
                  className={`nav-item ${
                    pathname === "/developers" ? "active" : ""
                  }`}
                >
                  Developers
                </Nav.Link>
                <Nav.Link
                  onClick={closeToggler}
                  as={Link}
                  href="/locations"
                  className={`nav-item ${
                    pathname === "/locations" ? "active" : ""
                  }`}
                >
                  Locations
                </Nav.Link>
              </Nav>
              <Navbar.Brand
                as={Link}
                href="/"
                className="mx-auto d-none d-lg-block"
              >
                <Image src={logo} alt="logo" width="180px" />
              </Navbar.Brand>
              <Nav>
                <Nav.Link
                  onClick={closeToggler}
                  as={Link}
                  href="/about"
                  className={`nav-item ${
                    pathname === "/about" ? "active" : ""
                  }`}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  onClick={closeToggler}
                  as={Link}
                  href="/investment"
                  className={`nav-item ${
                    pathname === "/investment" ? "active" : ""
                  }`}
                >
                  Investment
                </Nav.Link>
                <Nav.Link
                  onClick={closeToggler}
                  as={Link}
                  href="/contact"
                  className={`nav-item ${
                    pathname === "/contact" ? "active" : ""
                  }`}
                >
                  Contact Us
                </Nav.Link>
                {/* <Nav.Link
                  onClick={closeToggler}
                  as={Link}
                  href="/blogs"
                  className={`nav-item ${
                    pathname === "/blogs" ? "active" : ""
                  }`}
                >
                  Blogs
                </Nav.Link> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
