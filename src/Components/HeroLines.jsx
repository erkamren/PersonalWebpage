import React from "react";
import AnimatedLines from "./AnimatedLines";

const HeroLines = () => {
  return (
    <section className="relative w-full h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-10">
        <AnimatedLines />
      </div>
      <div className="relative z-30 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Yaratıcılığın Sınırlarını Zorla
        </h1>
      </div>
    </section>
  );
};

export default HeroLines;
