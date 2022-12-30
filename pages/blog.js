import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Blog.module.scss";
import { Layout } from "../src/components/Layout/Layout";
import { useState } from "react";
import { BlogItem } from "../src/components/BlogItem/BlogItem";

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>{"Blog"}</title>
        <link rel="icon" href="/r-alt.png" />
      </Head>
      <section className="w-full h-fit justify-center relative flex flex-col items-center bg-dark py-16 px-8 md:px-32">
        <div className=" w-full h-full flex justify-center flex-col items-center lg:pb-8 pb-12">
          <h1 className="text-4xl lg:text-6xl font-extrabold  font-lato py-4 lg:py-8">
            blog
          </h1>
          <p className="text-xl lg:text-3xl font-lato">
            wordswordswordswordswordswords
            {/* Hello, my name is Riley. I&rsquo;m a 3rd year student taking my
            degree in Computer Science in De La Salle University-Manila. Ever
            since high school I&rsquo;ve been intrigued about the impact of
            programming and how powerful it can be for the future. That same
            year where I was introduced to programming, I also learned about UX
            design; I learned how design can be as impactful and powerful as the
            functions and features of an application.
            <br />
            <br />I have a long way to go because there&rsquo;s still so much I
            haven&rsquo;t experienced first hand in the field of development and
            design that I have yet to learn. */}
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center">
          <BlogItem/>
          <BlogItem/>
        </div>
      </section>
    </Layout>
  );
}
