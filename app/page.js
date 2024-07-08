import ContentCircleButton from "./components/ContentCircleButton/ContentCircleButton";
import ContentDiv from "./components/ContentDiv/ContentDiv";
import ContentActionButton from "./components/ContentActionButton/ContentActionButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdDownload } from "react-icons/io";

export default function Home() {
  return (
    <main>
      <section className="h-screen">
        <div className="px-32 flex flex-row">
          <div className="w-3/5 pr-8">
            <h1 className="text-6xl pb-8">
              I'm{" "}
              <span className="font-semibold underline underline-offset-[10px]">
                Riley.
              </span>
            </h1>
            <h1 className="text-6xl pb-8">
              A <span className="font-extra-black">full-stack developer</span>{" "}
              from the Philippines.
            </h1>
            <p className="text-3xl pb-8">
              I have maintained and developed numerous client websites and
              interfaces that deliver the company's services to thousands of
              Filipinos nationwide.
            </p>
            <div className="font-extrabold flex flex-row items-center">
              <ContentActionButton>
                <p className="text-2xl pr-2">Download CV</p>
                <IoMdDownload size={"26px"} />
              </ContentActionButton>
              <ContentActionButton>
                <p className="text-2xl pr-2">Contact Me</p>
                <GoArrowUpRight size={"30px"} className={"stroke-1"} />
              </ContentActionButton>
            </div>
          </div>
          <div className="w-2/5  h-max">
            <ContentDiv customStyles="px-8 flex flex-col justify-center items-center">
              <div className="w-80 h-80 border-4 rounded-md border-black m-6"></div>
              <div className="flex flex-row items-center justify-between px-6 pb-4">
                <ContentCircleButton>
                  <div className="flex items-center justify-center w-4 h-4">
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                </ContentCircleButton>
                <div className="flex flex-row items-center space-x-3">
                  <ContentCircleButton href={"https://github.com/rileyuy"}>
                    <TbBrandGithubFilled size={"28px"} />
                  </ContentCircleButton>
                  <ContentCircleButton
                    href={"https://www.linkedin.com/in/riley-uy/"}
                  >
                    <FaLinkedinIn size={"24px"} />
                  </ContentCircleButton>
                  <ContentCircleButton
                    href={"https://www.instagram.com/rileyuy/"}
                  >
                    <AiFillInstagram size={"24px"} />
                  </ContentCircleButton>
                </div>
              </div>
            </ContentDiv>
          </div>
        </div>
      </section>
    </main>
  );
}
