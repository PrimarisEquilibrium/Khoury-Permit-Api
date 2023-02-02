import React from "react";
import GalleryLightBox from "./GalleryLightBox";

function GalleryItems({ data }) {
  return (
    <React.Fragment>
      {Object.keys(data).map((item) => {
        const project = data[item];
        return (
          <GalleryLightBox
            key={project.id}
            displayImage={project.image}
            images={project.items}
            name={project.location}
          />
        );
      })}
    </React.Fragment>
  );
}

function assignProjects(projects, setProjects, selected) {
    if (selected === "all") {
      return setProjects(projects)
    }
  
    const newArray = []
  
    Object.keys(projects).map((index) => {
      const project = projects[index]
      if (project.category === selected) {
        return (
          newArray.push(project)
        )
      }
      return null
    })
  
    setProjects(newArray)
  }

export { GalleryItems, assignProjects };
