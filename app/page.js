import Image from "next/legacy/image";

import ContentCircleButton from "./components/ContentCircleButton/ContentCircleButton";
import ContentDiv from "./components/ContentDiv/ContentDiv";
import ContentActionButton from "./components/ContentActionButton/ContentActionButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdDownload } from "react-icons/io";
import thatsme from "../public/thatsme.svg";
import nextjs from "../public/nextjs.png";
import { home_buttons } from "./utils/home_buttons";
import { work_experience } from "./utils/work_experience";
import { projects } from "./utils/projects";

export default function Home() {
  return (
    <main className="flex-grow relative h-auto">
      <section className="">
        <div className="px-32 flex flex-row justify-center">
          <div className="w-3/5 pr-8">
            <h1 className="text-6xl pb-8">
              I'm{" "}
              <span className="font-extrabold underline underline-offset-[10px]">
                Riley.
              </span>
            </h1>
            <h1 className="text-6xl pb-8">
              A <span className="font-black">full-stack developer</span> from
              the Philippines.
            </h1>
            <p className="text-3xl pb-8 font-lato">
              I have maintained and developed numerous client websites and
              interfaces that deliver the company's services to thousands of
              Filipinos nationwide.
            </p>
            <div className="font-extrabold flex flex-row items-center">
              <ContentActionButton type={"primary"}>
                <p className="text-2xl pr-2">Download CV</p>
                <IoMdDownload size={"26px"} />
              </ContentActionButton>
              <ContentActionButton type={"primary"}>
                <p className="text-2xl pr-2">Contact Me</p>
                <GoArrowUpRight size={"30px"} className={"stroke-1"} />
              </ContentActionButton>
            </div>
          </div>
          <div className="w-2/5 h-max">
            <ContentDiv customStyles="px-8 flex flex-col justify-center items-center">
              <div className="w-80 h-[360px] border-4 rounded-md border-black m-6 relative overflow-hidden">
                <Image
                  src={thatsme}
                  alt="Picture of the author"
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  className="scale-x-[-1]"
                />
              </div>
              <div className="flex flex-row items-center justify-between px-6 pb-4">
                <ContentCircleButton>
                  <div className="flex items-center justify-center w-6 h-6 m-3">
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                </ContentCircleButton>
                <div className="flex flex-row items-center space-x-3">
                  <ContentCircleButton href={"https://github.com/rileyuy"}>
                    <TbBrandGithubFilled size={"32px"} className="m-2" />
                  </ContentCircleButton>
                  <ContentCircleButton
                    href={"https://www.linkedin.com/in/riley-uy/"}
                  >
                    <FaLinkedinIn size={"30px"} className="m-2" />
                  </ContentCircleButton>
                  <ContentCircleButton
                    href={"https://www.instagram.com/rileyuy/"}
                  >
                    <AiFillInstagram size={"32px"} className="m-2" />
                  </ContentCircleButton>
                </div>
              </div>
            </ContentDiv>
          </div>
        </div>
        <section className="py-8 h-fit" id="about-me">
          <h1 className="text-6xl text-center pb-8 font-extrabold">About Me</h1>
          <ContentDiv>
            <p className="p-20 text-4xl text-center font-lato">
              Hello, my name is Riley. I'm a graduate of De La Salle University
              with a degree in Computer Science. Ever since high school I’ve
              been intrigued about the impact of programming and how powerful it
              can be for the future. Since then, I’ve been eagerly finding ways
              on how to grow as a developer, a designer and an impactful member
              in the industry of computer science. It’s my dream to take part in
              the positive change software technology brings to the world.
            </p>
          </ContentDiv>
        </section>

        <section className="py-8 h-fit">
          <h1 className="text-6xl text-center pb-8 font-extrabold">Skills</h1>
          <div className="flex flex-row items-center flex-wrap justify-center p-6">
            {home_buttons.map((skill, index) => {
              return (
                <ContentDiv
                  customStyles="mx-4 w-max-[260px] w-72 h-40 mb-8"
                  key={index}
                >
                  <div className=" px-20 py-6 flex flex-col items-center h-full">
                    <h3 className="text-3xl text-center pb-4 font-extrabold">
                      {skill.title}
                    </h3>
                    <Image
                      src={`/${skill?.filename}`}
                      alt={`${skill?.title} Icon`}
                      objectFit="cover"
                      width={48} // Set appropriate width
                      height={48}
                      objectPosition="center"
                      className="w-12 h-12"
                    />
                  </div>
                </ContentDiv>
              );
            })}
          </div>
        </section>

        <section className="py-8 h-fit">
          <h1 className="text-6xl text-center pb-8 font-extrabold">
            Work Experience
          </h1>
          <div className="flex flex-row items-center flex-wrap justify-center p-6">
            {work_experience.map((work, index) => {
              return (
                <ContentDiv customStyles="mx-4 w-72 h-full" key={index}>
                  <div className="border-[3px] m-2 border-black rounded-xl flex justify-center items-center py-4">
                    <Image
                      src={`/${work?.filename}`}
                      alt={`${work?.title} Icon`}
                      objectFit="cover"
                      width={170}
                      height={30}
                      className=" mx-4 my-6  object-contain"
                    />
                  </div>
                  <div className=" px-4 py-4 flex flex-col items-start justify-center">
                    <h3 className="text-lg  font-extrabold">{work?.title}</h3>
                    <h5 className="text-md  font-semibold">{work?.position}</h5>
                    <h5 className="text-md  font-semibold">{work?.length}</h5>
                  </div>
                </ContentDiv>
              );
            })}
          </div>
        </section>

        <section className="py-8 h-fit">
          <h1 className="text-6xl text-center pb-8 font-extrabold">
            Projects I've Worked On
          </h1>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center">
            {projects.map((project, index) => {
              return (
                <ContentDiv customStyles="mx-4 w-3/4 h-full" key={index}>
                  <div className="border-[3px] m-2 border-black rounded-xl flex justify-center items-center py-2">
                    <Image
                      src={`/${project?.filename}`}
                      alt={`${project?.title} Icon`}
                      width={145}
                      height={100}
                      className="mx-4 my-6 self-center object-contain"
                    />
                  </div>
                  <div className=" px-4 py-4 flex flex-row justify-between">
                    <h3 className="text-lg font-extrabold">{project?.title}</h3>
                    <ContentCircleButton href={project?.link} hasShadow={false}>
                      <GoArrowUpRight
                        size={"24px"}
                        className={"stroke-1 m-1"}
                      />
                    </ContentCircleButton>
                  </div>
                </ContentDiv>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
