"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";

export default function ProjectItem({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 1,
        }}
        className="w-full sm:w-[300px] cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative w-full h-48">
          <Image
            src={project?.fileName}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            alt={project?.title}
            priority
          />
        </div>
        <h1 className="font-extrabold text-xl mt-2">{project?.title}</h1>
        <p>{project?.description}</p>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 bg-white"
        >
          <h2 className="text-2xl font-bold">{project?.title}</h2>

          <div className="relative w-full h-80 mt-8">
            <Image
              src={project?.fileName}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              alt={project?.title}
              priority
            />
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-black ">{project?.modalDescription}</p>
            {/* Add more project details here */}
          </motion.div>
        </motion.div>
      </Modal>
    </>
  );
}
