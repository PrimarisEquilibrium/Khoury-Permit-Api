import React from "react";

function GalleryFilters({ setSelected, categories }) {
  return (
    <React.Fragment>
      <button className="category-btn" onClick={() => setSelected("all")}>
        All
      </button>
      {categories.map((item) => {
        return (
          <button
            className="category-btn"
            key={item.id}
            onClick={() => setSelected(item.id)}
          >
            {item.category}
          </button>
        );
      })}
    </React.Fragment>
  );
}

export default GalleryFilters;
