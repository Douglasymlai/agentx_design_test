"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Agent() {
  const [isFlipping, setIsFlipping] = useState(false);

  // Trigger single flip animation with longer delay
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFlipping) {
        setIsFlipping(true);
        // Reset after one complete flip
        setTimeout(() => {
          setIsFlipping(false);
        }, 1000); // Reset after 1 second (duration of one flip)
      }
    }, 8000); // Long delay between flips (8 seconds)

    return () => clearInterval(interval);
  }, [isFlipping]);

  return (
    <div className="relative h-screen w-screen">
      <Image
        src="/www.allbirds.com_.png"
        alt="Background"
        fill
        priority
        className="object-cover object-top z-0"
        sizes="100vw"
      />
      
      <div className="relative z-10">
        <div className="absolute top-20 right-4">
          <motion.div
            animate={{
              rotateY: isFlipping ? 360 : 0, // Single 360-degree flip
            }}
            transition={{
              duration: 1, // Faster single flip
              ease: "easeInOut",
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <Image
              src="/Jeeves.svg"
              alt="Jeeves"
              width={80}
              height={80}
              className="cursor-pointer hover:scale-105 transition-transform"
              style={{
                backfaceVisibility: "visible",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
