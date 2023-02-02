import React, { useState } from "react";
import LightBoxHeader from "./LightBoxHeader";
import Lightbox from "react-spring-lightbox"

function GalleryLightBox({ displayImage, images, name }) {
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const imageList = images.map((item) => {
    return {
      ...item,
      src: `http://127.0.0.1:8000${item.image}`,
    };
  });

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  return (
    <div>
      <img
        className="gallery-img"
        onClick={() => setOpen(true)}
        src={displayImage}
        alt=""
      />
      {isOpen ? (
          <Lightbox
            isOpen={true}
            onClose={() => setOpen(false)}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={imageList}
            currentIndex={currentImageIndex}
            renderHeader={() => (
              <LightBoxHeader
                images={images}
                currentIndex={currentImageIndex}
                setOpen={setOpen}
                name={name}
              />
            )}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          />
      ) : null}
    </div>
  );
}

export default GalleryLightBox;
