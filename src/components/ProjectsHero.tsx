import NavBar from "./NavBar";

export default function ProjectsHero() {
  return (
    <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden sm:h-[60vh] sm:min-h-[520px]">
      <div className="absolute inset-0 bg-black bg-[url('/projects/hero-projects.jpg')] bg-cover bg-[position:center_top] bg-no-repeat" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />

      <NavBar />

      <div className="absolute inset-x-0 top-1/2 -translate-y-[calc(50%+28px)]">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="relative">
            <div className="relative text-center text-white">
              <div className="text-[clamp(36px,5.5vw,92px)] font-black uppercase tracking-tight leading-[0.85]">
                Our Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
