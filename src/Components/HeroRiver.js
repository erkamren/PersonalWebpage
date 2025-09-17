import React from "react";

const strokes = [
  {
    d: "M -300 500 C 200 200, 600 800, 900 500 C 1200 200, 1600 800, 2000 500 S 2600 100, 3000 500",
    width: 60,
    dur: 11,
    delay: "0s",
  },
  {
    d: "M -200 200 C 400 100, 800 400, 1000 200 C 1400 -200, 1800 400, 2200 200 S 2800 600, 3200 200",
    width: 50,
    dur: 13,
    delay: "1.2s",
  },
  {
    d: "M -400 700 C 100 900, 700 300, 1100 700 C 1500 1100, 2100 300, 2500 700 S 3100 1100, 3500 700",
    width: 70,
    dur: 14,
    delay: "0.5s",
  },
  {
    d: "M -250 400 C 300 600, 500 200, 900 400 C 1300 600, 1700 200, 2100 400",
    width: 55,
    dur: 10,
    delay: "2s",
  },
  {
    d: "M -350 800 C 200 600, 800 1000, 1300 800 C 1800 600, 2400 1000, 2900 800",
    width: 65,
    dur: 12,
    delay: "1.8s",
  },
];

// Ayarlar
const COPIES = 5; // paralel çizgi sayısı
const SPACING = 22; // çizgiler arası dikey aralık
const BASE_OPACITY = 0.68; // temel opaklık
const WIDTH_SCALE = 0.4; // genel inceltme (0.42 ≈ %58 inceltir)
const MIN_WIDTH = 8; // aşırı incelmeyi önleyen taban kalınlık

const HeroRiver = () => {
  const offsets = Array.from(
    { length: COPIES },
    (_, j) => (j - (COPIES - 1) / 2) * SPACING
  );

  return (
    <div
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, #B5E6FF 0%, #DAF3FF 40%, #C7E9FF 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="whiteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="28%" stopColor="rgba(255,255,255,0.45)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.85)" />
            <stop offset="72%" stopColor="rgba(255,255,255,0.45)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          {/* Daha ince ve net görünüm için blur hafifletildi */}
          <filter id="water" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.006 0.018"
              numOctaves="2"
              seed="11"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="6"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="0.45" />
          </filter>
        </defs>

        {strokes.flatMap((s, i) =>
          offsets.map((off, j) => {
            // kısmi incelme: merkez biraz kalın, kenarlara doğru incelme
            const half = (COPIES - 1) / 2;
            const t = half > 0 ? (j - half) / half : 0; // -1..1
            const falloff = 0.75 + 0.25 * Math.cos(Math.PI * Math.abs(t)); // 1.0 merkez, 0.5 kenar

            const dashLen = Math.max(170, 220 - j * 12);
            const gapLen = 1000 - dashLen;
            const dur = (s.dur * (0.92 + j * 0.04)).toFixed(2);
            const delayBase = parseFloat(s.delay) || 0;
            const delay = `${(delayBase + j * 0.28).toFixed(2)}s`;

            const width = Math.max(MIN_WIDTH, s.width * WIDTH_SCALE * falloff);
            const opacity = Math.max(0.24, BASE_OPACITY - j * 0.09);

            return (
              <path
                key={`${i}-${j}`}
                d={s.d}
                transform={`translate(0 ${off})`}
                stroke="url(#whiteGrad)"
                strokeWidth={width}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                pathLength="1000"
                style={{
                  strokeDasharray: `${dashLen} ${gapLen}`,
                  strokeDashoffset: 1000,
                  animation: `paintStroke ${dur}s linear ${delay} infinite`,
                  filter: "url(#water)",
                  opacity,
                }}
              />
            );
          })
        )}
      </svg>

      <div className="relative z-10 text-center px-6">
        <h1
          className="text-5xl md:text-7xl font-extrabold text-sky-900/90 leading-tight"
          style={{
            fontFamily:
              'Playfair Display, ui-serif, Georgia, "Times New Roman", serif',
            textShadow: "0 2px 12px rgba(0,0,0,0.06)",
            letterSpacing: "0.02em",
          }}
        >
          Sanatın Dokunuşu
        </h1>
        <p className="mt-6 text-lg md:text-xl text-sky-900/70 max-w-xl mx-auto leading-relaxed">
          Her darbe bir hikaye. Her iz bir akış.
        </p>
      </div>

      <style>{`
        @keyframes paintStroke {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default HeroRiver;
