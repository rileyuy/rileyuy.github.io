import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Layout } from "../src/components/Layout/Layout";
import { OrgItem } from "../src/components/OrgItem/OrgItem";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import orgList from "../src/data/orgs.json";

export default function Home() {
  const resumeURL = "./public/downloadables/Resume.pdf";
  const resumeName = "Resume.pdf";

  const [orgs, setOrgs] = useState(orgList);
  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <Layout>
      <Head>
        <title>{"Home"}</title>
        <link rel="icon" href="/r-alt.png" />
      </Head>
      <section className="section-margins w-full h-fit lg:h-screen justify-between relative flex flex-col lg:flex-row bg-dark  items-center">
        <div className="lg:w-1/2 w-3/4 h-full flex flex-col justify-center mx-auto lg:mr-24 lg:my-0 my-4 md:my-8 px-2 lg:px-0">
          <div className="rounded-full overflow-hidden drop-shadow-xl bg-white">
            <Image
              layout="responsive"
              src="riley-hero.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="h-fit lg:h-full w-full flex flex-col justify-center mx-auto text-center lg:text-left">
          {/* <p className="font-lato font-bold text-4xl text-home_blue">Hello, I'm Riley.</p>
          <p className="font-lato text-4xl ">
            I'm a 3rd year student taking Bachelor of Science in Computer
            Science in De La Salle University.
          </p>
          <p className="font-lato text-4xl ">Aspiring developer and UX designer.</p> */}
          <div className="mb-8">
            <p className="font-lato  text-xl md:text-3xl ">
              <span className="text-home_blue font-bold text-4xl">
                Hello, I&rsquo;m Riley.{" "}
              </span>
              <br />
              <br />
              I&rsquo;m a 4th year student taking Bachelor of Science in
              Computer Science in De La Salle University.
              <br />
              <br />
              Aspiring developer and UX designer.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center h-full md:h-12 w-full lg:justify-start ">
            <div className="flex flex-row lg:mr-8 justify-between md:justify-evenly lg:justify-start lg:w-fit w-full lg:mx-0 md:mb-0 mb-8 lg:px-0 px-16 lg:pb-0 pb-4">
              <a href="https://www.linkedin.com/in/riley-uy/" target="_blank" rel="noreferrer">
                <FaLinkedin className="w-14 h-full cursor-pointer text-button_dark hover:text-button_hover_dark lg:mr-4 transition-text ease-in-out duration-300" />
              </a>

              <a href="https://github.com/rileyuy" target="_blank" rel="noreferrer">
                <FaGithubSquare className="w-14 h-full cursor-pointer text-button_dark hover:text-button_hover_dark lg:mr-4 transition-text ease-in-out duration-300" />
              </a>

              <a href="https://www.facebook.com/rileyuyy/" target="_blank" rel="noreferrer"> 
                <FaFacebookSquare className="w-14 h-full cursor-pointer text-button_dark hover:text-button_hover_dark lg:mr-4 transition-text ease-in-out duration-300" />
              </a>
            </div>

            <a
              className="w-full h-full flex items-center justify-center"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1Zxd7VdXUWcLHdPOxO7o01ofCCj1cqBe4/view?usp=sharing"
            >
              <button className="bg-button_dark  hover:bg-button_hover_dark text-white rounded-lg h-14 md:h-full px-6 font-lato w-full md:text-3xl text-2xl font-bold transition-color ease-in-out duration-200">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="section-margins w-full h-fit justify-center relative flex flex-col items-center bg-dark">
        <div className=" w-full h-full flex justify-center flex-col items-center lg:pb-6 pb-12">
          <h1 className="text-4xl lg:text-6xl font-extrabold  font-lato pb-4 lg:pb-12">
            about me
          </h1>
          <p className="text-xl lg:text-3xl font-lato text-center pb-8">
            I&rsquo;m a 4th year student taking my
            degree in Computer Science in De La Salle University-Manila. Ever
            since high school I&rsquo;ve been intrigued about the impact of
            programming and how powerful it can be for the future. That same
            year where I was introduced to programming, I also learned about UX
            design; I learned how design can be as impactful and powerful as the
            functions and features of an application.
            <br />
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex text-center flex-col md:text-left md:mb-0 mb-8">
            <h1 className="text-2xl md:text-4xl font-bold  font-lato pb-2">
              education
            </h1>
            <p className="text-xl font-lato ">
              De La Salle University - Manila (19-23) 🟢
              <br />
              Jubilee Christian Academy (06-19) 🔺
            </p>
          </div>
          <div className="flex text-center  flex-col md:text-right">
            <h1 className="text-2xl md:text-4xl font-bold font-lato pb-2">
              hobbies & interests
            </h1>
            <p className="text-xl font-lato ">
              🖊️ UX Design
              <br />
              🌐 Web development
              <br />
              🎮 Gaming
              <br />
              🏸 Badminton
              <br />
              🎥 Video editing
            </p>
          </div>
        </div>
      </section>

      <section className="section-margins w-full h-fit lg:h-screen justify-center relative flex flex-col items-center bg-dark">
        <div className="w-96">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-center font-lato pb-4 lg:pb-12">
            organizations & affiliations
          </h1>
        </div>
        <div className="flex flex-row justify-evenly w-full h-auto flex-wrap">
          {orgs.map((item, index) => {
            return <OrgItem item={item} key={index} />;
          })}
        </div>
      </section>
    </Layout>
  );
}
