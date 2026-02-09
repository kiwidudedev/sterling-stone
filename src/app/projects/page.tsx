import ProjectsHero from "../../components/ProjectsHero";
import ProjectGrid from "../../components/ProjectGrid";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <ProjectsHero />
      <ProjectGrid />
      <footer className="border-t border-white/10 bg-neutral-950 py-6">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 text-xs uppercase tracking-[0.2em] text-white/60">
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white/90">
              About
            </a>
            <a href="#services" className="hover:text-white/90">
              Services
            </a>
            <a href="#contact" className="hover:text-white/90">
              Contact
            </a>
          </div>
          <div>Copyright © Sterling &amp; Stone</div>
        </div>
      </footer>
    </main>
  );
}
