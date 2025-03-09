"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="py-6 text-center text-sm text-black font-extrabold w-full flex items-center justify-center bg-transparent absolute bottom-0"
    >
      made with &lt;3 © 2025 Riley Uy | made using next.js and tailwind
    </motion.footer>
  );
}
