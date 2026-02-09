import NavBar from "@/components/NavBar";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-[position:50%_60%]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/45" />
      <NavBar />

      <div className="absolute left-0 right-0 top-5 z-10 flex justify-center">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
          STERLING &amp; STONE
        </span>
      </div>

      <div className="absolute inset-0 z-10 -translate-y-[47px]">
        <div className={`${bebas.className} absolute inset-0`}>
          <div className="relative px-6 pt-24 text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] sm:px-10 md:absolute md:left-6 md:top-24 md:px-0 md:pt-0 lg:left-14 lg:top-32">
            <div className="inline-block origin-left scale-x-[1.12] leading-[0.9] text-[clamp(40px,10vw,96px)] md:text-[clamp(56px,9.2vw,150px)]">
              AESTHETICS IN EVERY
            </div>
            <div className="leading-[0.9] text-[clamp(40px,10vw,96px)] md:text-[clamp(56px,9.2vw,150px)]">
              DETAIL:
            </div>
          </div>

          <div className="relative mt-6 px-6 text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] sm:px-10 md:absolute md:left-[815px] md:top-[calc(11rem+23px)] md:mt-0 md:px-0 md:text-right lg:top-[calc(15rem+23px)]">
            <div className="inline-block origin-left scale-x-[1.18] leading-[0.9] text-[clamp(40px,11vw,96px)] md:text-[clamp(64px,10vw,160px)]">
              YOUR
            </div>
          </div>

          <div className="relative mt-2 px-6 text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] sm:px-10 md:absolute md:left-[calc(100%-645px)] md:top-[calc(8rem+105px)] md:mt-0 md:px-0 lg:top-[calc(10rem+105px)]">
            <div className="leading-[0.9] text-[clamp(40px,11vw,96px)] md:translate-x-[300px] md:text-[clamp(64px,10vw,160px)]">
              IDEAL
            </div>
            <div className="inline-block origin-right scale-x-[1.12] leading-[0.9] text-[clamp(40px,11vw,96px)] md:translate-x-[180px] md:text-[clamp(64px,10vw,160px)]">
              INTERIOR
            </div>
          </div>
        </div>

      </div>

      <a
        href="/contact"
        aria-label="Get in touch"
        className="absolute bottom-10 left-1/2 z-10 flex h-32 w-32 -translate-x-1/2 items-center justify-center rounded-full border border-white/40 text-[10px] uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-white/70 hover:text-white sm:bottom-12 sm:h-40 sm:w-40 sm:text-xs md:left-auto md:right-10 md:top-[calc(58%+176px)] md:-translate-x-0 md:-translate-y-1/2 md:bottom-auto md:h-44 md:w-44 lg:right-20 lg:h-60 lg:w-60"
      >
        Get in touch
      </a>
    </section>
  );
}
