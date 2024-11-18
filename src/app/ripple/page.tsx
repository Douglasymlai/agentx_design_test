"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Widget from "@/components/starter";
import { ChevronRight } from "lucide-react";

export default function Agent() {
  const [ripples, setRipples] = useState<number[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRipples(prev => [...prev, Date.now()]);
    }, 4000);

    const notificationTimer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(notificationTimer);
    };
  }, []);

  useEffect(() => {
    if (ripples.length > 2) {
      setRipples(prev => prev.slice(1));
    }
  }, [ripples]);

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
            <div className="relative z-20">
              <div className={`flex flex-col items-center gap-4 justify-end pt-4 w-[64px] h-[136px] ring-4 ring-white/10 bg-gradient-to-b from-[#555555]/0 to-[#DDDDDD]/30 rounded-full backdrop-blur-[50px] shadow-[inset_-2px_-2px_100px_rgba(255,255,255,0.1),inset_2px_2px_100px_rgba(66,66,66,0.1)] cursor-pointer hover:scale-105 transition-transform`}>
                <div className="w-[40px] h-[40px] rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
                <div className="relative">
                  <AnimatePresence>
                    {ripples.map((key) => (
                      <div key={key}>
                        {[0, 1, 2].map((layer) => (
                          <motion.div
                            key={`${key}-${layer}`}
                            initial={{ 
                              width: "64px", 
                              height: "64px",
                              opacity: 0.4 - (layer * 0.1)
                            }}
                            animate={{ 
                              width: `${140 + (layer * 10)}px`,
                              height: `${140 + (layer * 10)}px`,
                              opacity: 0 
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ 
                              duration: 2,
                              delay: layer * 0.25,
                              ease: "easeOut"
                            }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                            style={{ 
                              aspectRatio: "1",
                              border: "6px solid rgba(255, 255, 255, 0.1)",
                              boxShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
                            }}
                          />
                        ))}
                      </div>
                    ))}
                  </AnimatePresence>
                  <div className="relative">
                    <Image 
                      src="/avatar.png" 
                      alt="avatar" 
                      width={64} 
                      height={64} 
                      className="relative z-10 object-cover object-top rounded-full shadow-[0_0_9.14px_rgba(255,255,255,0.3)]" 
                    />
                    <AnimatePresence>
                      {showNotification && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "backOut" }}
                          className="absolute top-1 right-2 w-3 h-3 bg-red-500 rounded-full z-20 shadow-[0_0_4px_rgba(239,68,68,0.5)]"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}