"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    id: 1,
    src: "/riley1.JPG",
    alt: "me",
  },
  {
    id: 2,
    src: "/riley2.jpg",
    alt: "me2",
  },
  {
    id: 3,
    src: "/dog.jpg",
    alt: "Cartoon character",
  },
  {
    id: 4,
    src: "/pingu.jpg",
    alt: "Penguin toy",
  },
  {
    id: 5,
    src: "/snoopy.jpg",
    alt: "Plants",
  },
];

// Define positions for each card in the spread
const basePositions = [
  { x: -120, y: -40, z: 1, rotate: -8, scale: 1.2 },
  { x: 30, y: -70, z: 0, rotate: 12, scale: 1.2 },
  { x: -230, y: 150, z: 20, rotate: 7, scale: 0.45 },
  { x: -270, y: -220, z: 20, rotate: -15, scale: 0.45 },
  { x: 100, y: 130, z: 20, rotate: 13, scale: 0.45 },
];

export default function PhotoStack() {
  const containerRef = useRef(null);
  const [cardPositions, setCardPositions] = useState(basePositions);

  // Update positions based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Calculate scale factor based on screen width
      const scaleFactor =
        window.innerWidth < 640
          ? 0.7
          : window.innerWidth < 768
          ? 0.7
          : window.innerWidth < 1024
          ? 0.85
          : 1;

      // Adjust positions for different screen sizes
      const adjustedPositions = basePositions.map((pos) => {
        return {
          ...pos,
          x: pos.x * scaleFactor,
          y: pos.y * scaleFactor,
          scale: pos.scale * (scaleFactor * 0.9 + 0.1), // Prevent scales from getting too small
        };
      });

      setCardPositions(adjustedPositions);
    };

    // Initial calculation
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div ref={containerRef} className="relative h-[450px] md:h-[600px] w-full ">
      {photos.map((photo, index) => {
        // Get position data for this card
        const position = cardPositions[index % cardPositions.length];

        return (
          <motion.div
            key={photo.id}
            className="absolute md:top-1/3 top-1/3 left-[40%] md:left-1/3 lg:w-[280px] lg:h-[380px] md:w-[200px] md:h-[300px] sm:w-[200px] sm:h-[270px] xs:w-[160px] xs:h-[220px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0.5,
              rotate: 0,
            }}
            animate={{
              x: position.x,
              y: position.y,
              opacity: 1,
              scale: position.scale,
              rotate: position.rotate,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.1 * index,
              },
            }}
            whileHover={{
              scale: position.scale * 1.05,
              rotate: position.rotate * 0.7,
              //   zIndex: 50,
              transition: { duration: 0.2 },
            }}
            style={{
              zIndex: position.z,
              transformOrigin: "center center",
              width: "clamp(180px, 25vw, 280px)",
              height: "clamp(220px, 35vh, 380px)",
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 280px"
              priority
            />
          </motion.div>
        );
      })}
    </div>
  );
}
