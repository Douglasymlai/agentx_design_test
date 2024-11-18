"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Widget from "@/components/starter";

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
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 5
            }}
          >
            <Widget className="cursor-pointer hover:scale-105 transition-transform" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
