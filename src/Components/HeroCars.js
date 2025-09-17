import React from "react";

const HeroCars = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-800 flex items-center justify-center">
      {/* SVG - Hareket Eden Arabalar (Dış Dosyalardan) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <image
            id="car1"
            href="/cars/car1.svg"
            x="-45"
            y="10"
            width="360"
            height="180"
          />
          <image
            id="car2"
            href="/cars/car2.svg"
            x="-45"
            y="10"
            width="360"
            height="180"
          />
          <image
            id="car3"
            href="/cars/car3.svg"
            x="-50"
            y="10"
            width="360"
            height="180"
          />
          <image
            id="car4"
            href="/cars/car4.svg"
            x="-45"
            y="10"
            width="360"
            height="180"
          />
          <image
            id="car5"
            href="/cars/car5.svg"
            x="-42"
            y="10"
            width="360"
            height="180"
          />
          <image
            id="car6"
            href="/cars/car6.svg"
            x="-42"
            y="10"
            width="360"
            height="180"
          />
          <image
            id="car7"
            href="/cars/car7.svg"
            x="-42"
            y="10"
            width="360"
            height="180"
          />
          <image
            id="car8"
            href="/cars/car8.svg"
            x="-42"
            y="10"
            width="360"
            height="180"
          />
          <image
            id="car9"
            href="/cars/car9.svg"
            x="-42"
            y="10"
            width="360"
            height="180"
          />

          {/* Animasyon Yolları (Görünmezler) */}
          <path
            id="path1"
            d="M -100 400 C 300 200 600 700 1300 300 S 1700 800 2100 500"
            stroke="none"
            fill="none"
          />
          <path
            id="path2"
            d="M 2000 800 C 1600 600 1200 1000 600 700 S 200 1200 -200 900"
            stroke="none"
            fill="none"
          />
          <path
            id="path3"
            d="M 500 -100 C 800 400 400 900 1000 1200 S 1400 600 1800 300"
            stroke="none"
            fill="none"
          />
          <path
            id="path4"
            d="M 1500 1100 C 1100 800 700 400 300 700 S -100 300 400 100"
            stroke="none"
            fill="none"
          />
          <path
            id="path5"
            d="M -150 700 C 200 900 900 500 1200 800 S 1700 400 2200 600"
            stroke="none"
            fill="none"
          />
          <path
            id="path6"
            d="M -100 400 C 300 200 600 700 1300 300 S 1700 800 2100 500"
            stroke="none"
            fill="none"
          />
          <path
            id="path7"
            d="M 2000 800 C 1600 600 1200 1000 600 700 S 200 1200 -200 900"
            stroke="none"
            fill="none"
          />
          <path
            id="path8"
            d="M 500 -100 C 800 400 400 900 1000 1200 S 1400 600 1800 300"
            stroke="none"
            fill="none"
          />
          <path
            id="path9"
            d="M 1500 1100 C 1100 800 700 400 300 700 S -100 300 400 100"
            stroke="none"
            fill="none"
          />
          <path
            id="path10"
            d="M -150 700 C 200 900 900 500 1200 800 S 1700 400 2200 600"
            stroke="none"
            fill="none"
          />
        </defs>
        <g>
          <use href="#car1" transform="rotate(90)" />
          <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path1" />
          </animateMotion>
        </g>

        <g>
          <use href="#car2" transform="rotate(90)" />
          <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path2" />
          </animateMotion>
        </g>

        <g>
          <use href="#car3" transform="rotate(90)" />
          <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path3" />
          </animateMotion>
        </g>

        <g>
          <use href="#car4" transform="rotate(90)" />
          <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path4" />
          </animateMotion>
        </g>

        <g>
          <use href="#car5" transform="rotate(90)" />
          <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path5" />
          </animateMotion>
        </g>

        <g>
          <use href="#car6" transform="rotate(90)" />
          <animateMotion
            dur="16s"
            begin="5s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#path6" />
          </animateMotion>
        </g>

        <g>
          <use href="#car7" transform="rotate(90)" />
          <animateMotion
            dur="16s"
            begin="5s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#path7" />
          </animateMotion>
        </g>

        <g>
          <use href="#car8" transform="rotate(90)" />
          <animateMotion
            dur="16s"
            begin="5s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#path8" />
          </animateMotion>
        </g>

        <g>
          <use href="#car9" transform="rotate(90)" />
          <animateMotion
            dur="16s"
            begin="5s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#path9" />
          </animateMotion>
        </g>
      </svg>

      {/* Merkez Metni (Değişiklik yok) */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          Yolların{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Ritmi
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
          Şehrin ışıkları arasında bitmeyen bir yolculuk
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-pink-600 hover:to-purple-700">
          Keşfet
        </button>
      </div>
    </div>
  );
};

export default HeroCars;
