import React from "react";

// DEĞİŞİKLİK: Çizgi sayısı 12'ye çıkarıldı ve yollar daha kıvrımlı hale getirildi.
const pastaStrands = [
  {
    d: "M -150 200 C 100 50, 200 500, 500 450 S 800 400, 1000 600 C 1200 800, 1500 500, 1700 800",
    width: 14,
    grad: "grad-spaghetti",
    dur: 9.5,
    delay: "0s",
    pathLength: 1050,
  },
  {
    d: "M -200 700 C 50 900, 300 400, 600 600 S 900 900, 1100 700 C 1300 500, 1400 900, 1800 750",
    width: 16,
    grad: "grad-egg-pasta",
    dur: 10.0,
    delay: "0.2s",
    pathLength: 1100,
  },
  {
    d: "M -100 50 C 250 300, 150 800, 550 700 S 850 500, 1050 750 Q 1300 1000, 1650 600",
    width: 12,
    grad: "grad-tomato-sauce",
    dur: 9.2,
    delay: "0.4s",
    pathLength: 1080,
  },
  {
    d: "M -250 850 Q 100 600, 400 800 C 700 1000, 900 600, 1200 700 S 1500 900, 1800 600",
    width: 15,
    grad: "grad-spaghetti",
    dur: 8.8,
    delay: "0.6s",
    pathLength: 1020,
  },
  {
    d: "M -180 400 C 200 200, 400 800, 700 500 Q 1000 200, 1200 600 C 1400 900, 1700 400, 1900 650",
    width: 17,
    grad: "grad-egg-pasta",
    dur: 10.5,
    delay: "0.8s",
    pathLength: 1150,
  },
  {
    d: "M -50 900 C 350 1100, 400 500, 800 700 S 1100 800, 1400 600 C 1600 400, 1800 800, 2000 900",
    width: 13,
    grad: "grad-pesto",
    dur: 9.8,
    delay: "1.0s",
    pathLength: 1090,
  },
  {
    d: "M -220 150 C 80 400, 380 -50, 680 250 S 980 600, 1280 400 C 1480 200, 1780 700, 2000 500",
    width: 15,
    grad: "grad-spaghetti",
    dur: 9.3,
    delay: "1.2s",
    pathLength: 1120,
  },
  {
    d: "M -120 600 C 180 800, 480 300, 780 550 S 1080 900, 1380 650 C 1580 450, 1880 850, 2100 700",
    width: 16,
    grad: "grad-egg-pasta",
    dur: 10.2,
    delay: "1.4s",
    pathLength: 1060,
  },
  {
    d: "M -300 500 C 0 300, 200 900, 500 600 S 800 300, 1100 700 S 1400 900, 1700 550",
    width: 12,
    grad: "grad-tomato-sauce",
    dur: 9.0,
    delay: "1.6s",
    pathLength: 1040,
  },
  {
    d: "M -170 800 Q 130 1000, 430 750 C 730 500, 930 950, 1230 700 S 1530 500, 1830 800",
    width: 14,
    grad: "grad-spaghetti",
    dur: 10.8,
    delay: "1.8s",
    pathLength: 1180,
  },
  {
    d: "M -80 300 C 220 100, 520 600, 820 400 S 1120 150, 1420 500 C 1620 800, 1920 300, 2100 550",
    width: 18,
    grad: "grad-egg-pasta",
    dur: 9.6,
    delay: "2.0s",
    pathLength: 1130,
  },
  {
    d: "M -280 650 C 20 450, 320 950, 620 750 S 920 550, 1220 800 C 1520 1000, 1820 500, 2050 700",
    width: 13,
    grad: "grad-pesto",
    dur: 10.4,
    delay: "2.2s",
    pathLength: 1070,
  },
];

// DEĞİŞİKLİK: 12 çizgiyi 4'erli 3 gruba ayırdık.
const groups = [
  pastaStrands.slice(0, 4),
  pastaStrands.slice(4, 8),
  pastaStrands.slice(8, 12),
];

const HeroSpaghetti = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-orange-50 flex items-center justify-center">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="-200 -200 2200 1300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="grad-spaghetti" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="grad-egg-pasta" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="60%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#FB923C" />
          </linearGradient>
          <linearGradient
            id="grad-tomato-sauce"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#FF7A7A" />
            <stop offset="50%" stopColor="#FF7A7A" />
            <stop offset="100%" stopColor="#F06F6F" />
          </linearGradient>
          <linearGradient id="grad-pesto" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#86EFAC" />
            <stop offset="50%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#24B057" />
          </linearGradient>
        </defs>

        {groups.map((groupItems, groupIndex) => (
          <g
            key={groupIndex}
            className="pastaGroup"
            style={{ "--anim-delay": `${groupIndex * 5}s` }} // Gruplar arası gecikmeyi artırdık
          >
            {groupItems.map((strand, strandIndex) => (
              <path
                key={strandIndex}
                className="pastaStrand"
                d={strand.d}
                stroke={`url(#${strand.grad})`}
                strokeWidth={strand.width}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                pathLength={strand.pathLength}
                style={{
                  "--len": strand.pathLength,
                  "--drawDur": `${strand.dur}s`,
                  "--delay": strand.delay,
                }}
              />
            ))}
          </g>
        ))}
      </svg>

      <div className="relative z-10 text-center px-6">
        <h1
          className="text-5xl md:text-7xl font-extrabold text-black leading-tight"
          style={{
            fontFamily:
              '"Lobster", cursive, "Playfair Display", ui-serif, Georgia, serif',
            textShadow: "0 4px 20px rgba(0,0,0,0.6)",
            letterSpacing: "0.01em",
          }}
        >
          Lezzetin
          <br />
          Dokunuşu
        </h1>
        <p className="mt-8 text-lg md:text-xl text-black max-w-xl mx-auto leading-relaxed">
          Her bir şerit taze, her bir kıvrım bir lezzet. Mamma Mia!
        </p>
      </div>

      <style jsx global>{`
        @keyframes drawOnce {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes groupBreathe {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.9;
          }
        }

        .pastaGroup {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.25));
          transform: translateZ(0);
          will-change: opacity, filter;
          opacity: 0.5; /* Pürüzsüz döngü için başlangıç değeri */
          animation: groupBreathe 15s ease-in-out var(--anim-delay, 0s) infinite;
        }

        .pastaStrand {
          mix-blend-mode: normal;
          vector-effect: non-scaling-stroke;
          shape-rendering: geometricPrecision;
          will-change: stroke-dashoffset;
          stroke-dasharray: calc(var(--len) + 0.5) 1000;
          stroke-dashoffset: var(--len);
          animation: drawOnce var(--drawDur) cubic-bezier(0.4, 0.6, 0.5, 1)
            var(--delay) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .pastaGroup,
          .pastaStrand {
            animation: none !important;
            opacity: 0.75;
          }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default React.memo(HeroSpaghetti);
