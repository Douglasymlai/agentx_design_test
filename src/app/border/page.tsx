"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

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
          <div className="relative">
            <div className="relative z-20 p-[2px] overflow-hidden rounded-full bg-[#ffffff]-30">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  rotate: [0, 720],  // Two full rotations
                  opacity: [0, 1, 1, 0]  // Fade in, stay visible, fade out
                }}
                transition={{
                  duration: 8,  // Total animation duration
                  times: [0, 0.1, 0.9, 1],  // Timing for opacity changes
                  repeat: Infinity,  // Infinite loop
                  ease: "linear",
                  repeatDelay: 2  // Half second pause between cycles
                }}
                className="absolute bottom-[70px] right-[40px] -inset-x-20 -top-20 overflow-hidden origin-bottom-right"
                style={{
                  background: "radial-gradient(circle at 100% 100%, #1d1d1d 5%, #22C55E 20%)"
                }}
              />
              <div className={`relative z-10 flex flex-col items-center gap-4 justify-end pt-4 w-[64px] h-[136px] bg-[#878787] rounded-full backdrop-blur-[50px] shadow-[inset_-2px_-2px_100px_rgba(255,255,255,0.1),inset_2px_2px_100px_rgba(66,66,66,0.1)] cursor-pointer hover:scale-105 transition-transform`}>
                <div className="w-[40px] h-[40px] rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
                <div className="relative">
                  <Image 
                    src="/avatar.png" 
                    alt="avatar" 
                    width={64} 
                    height={64} 
                    className="relative z-10 object-cover object-top rounded-full shadow-[0_0_9.14px_rgba(255,255,255,0.3)]" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
