import { ProjectInfo } from "./ProjectInfo";
import { ProjectBox } from "./ProjectBox";

function Projects() {
  return (
    <div
      id="Projects"
      className="bg-primary dark:bg-darkPrimary h-screen w-screen flex flex-col justify-items-center items-center scrollbar-hide snap-y snap-mandatory overflow-scroll"
    >
      <div className="snap-start min-h-screen w-8/12 flex flex-col justify-center gap-12">
        <div className="flex flex-row justify-between w-full h-64">
          <ProjectBox></ProjectBox>
          <ProjectInfo></ProjectInfo>
        </div>
        <div className="flex flex-row justify-between w-full h-64">
          <ProjectInfo></ProjectInfo>
          <ProjectBox></ProjectBox>
        </div>
      </div>
      <div className="snap-start min-h-screen w-8/12 flex flex-col justify-center gap-12">
        <div className="flex flex-row justify-between w-full h-64 ">
        <ProjectBox></ProjectBox>
        <ProjectInfo></ProjectInfo>
        </div>
        <div className="flex flex-row justify-between w-full h-64 ">
          <ProjectInfo></ProjectInfo>
          <ProjectBox></ProjectBox>
        </div>
      </div>
    </div>
  );
}

export default Projects;
