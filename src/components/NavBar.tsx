import Link from "next/link";

const linkClasses =
  "text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/65 hover:text-white/90 hover:underline underline-offset-[6px] transition-colors focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent";

export default function NavBar() {
  return (
    <nav className="absolute left-0 right-0 top-0 z-20 px-6 sm:px-10 lg:px-14 py-6">
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center gap-6 sm:gap-10">
          <Link href="/" className={linkClasses}>
            Home
          </Link>
          <a href="#about" className={linkClasses}>
            About
          </a>
          <Link href="/projects" className={linkClasses}>
            Projects
          </Link>
        </div>

        <div className="flex justify-center">
          <span className="sr-only">STERLING &amp; STONE</span>
        </div>

        <div className="flex items-center justify-end gap-6 sm:gap-10">
          <Link href="/contact" className={linkClasses}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
