export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-[position:50%_60%]" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_65%,rgba(0,0,0,0.8)_100%)]" />

    </section>
  );
}
