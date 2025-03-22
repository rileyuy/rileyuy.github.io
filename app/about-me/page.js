"use client";
// import Navbar from "@/components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";

export default function AboutPage() {
  return (
    <main>
      <div className=" mx-auto lg:px-80 md:px-16 py-12 md:py-0 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-7xl text-4xl font-bold mb-8 text-black text-center"
        >
          so a little about me...
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="self-center"
        >
          <Image
            src={`/riley_long.jpg`}
            //   alt={`${project?.title} Icon`}
            width={700}
            height={100}
            className="px-4 mb-8 object-contain"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:text-xl text-lg px-4 lg:px-0 w-full "
        >
          <p className="text-justify">
            I'm a{" "}
            <span className="font-bold">fullstack developer & designer </span>
            from the Philippines. I love building websites and software that
            have
            <span className="font-bold"> purpose and meaning.</span> It's my
            dream to build something one day and to see it grow into something
            that I would have never imagined.
            <br />
            <br />
            I've been writing code ever since I was in highschool and it was an
            unexpected skill I picked up through specialized classes in our
            curriculum. This was surprising even to me since I hated every other
            coding class I had prior which came in the form of coding an Arduino
            robot. But ever since then, I chose to pursue coding as something I
            wanted to learn and use in my future career which has been very fun
            and fulfilling.
            <br />
            <br />
            On my free time, I play a lot of sports like badminton, soccer and
            bouldering. I also play videos games (currently loving Marvel
            Rivals) and do a bit of photography here and there.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full flex items-center justify-center my-8 h-auto flex-col md:flex-row gap-4"
        >
          <Image
            src={`/badminton.JPG`}
            width={350}
            height={150}
            className="px-4 object-cover h-full"
            priority
          />

          <Image
            src={`/badminton1.JPG`}
            width={350}
            height={150}
            className="px-4 object-cover h-full"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="md:text-xl text-lg px-4 lg:px-0 w-full"
        >
          <p className="text-justify">
            Badminton has always been my favorite sport since elementary and has
            been my go-to sport nowadays since it's the most accessible sport
            nowadays. It's become my outlet to have fun and meet with friends at
            the same time and it's the reason why I try to go and play every
            week.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="w-full flex items-center justify-center my-8 h-auto md:h-[180px] flex-col md:flex-row gap-4"
        >
          <Image
            src={`/pokemon.jpg`}
            width={350}
            height={150}
            className="px-4 object-cover h-full"
            priority
          />
          <Image
            src={`/undertale.png`}
            width={350}
            height={150}
            className="px-4 object-cover h-full"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="md:text-xl text-lg px-4 lg:px-0 w-full"
        >
          <p className="text-justify">
            To name some of my favorite games, Pokemon is definitely one of my
            all-time favorites, specifically, the Pokemon Mystery Dungeon
            series. I could go on all day about how good this game is but let's
            just say storywise, it has so much more substance compared to the
            mainline games. Undertale also has a special place in my heart, just
            the soundtrack of the game alone is something worth mentioning about
            this game; the characters, the story and the gameplay are all so
            perfect. If you're thinking of picking up a game, I highly suggest
            you give one of these games a try.
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
