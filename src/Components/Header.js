import React from "react";

export default function Header({
  name = "Ad Soyad",
  role = "Product Designer • Frontend",
  tagline = "Kullanıcı odaklı arayüzler ve keyifli deneyimler tasarlıyorum.",
  portraitSrc = "/Photo.png", // 600x600 çizim portre
  faceDirection = "left", // "left" (sol profil, sola bakıyor) | "right"
}) {
  // Yüz sağa bakıyorsa görsel solda; sola bakıyorsa sağda olsun
  const imageOnLeft = faceDirection === "right";

  return (
    <header className="relative overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Arka plan dekor */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl"></div>
        <div className="absolute -right-32 -bottom-32 h-[28rem] w-[28rem] rounded-full bg-fuchsia-400/20 blur-3xl"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent dark:via-white/10"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-2 lg:py-24">
          {/* Görsel */}
          <div
            className={`order-1 justify-self-center ${
              imageOnLeft
                ? "lg:order-first lg:justify-self-start"
                : "lg:order-last lg:justify-self-end"
            }`}
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-sky-500/30 via-violet-500/20 to-transparent blur-2xl"
              />
              <div className="relative aspect-square w-[min(90vw,420px)] overflow-hidden rounded-[2rem] border border-black/5 shadow-2xl sm:w-[420px] lg:w-[520px] dark:border-white/10">
                <img
                  src={portraitSrc}
                  alt={`${name} portre illüstrasyonu`}
                  className="h-full w-full object-cover"
                  width={600}
                  height={600}
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Metin */}
          <div
            className={`order-2 ${
              imageOnLeft ? "lg:order-last lg:pl-4" : "lg:order-first lg:pr-4"
            }`}
          >
            <div className="max-w-xl lg:max-w-none">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-black/5 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Portfolyom güncel
              </div>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {name}
              </h1>
              <p className="mt-3 text-lg font-medium text-slate-600 dark:text-slate-300">
                {role}
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                {tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projeler"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-white/90"
                >
                  Projelerimi gör
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="-mr-0.5"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
                <a
                  href="#iletisim"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white px-5 py-3 text-slate-900 transition hover:bg-slate-50 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:bg-white/5"
                >
                  İletişim
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4 text-slate-600 dark:text-slate-300">
                <a
                  href="mailto:hello@ornek.com"
                  className="hover:text-slate-900 dark:hover:text-white"
                  aria-label="E-posta"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </a>
                <a
                  href="https://github.com/kullanici"
                  className="hover:text-slate-900 dark:hover:text-white"
                  aria-label="GitHub"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .5A11.5 11.5 0 0 0 .5 12 11.5 11.5 0 0 0 8.3 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 .9-2.6-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.7 9.7 0 0 1 5.5 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.6 0 3.8-2.3 4.6-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/kullanici"
                  className="hover:text-slate-900 dark:hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-4v-5.1c0-1.2 0-2.7-1.6-2.7s-1.8 1.3-1.8 2.6V21H9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* /Metin */}
        </div>
      </div>
    </header>
  );
}
