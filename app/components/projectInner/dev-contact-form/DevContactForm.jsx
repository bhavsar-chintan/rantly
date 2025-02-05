import { useState } from "react";
import { Button, Col, Modal, Form, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
// css
import "./styles.scss";
import { postDeveloperContact } from "@/app/apis/commonApi";

const initailObject = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  property_name: "",
  message: "",
};
const DevContactForm = ({ show, handleClose, propertyType, propertyName }) => {
  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);
  const [mobileValue, setMobileValue] = useState("");
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null); // Store reCAPTCHA token

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user starts typing again
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
    setErrors({ ...errors, captcha: "" }); // Clear CAPTCHA error on success
  };

  const PostFormContactFormData = async (updatedData, form) => {
    const payload = {
      first_name: updatedData?.first_name,
      last_name: updatedData?.last_name,
      phone: updatedData?.phone,
      email: updatedData?.email,
      property_name: propertyName,
      message: updatedData?.message,
    };

    try {
      const response = await postDeveloperContact(payload);
      if (response?.status == 200 || response?.status == 201) {
        // Submit to Salesforce Web-to-Lead form
        form.submit();
        setLoading(false);
        setMobileValue("");
        setFormValues({ ...initailObject });
        handleClose();
      }
    } catch (err) {
      setLoading(false);
      console.error("Error contact form:", err);
      toast.error("Something Went wrong!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email, phone, message } = formValues;
    const errors = {};
    if (!first_name) {
      errors.first_name = "Please Enter First Name.";
    } else if (!last_name) {
      errors.last_name = "Please Enter Last Name.";
    } else if (!mobileValue) {
      errors.phone = "Please Enter Phone Number.";
    } else if (!email) {
      errors.email = "Please Enter Email.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address.";
    } else if (!message) {
      errors.message = "Please Enter Message.";
    } else if (!captchaToken) {
      errors.captcha = "Please complete the CAPTCHA.";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
      return;
    }

    const form = e.target;
    let updatedData = {
      ...formValues,
      phone: mobileValue,
      recordType: propertyType,
    };
    PostFormContactFormData(updatedData, form);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="md"
      centered
      className="dev-contact-form-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          className="dev_form_sec"
          action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D9I000001Clyf"
          method="POST"
          onSubmit={handleSubmit}
        >
          <p className="para_comm">Fill the below form to contact us:</p>
          {/* Hidden Salesforce fields */}
          <input type="hidden" name="oid" value="00D9I000001Clyf" />
          <input
            type="hidden"
            name="retURL"
            value="https://newedge-realty-next.vercel.app/thankyou.html"
          />
          {/* <input type="hidden" name="debug" value="1" />
      <input type="hidden" name="debugEmail" value="chetan@newedgerealty.in" /> */}
          <input
            type="hidden"
            id="lead_source"
            name="lead_source"
            value="Website"
          />
          {/* Hidden field to pass  values */}
          <input type="hidden" id="phone" name="phone" value={mobileValue} />
          <input
            type="hidden"
            id="00N9I000000vPGD"
            name="00N9I000000vPGD"
            value={formValues?.recordType}
          />
          <input
            type="hidden"
            id="00N9I000000s9nt"
            name="00N9I000000s9nt"
            alue={formValues?.property_name}
          />
          <input
            type="hidden"
            id="00N9I000000s9eD"
            name="00N9I000000s9eD"
            alue={formValues?.message}
          />
          <Row className="g-0 gx-lg-2">
            <Col lg={6}>
              <Form.Group controlId="first_name" className="mb-3">
                <Form.Control
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formValues.first_name}
                  onChange={handleInputChange}
                  placeholder="First Name"
                />
                <p className="mt-2 form_error_msg">{errors?.first_name}</p>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId="last_name" className="mb-3">
                <Form.Control
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formValues.last_name}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                />
                <p className="mt-2 form_error_msg">{errors?.last_name}</p>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <div className="mb-3">
                <PhoneInput
                  country="in"
                  value={mobileValue}
                  onChange={setMobileValue}
                  enableSearch={true}
                  disableSearchIcon={true}
                />
                <p className="mt-2 form_error_msg">{errors?.phone}</p>
              </div>
            </Col>
            <Col lg={6}>
              <Form.Group controlId="email" className="mb-3">
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
                <p className="mt-2 form_error_msg">{errors?.email}</p>
              </Form.Group>
            </Col>
            <Col lg={12}>
              <Form.Group controlId="message" className="mb-3">
                <Form.Control
                  as="textarea"
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={4}
                  style={{ resize: "none" }}
                />
                <p className="mt-2 form_error_msg">{errors?.message}</p>
              </Form.Group>
            </Col>
            <Col sm={12}>
              {/* Google reCAPTCHA */}
              <div className="mb-4">
                <ReCAPTCHA
                  sitekey="6LcV_WoqAAAAAF1KC63Gc6Rk0dYnogvW_4uiwe_w" // Add your site key here
                  onChange={onCaptchaChange}
                />
                <p className="mt-2 form_error_msg">{errors?.captcha}</p>
              </div>
            </Col>
            <Col sm={12}>
              <div className="text-center">
                <Button className="theme_btn2" disabled={loading} type="submit">
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DevContactForm;
