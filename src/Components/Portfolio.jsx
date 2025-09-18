import React from "react";
import { FaGithub, FaLinkedin, FaRegEnvelope, FaFilePdf } from "react-icons/fa";
import CurvedLoop from "./CurvedLoop";
import TextType from "./TextType";

export default function Portfolio() {
  return (
    <div className="relative h-screen w-full bg-white opacity-100 [background-image:repeating-radial-gradient(circle_at_0_0,transparent_0,#ffffff_23px),repeating-linear-gradient(#75bdaa55,#75bdaa)]">
      <CurvedLoop
        marqueeText="React.js ◆ Next.js ◆ Tailwind CSS ◆ TypeScript ◆ Angular ◆ Node.js ◆ MongoDB ◆ Figma ◆ Accessible UI ◆ "
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="-z-10 pointer-events-none"
      />
      <div className="mx-16 2xl:mx-auto max-w-7xl lg:py-36 py-16">
        <div className="ml-1 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-md lg:text-lg font-semibold text-pink-700 shadow-md">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
          Frontend Developer
        </div>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl lg:text-6xl drop-shadow-lg">
          M. Erkam EREN
        </h1>
        <TextType
          text={
            "I design clear, welcoming interfaces that feel good to use. I focus on the details so everything works for everyone, including people using assistive tech. Bright visuals, quick load times, and accessibility built in."
          }
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="mt-6 text-lg lg:text-2xl max-w-xl text-slate-600 bg-white border shadow-lg rounded-lg p-4"
        />
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="/CV_MuhammedErkamEren.pdf"
            target="_blank"
            rel="noopener"
            aria-label="CV’ime göz at"
            className="group relative inline-flex rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2"
          >
            {/* Dış parıltı/çerçeve */}
            <span className="pointer-events-none absolute -inset-[2px] rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 opacity-80 blur-[6px] transition duration-300 group-hover:opacity-100 group-hover:blur-md"></span>

            {/* Asıl buton */}
            <span className="relative z-10 inline-flex items-center gap-4 rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 text-white backdrop-blur-md shadow-lg shadow-blue-600/10 transition duration-300 hover:shadow-blue-400/30">
              <span className="font-medium">Check out my CV</span>
              <FaFilePdf className="text-blue-100 transition-transform duration-200 w-5 h-5" />

              {/* Hover'da hafif ışıltı çizgisi */}
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-y-0 left-[-40%] w-[40%] rotate-12 bg-white/15 blur-lg transition-all duration-700 group-hover:left-[120%]"></span>
              </span>
            </span>
          </a>
        </div>

        <div className="mt-6 ml-6 flex items-center gap-4 text-slate-600 relative z-50 pointer-events-auto">
          <a href="mailto:erkamren@gmail.com">
            <FaRegEnvelope
              size={44}
              className="text-indigo-700 drop-shadow-lg hover:scale-110 transition-all duration-300"
            />
          </a>
          <a href="https://github.com/erkameren">
            <FaGithub
              size={44}
              className="text-black drop-shadow-lg hover:scale-110 transition-all duration-300"
            />
          </a>
          <a href="https://www.linkedin.com/in/muhammederkameren">
            <FaLinkedin
              size={44}
              className="text-blue-700 drop-shadow-lg hover:scale-110 transition-all duration-300"
            />
          </a>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 aspect-square w-[min(90vw,420px)] overflow-hidden sm:w-[420px] lg:w-[520px]">
        <img
          src="/photo.png"
          alt={`M. Erkam EREN portre illüstrasyonu`}
          className="h-full w-full object-cover"
          width={600}
          height={600}
          loading="eager"
        />
      </div>
    </div>
  );
}
