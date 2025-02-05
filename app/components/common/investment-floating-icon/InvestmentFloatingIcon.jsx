import Image from "next/image";
import Link from "next/link";
import investmentIcon from "../../../assets/icons/investment.webp";
// css
import "./styles.scss";

const InvestmentFloatingIcon = () => {
  return (
    <div className="inv_floating_icon_wrape">
      <Link href="/investment" className="contact-pannel-btn">
        <figure>
          <Image
            src={investmentIcon}
            loading="lazy"
            alt="NewEdge Realty Investment"
          />
        </figure>
      </Link>
    </div>
  );
};

export default InvestmentFloatingIcon;
