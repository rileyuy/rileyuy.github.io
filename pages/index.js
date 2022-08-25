import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout/Layout";
import { OrgItem } from "../components/OrgItem/OrgItem";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const resumeURL = "./public/downloadables/Resume.pdf";
  const resumeName = "Resume.pdf";

  return (
    <Layout>
      <Head>
        <title>{"Home"}</title>
        <link rel="icon" href="/r-alt.png" />
      </Head>
      <section className="w-full h-fit lg:h-screen justify-between relative flex flex-col lg:flex-row bg-dark px-8 md:px-32 py-16 items-center">
        <div className="lg:w-1/2 w-full h-full flex flex-col justify-center mx-auto lg:mr-24 lg:my-0 my-4 md:my-8  px-12 lg:px-0">
          <div className="rounded-full overflow-hidden drop-shadow-xl bg-white">
            <Image
              layout="responsive"
              src="riley-transparent-cropped.png"
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
            <p className="font-lato  text-xl md:text-4xl ">
              <span className="text-home_blue font-bold">
                Hello, I&rsquo;m Riley.{" "}
              </span>
              <br />
              <br />
              I&rsquo;m a 3rd year student taking Bachelor of Science in
              Computer Science in De La Salle University.
              <br />
              <br />
              Aspiring developer and UX designer.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center h-full md:h-12 w-full lg:justify-start justify-center">
            <div className="flex flex-row lg:mr-8 justify-between lg:justify-start lg:w-fit w-full lg:mx-0  md:mb-0 mb-8 lg:px-0 px-16">
              <a href="https://www.linkedin.com/in/riley-uy/">
                <FaLinkedin className="w-14 h-full cursor-pointer text-button_dark lg:mr-4" />
              </a>

              <a href="https://github.com/rileyuy">
                <FaGithubSquare className="w-14 h-full cursor-pointer text-button_dark lg:mr-4" />
              </a>

              <a href="https://www.facebook.com/rileyuyy/">
                <FaFacebookSquare className="w-14 h-full cursor-pointer text-button_dark lg:mr-4" />
              </a>
            </div>

            <a
              className=" h-full flex items-center justify-center"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1Zxd7VdXUWcLHdPOxO7o01ofCCj1cqBe4/view?usp=sharing"
            >
              <button className="bg-button_dark text-white rounded-lg h-14 lg:h-full px-6 font-lato  text-3xl font-bold">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="w-full h-fit justify-center relative flex flex-col items-center bg-dark py-16 px-8 md:px-32">
        <div className=" w-full h-full flex justify-center flex-col items-center lg:pb-6 pb-12">
          <h1 className="text-4xl lg:text-6xl font-extrabold  font-lato pb-4 lg:pb-12">
            about me
          </h1>
          <p className="text-xl lg:text-3xl font-lato text-center">
            Hello, my name is Riley. I&rsquo;m a 3rd year student taking my
            degree in Computer Science in De La Salle University-Manila. Ever
            since high school I&rsquo;ve been intrigued about the impact of
            programming and how powerful it can be for the future. That same
            year where I was introduced to programming, I also learned about UX
            design; I learned how design can be as impactful and powerful as the
            functions and features of an application.
            <br />
            <br />I have a long way to go because there&rsquo;s still so much I
            haven&rsquo;t experienced first hand in the field of development and
            design that I have yet to learn.
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

      <section className="w-full h-fit justify-center relative flex flex-col items-center bg-dark py-16 px-8 md:px-32">
        <div className="w-96">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-center font-lato pb-4 lg:pb-12">
            organizations & affiliations
          </h1>
        </div>
        <div className="flex flex-row justify-between w-full h-fit overflow-auto">
          <OrgItem title="User Experience Society - DLSU" imageName="uxsoc.png"/>
          <OrgItem title="UXPH" imageName="uxsoc.png"/>
          <OrgItem title="" imageName=""/>
          <OrgItem title="" imageName=""/>
          <OrgItem title="" imageName=""/>

        </div>
      </section>
    </Layout>
  );
}
