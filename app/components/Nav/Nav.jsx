"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-6 px-4 md:px-8 flex justify-between items-center z-50 bg-transparent top-0 left-0 absolute"
    >
      <Link href="/" className="text-5xl font-black tracking-tighter">
        RILEY.UY
      </Link>

      <nav className="hidden lg:flex space-x-12">
        <Link
          href="/"
          className={`hover:text-primary transition-colors ${
            pathname === "/" ? "font-bold" : "font-normal"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about-me"
          className={`hover:text-primary transition-colors  ${
            pathname === "/about-me" ? "font-extrabold" : "font-normal"
          }`}
        >
          About Me
        </Link>
        <Link
          href="/projects"
          className={`hover:text-primary transition-colors ${
            pathname === "/projects" ? "font-bold" : "font-normal"
          }`}
        >
          Projects
        </Link>
      </nav>
      <div className="lg:flex items-center space-x-4 hidden">
        <Link
          href="https://github.com/rileyuy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandGithubFilled
            size={32}
            className="m-2 hover:text-purple-900 transition duration-200 ease-in-out"
          />
        </Link>
        <Link
          href="https://instagram.com/rileyuy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram
            size={32}
            className="m-2 transition duration-200 ease-in-out hover:text-orange-600"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/riley-uy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            size={30}
            className="m-2 transition duration-200 ease-in-out hover:text-blue-500"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          className="navbar-burger flex items-center text-blue-600 p-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="block h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full bg-white shadow-lg py-16 px-4 md:px-12 flex flex-col space-y-8 lg:hidden z-[100] "
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-gray-800 hover:text-red-500 transition duration-200"
            >
              <AiOutlineClose size={36} />
            </button>
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-lg font-medium cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-me"
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                About Me
              </Link>
              <Link
                href="/projects"
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </div>
            <div className="flex items-center space-x-4 mt-8">
              <Link
                href="https://github.com/rileyuy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandGithubFilled
                  size={28}
                  className="hover:text-purple-900 transition duration-200 ease-in-out"
                />
              </Link>
              <Link
                href="https://instagram.com/rileyuy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram
                  size={28}
                  className="transition duration-200 ease-in-out hover:text-orange-600"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/riley-uy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  size={26}
                  className="transition duration-200 ease-in-out hover:text-blue-500"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
