import { useRouter } from "next/navigation";
import { Container } from "react-bootstrap";
// css
import "./style.scss";

const ContactSection = ({ appointmentData }) => {
  const router = useRouter();
  return (
    <Container>
      <div className="mt-60 appointment-sec-area">
        <div className="content_sec ptb-60">
          <h2 className="main_sec_heading">{appointmentData?.title}</h2>
          <p className="para_comm">{appointmentData?.detail}</p>
          <button className="theme_btn" onClick={() => router.push(`/contact`)}>
            Book Appointment
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
