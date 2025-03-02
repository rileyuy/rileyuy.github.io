import Image from "next/image";

export default function ProjectItem({ project }) {
  return (
    <div className="w-full sm:w-[300px]">
      <div className="relative w-full h-48">
        <Image
          src={project?.fileName}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
          alt={project?.title}
        />
      </div>
      <h1 className="font-extrabold text-xl mt-2">{project?.title}</h1>
      <p>{project?.description}</p>
    </div>
  );
}
