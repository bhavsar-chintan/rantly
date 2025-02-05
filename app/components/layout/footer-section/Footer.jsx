"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/logo/logo.svg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// api
import { fatchPagesContent } from "../../../apis/commonApi";
// css
import "./style.scss";

const Footer = () => {
  const [contactData, setContactData] = useState({});

  const getPageData = async () => {
    try {
      const resp = await fatchPagesContent("contact");
      setContactData(resp?.data?.content?.info);
    } catch (err) {
      console.log("Err: ", err);
    }
  };
  useEffect(() => {
    getPageData();
  }, []);
  return (
    <div className="mt-60 footer-area">
      <div className="ptb-60">
        <Container>
          <Row className="gy-5 gy-lg-0">
            <Col sm={12} md={6} lg={4}>
              <Image src={logo} alt="logo" className="footer-img" />
            </Col>
            <Col xs={12} sm={6} md={6} lg>
              <h3>Projects</h3>
              <ul>
                <li>
                  <Link href="/residential">Residential</Link>
                </li>
                <li>
                  <Link href="/commercial">Commercial</Link>
                </li>
                <li>
                  <Link href="/pre-leased">Pre-Leased</Link>
                </li>
                <li>
                  <Link href="/farmhouse">Farmhouse</Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={6} lg>
              <h3>Company</h3>
              <ul>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/faqs">Faqs</Link>
                </li>
                <li>
                  <Link href="/investment">Investment</Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={6} lg>
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href={`tel:${contactData?.phone?.replace(/\s+/g, "")}`}>
                    {contactData?.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contactData?.email}`}>
                    {contactData?.email}
                  </a>
                </li>
                <li>{contactData?.address}</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={6} lg>
              <h3>Join Our Social Media</h3>
              <ul className="d-flex gap-3 align-items-center social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/newedgerealty"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook fontSize="22px" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/newedgerealty"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram fontSize="22px" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/newedge_realty"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter fontSize="22px" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/newedgerealty"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin fontSize="22px" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className="footer-bottom py-4">
          <p>
            RERA Reg. No.: AG/GJ/AHMEDABAD/AHMADABAD CITY/AUDA/AA00128/060228R2
          </p>
          <div>
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/privacy-policy" className="ms-3">
              Privacy Policy
            </Link>
            <Link href="/terms-and-condition" className="ms-3">
              Terms & Condition
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
