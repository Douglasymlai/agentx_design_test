import Image from "next/image";

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
        {/* Jeeves widget with notification */}
        <div className="absolute top-20 right-4">
          {/* Notification dot */}
          <div className="absolute top-[76px] right-4 z-20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>

          <Image
            src="/Jeeves.svg"
            alt="Jeeves"
            width={80}
            height={80}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}
