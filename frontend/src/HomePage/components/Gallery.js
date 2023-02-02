import React, { useState } from "react";
import "./styles/gallery.css";
import Spinner from "react-bootstrap/Spinner";
import GalleryFilters from "./GalleryFilters";
import { GalleryItems, assignProjects } from "./GalleryUtils";
import { BASE_URL } from "../../utils"


function Gallery() {
  const [projects, setProjects] = useState("");
  const [status, setStatus] = useState("loading");
  const [selected, setSelected] = useState("all");
  const [categories, setCategories] = useState([]);

  React.useEffect(() => {
    setStatus("loading");
    fetch(`${BASE_URL}/api/project`)
      .then((response) => {
        setStatus("success");
        return response.json();
      })
      .then((data) => {
        assignProjects(data, setProjects, selected)
      })
      .catch(() => setStatus("error"));
  }, [selected]);

  React.useEffect(() => {
    fetch(`${BASE_URL}/api/category`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setCategories(data);
      });
  }, []);

  function DisplayGallery({ status }) {
    if (status === "loading") {
      return (
        <Spinner
          animation="border"
          role="status"
          style={{ width: "6rem", height: "6rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    } else if (status === "error") {
      return (
        <div className="error">
          An error has occurred, please try again later.
        </div>
      );
    } else if (status === "success") {
      return <GalleryItems data={projects} />;
    }
  }

  return (
    <div className="gallery-container">
      <div className="gallery-utils">
        <div className="project-header">Projects</div>
        <div className="category-container">
          <GalleryFilters setSelected={setSelected} categories={categories} />
        </div>
      </div>

      <div className="gallery">
        <DisplayGallery status={status} />
      </div>
    </div>
  );
}

export default Gallery;
