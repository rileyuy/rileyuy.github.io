import ProjectItem from "../components/ProjectItem/ProjectItem";
import { projects } from "../utils/projects";
export default function ProjectsPage() {
  return (
    <main>
      <div className="px-8 md:px-16 py-12 md:py-0 flex flex-col justify-center">
        <h1 className="text-4xl md:text-7xl font-bold mb-8 text-black text-center">
          some stuff I've worked on...
        </h1>
        <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 flex-row gap-6 justify-center ">
          {projects.map((project, index) => {
            return <ProjectItem project={project} key={index} />;
          })}
        </div>
      </div>
      <footer className="py-6 text-center text-sm text-black font-extrabold w-full flex items-center justify-center bg-transparent absolute bottom-0">
        made with &lt;3 © 2025 Riley Uy
      </footer>
    </main>
  );
}
