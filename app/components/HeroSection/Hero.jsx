"use client";

import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Download } from "lucide-react";
// import { AiOutlineDownload } from "react-icons/ai";
// import { AiOutlineDownload } from "react-icons/ai"; // Filled version
import { IoMdDownload } from "react-icons/io";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col space-y-6 md:pt-32 justify-center"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-black md:text-left text-center "
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="text-black ">hello! my name is</span>
        <br />
        <span className="text-primary ">Riley Uy.</span>
      </motion.h1>

      <motion.div
        className="space-y-4 max-w-xl text-xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className=" font-medium">
          I'm a <span className="font-black">fullstack developer</span> from the
          Philippines.
        </p>
        <p className="text-zinc-700 ">
          I create software solutions and help bring your ideas to life. I also
          have a knack for designing and UI/UX.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-center md:justify-start"
      >
        <motion.button
          initial="rest"
          whileHover="hover"
          animate="rest"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1AdC8lDubmTUA6k0TDcRxuKLJ7L2ecN2E/view?usp=sharing",
              "_blank"
            );
          }}
          className="relative flex items-center justify-center  w-48 h-14 rounded-xl bg-primary text-white font-bold text-lg overflow-hidden shadow-lg transition-all"
        >
          <motion.span
            variants={{
              rest: { y: 0, opacity: 1 },
              hover: { y: 30, opacity: 0 },
            }}
            className="absolute text-extrabold"
          >
            Download CV
          </motion.span>

          <motion.span
            variants={{
              rest: { y: -30, opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
            className=" flex items-center gap-2"
          >
            <IoMdDownload size={24} />
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
