import NavBar from "../../components/NavBar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-contact.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_45%)]" />

        <NavBar />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <div className="text-[clamp(32px,8vw,64px)] font-black uppercase tracking-tight leading-[0.9] sm:text-[clamp(40px,6vw,72px)]">
              Contact Us
            </div>
            <div className="mt-8 space-y-6 text-sm uppercase tracking-[0.2em] text-white/70">
              <div>
                <div className="text-white/50">Studio</div>
                <div className="mt-2 text-white/90">Queenstown,</div>
                <div className="text-white/90">New Zealand</div>
              </div>
              <div>
                <div className="text-white/50">Contacts</div>
                <div className="mt-2 text-white/90">hello@sterlingstone.com</div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl border border-white/10" />
            <div className="absolute -inset-4 rounded-3xl" />
            <div className="relative rounded-3xl bg-neutral-900/80 p-6 shadow-2xl sm:p-8">
              <div className="text-sm uppercase tracking-[0.2em] text-white/70">
                Contact form
              </div>
              <form className="mt-6 space-y-5">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Name
                  </span>
                  <input
                    type="text"
                    placeholder="John"
                    className="mt-2 w-full border-b border-white/10 bg-transparent py-2 text-white/90 placeholder:text-white/30 focus:border-white/50 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="mt-2 w-full border-b border-white/10 bg-transparent py-2 text-white/90 placeholder:text-white/30 focus:border-white/50 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Message
                  </span>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project"
                    className="mt-2 w-full resize-none border-b border-white/10 bg-transparent py-2 text-white/90 placeholder:text-white/30 focus:border-white/50 focus:outline-none"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full border border-white/30 bg-white/5 py-3 text-xs uppercase tracking-[0.3em] text-white transition-colors hover:border-white/70 hover:bg-white/10"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
