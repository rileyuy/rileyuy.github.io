import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Blog.module.scss";
import { Layout } from "../src/components/Layout/Layout";
import { useState } from "react";


export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{"Contact Me"}</title>
        <link rel="icon" href="/r-alt.png" />
      </Head>
     {/* <section className="w-full h-fit justify-center relative flex flex-col items-center bg-dark py-16 px-8 md:px-32">
         <div className=" w-full h-full flex justify-center flex-col items-center lg:pb-6 pb-12">
          <h1 className="text-4xl lg:text-6xl font-extrabold  font-lato pb-4 lg:pb-12">
            blog
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
      </section>*/}
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <p className="text-white text-center text-xl lg:text-3xl px-4 lg:px-6">
          ⚠️ This website is under construction. ⚠️
        </p>
      </div>
    </Layout>
  );
}
