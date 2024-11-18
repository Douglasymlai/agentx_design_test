"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Agent() {
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
              x: [0, -10, 0],
              scale: [1, 1.15, 1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 1]
            }}
          >
            <Image
              src="/Jeeves.svg"
              alt="Jeeves"
              width={80}
              height={80}
              className="cursor-pointer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
