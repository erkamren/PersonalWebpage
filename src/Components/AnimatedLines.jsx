// src/components/AnimatedBrushStrokes.jsx
import React from "react";

const AnimatedLines = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ pointerEvents: "none" }}
    >
      <defs>
        {/*
          Gerçekçi fırça dokusu filtresi.
          Bu kısım fırçanın "pürüzlü" ve "dokulu" görünmesini sağlar.
        */}
        <filter
          id="brushStrokeRich"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.06"
            numOctaves="3"
            seed="2"
            result="warpNoise"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="1"
            seed="9"
            result="grain"
          />
          <feColorMatrix
            in="grain"
            type="luminanceToAlpha"
            result="grainAlpha"
          />
          <feComponentTransfer in="grainAlpha" result="edgeMask">
            <feFuncA type="table" tableValues="0 0 0.4 1 1 0.7 0.25 0" />
          </feComponentTransfer>
          <feComposite
            in="SourceGraphic"
            in2="edgeMask"
            operator="in"
            result="textured"
          />
          <feDisplacementMap
            in="textured"
            in2="warpNoise"
            scale="24"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="0.35" result="soft" />
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="1.5"
            floodColor="#000"
            floodOpacity="0.25"
          />
        </filter>
      </defs>
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="rgba(156, 13, 75, 0.4)"
      >
        {/*
          "d" parametreleri Cubic Bézier (C) komutları ile daha karmaşık hale getirildi.
          "animationDuration" değerleri düşürülerek animasyon hızlandırıldı.
          "strokeDasharray" değerleri, yeni uzun yolları karşılamak için artırıldı.
        */}
        <path
          d="M-200,100 C 400,-100, 800,400, 1200,200 S 1800,0, 2200,300"
          strokeWidth="18"
          opacity="0.95"
          className="animate-draw"
          style={{
            strokeDasharray: 4000,
            strokeDashoffset: 4000,
            animationDuration: "7s",
            animationDelay: "0s",
          }}
        />
        <path
          d="M2200, 800 C 1800,1200, 1000,600, 800,900 C 600,1200, 100,800, -200,1000"
          strokeWidth="22"
          opacity="0.9"
          className="animate-draw"
          style={{
            strokeDasharray: 4500,
            strokeDashoffset: 4500,
            animationDuration: "8s",
            animationDelay: "0.5s",
          }}
        />
        <path
          d="M600,-100 C -200,400, 1200,600, 600,1100 C 0,1600, 1000,-200, 1800,500"
          strokeWidth="16"
          opacity="0.95"
          className="animate-draw"
          style={{
            strokeDasharray: 5000,
            strokeDashoffset: 5000,
            animationDuration: "6.5s",
            animationDelay: "1.1s",
          }}
        />
        <path
          d="M1900,-200 Q1650,400 1900,600 C 2150,800, 1500,1200, 1000,1100"
          strokeWidth="20"
          opacity="0.9"
          className="animate-draw"
          style={{
            strokeDasharray: 4200,
            strokeDashoffset: 4200,
            animationDuration: "7.5s",
            animationDelay: "1.8s",
          }}
        />
        <path
          d="M-100,540 C 500,280, 800,880, 1400,640 S 1900,1000, 2300,800"
          strokeWidth="24"
          opacity="0.9"
          className="animate-draw"
          style={{
            strokeDasharray: 4800,
            strokeDashoffset: 4800,
            animationDuration: "9s",
            animationDelay: "2.2s",
          }}
        />
        <path
          d="M500,1200 C 800,1000, 600,600, 200,500 S -200,200, 400,-100"
          strokeWidth="26"
          opacity="0.8"
          className="animate-draw"
          style={{
            strokeDasharray: 5500,
            strokeDashoffset: 5500,
            animationDuration: "8.5s",
            animationDelay: "2.9s",
          }}
        />
      </g>
    </svg>
  );
};

export default AnimatedLines;
