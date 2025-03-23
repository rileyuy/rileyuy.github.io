"use client";
import ProjectItem from "../components/ProjectItem/ProjectItem";
import { projects } from "../utils/projects";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main>
      <div className="px-8 md:px-16 py-12 md:py-0 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-7xl font-bold mb-8 text-black text-center"
        >
          some stuff I've worked on...
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectItem project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Footer />
      </motion.div>
    </main>
  );
}
