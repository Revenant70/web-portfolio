import { ProjectInfo } from "./ProjectInfo";
import { ProjectBox } from "./ProjectBox";


function Projects() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-auto">
      <div className="bg-primary dark:bg-darkPrimary flex flex-col justify-center items-center px-8">
        <section className="flex flex-col md:flex-row justify-center items-center h-screen w-11/12 md:w-10/12 snap-start">
          <ProjectInfo></ProjectInfo>
          <ProjectBox></ProjectBox>
        </section>
        <section className="flex flex-col-reverse md:flex-row justify-center items-center h-screen w-11/12 md:w-10/12 snap-start">
          <ProjectBox></ProjectBox>
          <ProjectInfo right={"md:items-end"}></ProjectInfo>
        </section>
        <section className="flex flex-col md:flex-row justify-center items-center h-screen w-11/12 md:w-10/12 snap-start">
          <ProjectInfo></ProjectInfo>
          <ProjectBox></ProjectBox>
        </section>
        <section className="flex flex-col-reverse md:flex-row justify-center items-center h-screen w-11/12 md:w-10/12 snap-start">
          <ProjectBox></ProjectBox>
          <ProjectInfo right={"md:items-end"}></ProjectInfo>
        </section>
      </div>
    </div>
  );
}

export default Projects;
