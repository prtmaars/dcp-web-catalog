"use client";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative w-[full] h-[40vh] flex items-center justify-center">
      {/* Banner Image */}
      <img
        src="/banner.jpg"
        alt="Banner DCP"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Teks */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-md">{subtitle}</p>
      </div>
    </section>
  );
}
