import React from "react";
import heighLightedWork from "../data/heighLightedWork.json";
import ProjectSection from "../newComp/DetailWorkComp";

const DetailWork = () => {
  return (
    <div>
      {heighLightedWork?.map((item, index) => {
        return (
          <ProjectSection
            imageSrc={item.imageSrc}
            altText={item.altText}
            projectName={item.projectName}
            projectDescription={item.projectDescription}
            technologies={item.technologies}
            figmaLink={item.figmaLink}
            githubLink={item.githubLink}
            liveLink={item.liveLink}
            linkedinLink={item.linkedinLink}
            reverse={item.reverse}
          />
        );
      })}
    </div>
  );
};

export default DetailWork;
