import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout/Layout";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{"Home"}</title>
        <link rel="icon" href="/r-alt.png" />
      </Head>
      <section className="w-full h-screen lg:h-screen justify-between relative flex flex-col lg:flex-row bg-dark px-16 md:px-32 py-16 items-center">
        <div className="lg:w-1/2 w-full h-full flex flex-col justify-center mx-auto lg:mr-24 lg:mt-0 my-12">
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
        <div className="lg:1-/2 h-full flex flex-col justify-center mx-auto text-center lg:text-left">
          {/* <p className="font-lato font-bold text-4xl text-home_blue">Hello, I'm Riley.</p>
          <p className="font-lato text-4xl text-white">
            I'm a 3rd year student taking Bachelor of Science in Computer
            Science in De La Salle University.
          </p>
          <p className="font-lato text-4xl text-white">Aspiring developer and UX designer.</p> */}
          <div className="pb-8">
            <p className="font-lato font-bold text-4xl text-white">
              <span className="text-home_blue">Hello, I'm Riley. </span>
              
              <br/><br/>I'm a 3rd year student taking Bachelor of
              Science in Computer Science in De La Salle University. 
              
              <br/><br/>Aspiring developer and UX designer.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center h-24 lg:h-12 w-full lg:justify-start justify-center">
            <div className="flex flex-row lg:mr-8">
              <a href="https://www.linkedin.com/in/riley-uy/">
                <FaLinkedin className="w-14 h-full cursor-pointer text-button_dark mr-4" />
              </a>

              <a href="https://github.com/rileyuy">
                <FaGithubSquare className="w-14 h-full cursor-pointer text-button_dark mr-4" />
              </a>

              <a href="https://www.facebook.com/rileyuyy/">
                <FaFacebookSquare className="w-14 h-full cursor-pointer text-button_dark mr-4" />
              </a>
            </div>
            <button className="bg-button_dark rounded-lg h-full px-6 font-lato text-white text-3xl font-bold">
              Download CV
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
