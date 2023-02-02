import React from "react";
import "./styles/header.css";

function LightBoxHeader({ images, currentIndex, setOpen, name }) {
  const imageName = name;
  const description = images[currentIndex].description;

  const leftToGo = `${currentIndex + 1}/${images.length}`;

  return (
    <div className="header-container">
      <div className="main-text">
				<div className="line"></div>
				<div className="main-text-section">
					<div className="header">{imageName}</div>
					<div className="description">{description}</div>
				</div>
      </div>
      <div className="utils">
        <div className="left-to-go">{leftToGo}</div>
				<div className="line"></div>
        <button className="exit" onClick={() => setOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default LightBoxHeader;
