"use client"
import Image from "next/image";
import whatsappgif from "../../../assets/icons/whatsapp1.webp";
// css
import "./styles.scss";

const FloatingIcon = () => {
  return (
    <div className="floating_icon_wrape">
      <a
        href={"https://wa.me/919825003080"}
        className="contact-pannel-btn text-decoration-none"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <figure>
          <Image src={whatsappgif} loading="lazy" alt="whatsapp" />
        </figure>
      </a>
    </div>
  );
};

export default FloatingIcon;
