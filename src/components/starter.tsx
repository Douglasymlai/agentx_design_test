"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Widget = ({ className }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center gap-4 justify-end pt-4 w-[64px] h-[136px] ring-4 ring-white/10 bg-gradient-to-b from-[#555555]/0 to-[#DDDDDD]/30 rounded-full backdrop-blur-[50px] shadow-[inset_-2px_-2px_100px_rgba(255,255,255,0.1),inset_2px_2px_100px_rgba(66,66,66,0.1)] ${className || ''}`}>
      <div className="w-[40px] h-[40px] rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
        <ChevronRight className="w-5 h-5 text-white" />
      </div>
      <Image 
        src="/avatar.png" 
        alt="avatar" 
        width={64} 
        height={64} 
        className="object-cover object-top rounded-full shadow-[0_0_9.14px_rgba(255,255,255,0.3)]" 
      />
      
    </div>
  );
};

export default Widget;
