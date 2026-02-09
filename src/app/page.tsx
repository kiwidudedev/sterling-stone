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
          <div className="absolute left-6 sm:left-10 lg:left-14 top-24 sm:top-28 lg:top-32 text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
            <div className="inline-block origin-left scale-x-[1.12] leading-[0.9] text-[clamp(56px,9.2vw,150px)]">
              AESTHETICS IN EVERY
            </div>
            <div className="leading-[0.9] text-[clamp(56px,9.2vw,150px)]">
              DETAIL:
            </div>
          </div>

          <div className="absolute left-[815px] top-[calc(11rem+23px)] sm:top-[calc(13rem+23px)] lg:top-[calc(15rem+23px)] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
            <div className="inline-block origin-left scale-x-[1.18] leading-[0.9] text-[clamp(64px,10vw,160px)]">
              YOUR
            </div>
          </div>

        <div className="absolute left-[calc(100%-645px)] top-[calc(8rem+105px)] sm:top-[calc(9rem+105px)] lg:top-[calc(10rem+105px)] pr-[200px] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
            <div className="leading-[0.9] text-[clamp(64px,10vw,160px)]">
              IDEAL
            </div>
            <div className="inline-block origin-right scale-x-[1.12] leading-[0.9] text-[clamp(64px,10vw,160px)]">
              INTERIOR
            </div>
          </div>
        </div>

      </div>

      <a
        href="/contact"
        aria-label="Get in touch"
        className="absolute right-10 sm:right-16 lg:right-20 top-[calc(58%+151px)] -translate-y-1/2 z-10 flex h-44 w-44 sm:h-52 sm:w-52 lg:h-60 lg:w-60 items-center justify-center rounded-full border border-white/40 text-sm uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-white/70 hover:text-white"
      >
        Get in touch
      </a>
    </section>
  );
}
