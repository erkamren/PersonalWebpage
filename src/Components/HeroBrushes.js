import React from "react";

const strokes = [
  {
    d: "M -220 120 C 180 -140 760 260 1650 -60",
    width: 52,
    color: "#f472b6",
    dur: 7.5,
    delay: "0s",
    rough: "rough1",
  },
  {
    d: "M -300 280 C 120 520 980 160 1700 380",
    width: 44,
    color: "#818cf8",
    dur: 8.0,
    delay: "0.6s",
    rough: "rough2",
  },
  {
    d: "M -260 500 C 200 260 920 820 1750 560",
    width: 68,
    color: "#60a5fa",
    dur: 9.0,
    delay: "1s",
    rough: "rough3",
  },
  {
    d: "M -340 740 C 80 980 760 720 1680 980",
    width: 40,
    color: "#f59e0b",
    dur: 7.0,
    delay: "1.3s",
    rough: "rough4",
  },
  {
    d: "M -180 860 C 300 620 1040 980 1600 1120",
    width: 50,
    color: "#34d399",
    dur: 8.5,
    delay: "0.9s",
    rough: "rough5",
  },
  {
    d: "M -200 300 C 80 40 840 400 1720 120",
    width: 56,
    color: "#fb7185",
    dur: 8.8,
    delay: "1.6s",
    rough: "rough6",
  },
];

const HeroBrushes = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-950 flex items-center justify-center">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="rough1"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.04"
              numOctaves="3"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="14"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="0.3" />
          </filter>
          <filter
            id="rough2"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.014 0.03"
              numOctaves="3"
              seed="5"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="16"
              xChannelSelector="R"
              yChannelSelector="B"
            />
            <feGaussianBlur stdDeviation="0.35" />
          </filter>
          <filter
            id="rough3"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.035"
              numOctaves="4"
              seed="9"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="18"
              xChannelSelector="G"
              yChannelSelector="B"
            />
            <feGaussianBlur stdDeviation="0.35" />
          </filter>
          <filter
            id="rough4"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015 0.03"
              numOctaves="3"
              seed="12"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="12"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="0.3" />
          </filter>
          <filter
            id="rough5"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.05"
              numOctaves="3"
              seed="21"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="15"
              xChannelSelector="B"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="0.35" />
          </filter>
          <filter
            id="rough6"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.013 0.032"
              numOctaves="3"
              seed="33"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="14"
              xChannelSelector="R"
              yChannelSelector="B"
            />
            <feGaussianBlur stdDeviation="0.3" />
          </filter>
        </defs>

        {strokes.map((s, i) => {
          const isReverse = i % 2 === 1;
          const dashOffsetStart = isReverse ? -1000 : 1000;

          return (
            <path
              key={i}
              d={s.d}
              stroke={s.color}
              strokeWidth={s.width}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit={1.5}
              fill="none"
              pathLength={1000}
              style={{
                filter: `url(#${s.rough})`,
                strokeDasharray: 1000,
                strokeDashoffset: dashOffsetStart,
                animation: `drawStroke${i} ${s.dur}s cubic-bezier(.23,1,.32,1) ${s.delay} infinite`,
              }}
            />
          );
        })}
      </svg>

      <div className="relative z-10 text-center px-6">
        <h1
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
          style={{
            fontFamily:
              'Playfair Display, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
            textShadow: "0 2px 12px rgba(0,0,0,0.35)",
            letterSpacing: "0.01em",
          }}
        >
          Sanatın
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">
            Dokunuşu
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
          Daha kavisli, daha kalın, daha canlı fırça izleri.
        </p>
      </div>

      <style>
        {strokes
          .map((s, i) => {
            const isReverse = i % 2 === 1;
            const start = isReverse ? -1000 : 1000;
            return `
              @keyframes drawStroke${i} {
                0%   { stroke-dashoffset: ${start}; }
                50%  { stroke-dashoffset: 0; }
                75%  { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: ${start}; }
              }
            `;
          })
          .join("\n")}
      </style>

      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default HeroBrushes;
