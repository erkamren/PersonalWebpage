import React from "react";

const HeroSnakes = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-950 flex items-center justify-center">
      {/* SVG Fırça İzleri */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* Fırça izi gradientleri - uçları şeffaf, ortaları opak */}
          <linearGradient id="brush1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="0" />
            <stop offset="30%" stopColor="#f472b6" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#f472b6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="brush2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
            <stop offset="30%" stopColor="#818cf8" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#818cf8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="brush3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
            <stop offset="30%" stopColor="#fbbf24" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#fbbf24" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="brush4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
            <stop offset="30%" stopColor="#34d399" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#34d399" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="brush5" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
            <stop offset="30%" stopColor="#f97316" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#f97316" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Çeşitli yönlerden gelen fırça izleri */}
        <path
          d="M -100 400 C 300 200 600 700 1300 300 S 1700 800 2100 500"
          stroke="url(#brush1)"
          strokeWidth="60"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: "400 1600",
            strokeDashoffset: "2000",
            animation: "paintStroke 15s linear infinite",
            opacity: "0.7",
            mixBlendMode: "screen",
          }}
        />

        <path
          d="M 2000 800 C 1600 600 1200 1000 600 700 S 200 1200 -200 900"
          stroke="url(#brush2)"
          strokeWidth="55"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: "400 1600",
            strokeDashoffset: "2000",
            animation: "paintStroke 18s linear infinite 2s",
            opacity: "0.6",
            mixBlendMode: "screen",
          }}
        />

        <path
          d="M 500 -100 C 800 400 400 900 1000 1200 S 1400 600 1800 300"
          stroke="url(#brush3)"
          strokeWidth="70"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: "400 1600",
            strokeDashoffset: "2000",
            animation: "paintStroke 12s linear infinite 1s",
            opacity: "0.65",
            mixBlendMode: "screen",
          }}
        />

        <path
          d="M 1500 1100 C 1100 800 700 400 300 700 S -100 300 400 100"
          stroke="url(#brush4)"
          strokeWidth="65"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: "400 1600",
            strokeDashoffset: "2000",
            animation: "paintStroke 16s linear infinite 3s",
            opacity: "0.55",
            mixBlendMode: "screen",
          }}
        />

        <path
          d="M -150 700 C 200 900 900 500 1200 800 S 1700 400 2200 600"
          stroke="url(#brush5)"
          strokeWidth="50"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: "400 1600",
            strokeDashoffset: "2000",
            animation: "paintStroke 14s linear infinite 4s",
            opacity: "0.7",
            mixBlendMode: "screen",
          }}
        />
      </svg>

      {/* Merkez Metni */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          Sanatın{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Dokunuşu
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
          Fırça darbeleriyle hayat bulan renklerin dansı
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-pink-600 hover:to-purple-700">
          Keşfet
        </button>
      </div>

      {/* Animasyon Stilleri */}
      <style jsx>{`
        @keyframes paintStroke {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSnakes;
