import React from "react";
import { AlertProvider } from "../utils";
import Navbar from "../components/Navbar";
import ContactForm from "./components/ContactForm";
import "./styles/contact.css";

function ContactPage() {
  return (
    <div>
      <Navbar active="contact" />
      <div className="contact-container">
        <div className="contact-header">Contact Us</div>
        <div className="contact-subheader">Let's Get in Touch.</div>
        <div className="contact-body">
          <AlertProvider>
            <ContactForm />
          </AlertProvider>
          <div className="contact-info">
            <div className="contact-info-header">Contact Info</div>
            <div className="email-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="email-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <div className="contact-email">khourydesignpermits@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
