import React, { useRef, useState } from "react";
import { useAlert, AlertDisplay } from "../../utils";
import { validateEmail, sendEmail, reCaptchaValidator } from "./utils";
import Spinner from "react-bootstrap/Spinner";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [alert, setAlert] = useAlert("");
  const [alertType, setAlertType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const reRef = useRef()

  async function onSubmit(event) {
    event.preventDefault();

    const name = event.target.elements[0].value;
    const email = event.target.elements[1].value;
    const message = event.target.elements[2].value;

    if (!validateEmail(email) || !name || !message) {
      setAlertType("error");
      setAlert("Email and/or other fields may be invalid!");
      return
    }

    const captchaResult = await reCaptchaValidator(reRef)

    if (!captchaResult.captcha.success) {
      setAlertType("error");
      setAlert("Unable to send email!");
      return
    }
    
    setIsLoading(true);
    const result = await sendEmail(name, email, message);
    setIsLoading(false);

    if (result) {
      setAlertType("success");
      setAlert("Email was successfully sent!");
    } else {
      setAlertType("error");
      setAlert("Email failed to send!");
      return
    }
  }

  return (
    <form className="contact-fields" onSubmit={onSubmit}>
      <AlertDisplay alert={alert} alertType={alertType} />
      <div className="general-info">
        <input type="text" className="name" placeholder="Enter your name..." />
        <input
          type="text"
          className="email"
          placeholder="Enter your email..."
        />
      </div>
      <div className="message-container">
        <textarea
          cols="30"
          rows="10"
          className="message-field"
          placeholder="Type out your message..."
        ></textarea>
      </div>
      {isLoading ? (
        <Spinner
          animation="border"
          role="status"
          style={{ marginTop: "10px", width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <button className="submit-btn">Submit</button>
      )}
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
        size="invisible"
        ref={reRef}
      />
    </form>
  );
}

export default ContactForm;
