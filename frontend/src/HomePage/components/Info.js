import React from "react";
import "./styles/info.css";

function Info() {
  return (
    <div>
      <div className="container">
        <img
          src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
          alt=""
          className="provide-img"
        />
        <div className="provide-text-container">
          <div className="header">What We Provide</div>
          <div className="subheader">Our Projects Include:</div>
          <ul className="items">
            <li>Additions and Renovations</li>
            <li>Custom Home Designs</li>
            <li>Basement Second Suites & Underpinning</li>
            <li>Accessory Buildings & garages</li>
            <li>Laneway Suites</li>
            <li>Garden Suites</li>
            <li>Interior design</li>
            <li>Exterior Landscapes</li>
            <li>Decks</li>
          </ul>
        </div>
      </div>

      <div className="process-container container">
        <div className="process-text-container">
          <div className="process-header">
            Our Simple and Clear Process
          </div>
          <div className="process-subheader">
            From Design to Building Permits:
          </div>
          <div className="process-items items">
            <li>
              We provide fast services and very reasonable fees, and we work
              with your deadlines to ensure on-time delivery.
            </li>
            <li>
              With our knowledge and years of experience, our professional
              designers & engineers will capture your vision and create your
              concept in accordance with your municipality's By-Laws & Ontario
              Building Code (OBC).
            </li>
            <li>
              Our projects are designed using 3D modelling software allowing you
              to visualize projects in 3 dimensions, and provide interior &
              exterior renderings to better understand the materials and impact
              of the project.
            </li>
            <li>
              We complete all plans, drawings, paperwork, and apply for the
              permissions on your behalf.
            </li>
            <li>
              We follow up on your project after the submission until the
              permits are issued.
            </li>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
          className="process-img"
        />
      </div>
    </div>
  );
}

export default Info;
