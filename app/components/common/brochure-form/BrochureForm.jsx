import { useState, useRef } from "react";
import { Button, Col, Modal, Form, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
// api
import { postBrochureForm } from "../../../apis/commonApi";

// fr
import { auth } from "@/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// css
import "./styles.scss";

const initailObject = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  property_name: "",
};

const BrochureForm = ({
  show,
  handleClose,
  brochureLink,
  propertyType,
  propertyName,
}) => {
  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);
  const [mobileValue, setMobileValue] = useState("");
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null); // Store reCAPTCHA token
  const pdfDownloadLink = useRef(null); // Ref for hidden download link
  const [FormDataSent, setFormDataSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [isOtpVerify, setIsOtpVerify] = useState(false);
  const [isFileDownloading, setIsFileDownloading] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
    setErrors({ ...errors, captcha: "" }); // Clear CAPTCHA error on success
  };

  // firebase auth otp
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // onSignUp();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  async function sentOTP(phoneNumber) {
    let UserPhone = phoneNumber
      .replace(/\s+/g, "")
      .replace(/-/g, "")
      .replace(/[()]/g, "");

    await onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, `+${UserPhone}`, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setFormDataSent(true);
        toast.success("OTP Sent on Phone!", {
          autoClose: 3000,
        });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(
          error?.message + " OTP cant be sent" || "Error Sending OTP",
          {
            autoClose: 3000,
          }
        );

        console.log("OTP Sending... Error", error);
      });
  }

  function OtpVerify() {
    setIsOtpVerify(true);
    if (otpCode?.length < 6) {
      toast.error("Enter a valid OTP", {
        autoClose: 3000,
      });
      setIsOtpVerify(false);

      return;
    }
    let confirmationResult = window.confirmationResult;
    if (confirmationResult) {
      confirmationResult
        .confirm(otpCode)
        .then(async (result) => {
          console.log("Result: ", result);
          const user = result.user;
          setIsOtpVerify(false);

          toast.success("OTP Verified, Downloading File", {
            autoClose: 3000,
          });

          setIsFileDownloading(true);
          currentForm.submit();
          setLoading(false);
          setCaptchaToken(null);
          setFormValues({ ...initailObject });
          setMobileValue("");
          setFormValues({ ...initailObject });
          pdfDownloadLink.current.click(); // Simulate click to download PDF

          setIsFileDownloading(false);
          handleClose();

          return result;
        })
        .catch((error) => {
          console.log("🚀 ~ OtpVerify ~ error:", error);
          toast.error("OTP Verification Error, Please try again!", {
            autoClose: 3000,
          });
          setIsOtpVerify(false);
        });
    }
  }

  const PostBrochureData = async (updatedData, form) => {
    const payload = {
      first_name: updatedData?.first_name,
      last_name: updatedData?.last_name,
      phone: updatedData?.phone,
      email: updatedData?.email,
      property_name: propertyName,
    };
    try {
      const response = await postBrochureForm(payload);
      if (response?.status == 200 || response?.status == 201) {
        // Submit to Salesforce Web-to-Lead form
        console.log("Payload: ", payload);
        // form.submit();
        await sentOTP(payload?.phone);

        // setFormValues({ ...initailObject });

        // setFormValues({ ...initailObject });
        // toast.success("Data has been Submitted Successfully!");
        // pdfDownloadLink.current.click(); // Simulate click to download PDF
        // handleClose();
      }
    } catch (err) {
      setLoading(false);
      console.error("Error contact form:", err);
      toast.error("Something Went wrong!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email } = formValues;
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
    } else if (!captchaToken) {
      errors.captcha = "Please complete the CAPTCHA.";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
      return;
    }

    const form = e.target;
    setCurrentForm(form);

    let updatedData = {
      ...formValues,
      phone: mobileValue,
      recordType: propertyType,
    };
    setLoading(true);
    PostBrochureData(updatedData, form);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="md"
      centered
      className="brochure-form-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Download Brochure</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D9I000001Clyf"
          method="POST"
          className="brochure_form_sec"
          onSubmit={handleSubmit}
        >
          {FormDataSent ? (
            <p className="para_comm">OTP Sent to: +{mobileValue}</p>
          ) : (
            <p className="para_comm">Fill the below form to get your copy.</p>
          )}
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
          {FormDataSent ? (
            <>
              <Row>
                <Col lg={12}>
                  <Form.Group controlId="otp" className="mb-3">
                    <Form.Control
                      type="number"
                      id="otp_code"
                      name="otp_code"
                      onChange={(e) => setOtpCode(e.target.value)}
                      placeholder="000000"
                      style={{
                        textAlign: "center",
                        fontSize: "18px",
                        letterSpacing: "5px",
                      }}
                    />
                  </Form.Group>
                </Col>
                {isFileDownloading ? <Col xs={12}>Downloading...</Col> : null}
                <Col sm={12}>
                  <div className="text-center">
                    <Button
                      className="theme_btn2"
                      disabled={isOtpVerify}
                      onClick={() => OtpVerify()}
                    >
                      {isOtpVerify ? "Verifying..." : "Verify"}
                    </Button>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
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
                  <Button
                    className="theme_btn2"
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </Col>
            </Row>
          )}
          <div id="recaptcha-container"></div>
          {/* Hidden link for PDF download */}
          <a
            ref={pdfDownloadLink}
            href={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${brochureLink}`}
            download="Brochure.pdf"
            target="_blank"
            style={{ display: "none" }}
          >
            Download Brochure
          </a>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BrochureForm;
