"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectCardProps = {
  title: string;
  image: string;
  slug: string;
};

export default function ProjectCard({
  title,
  image,
  slug,
}: ProjectCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group block cursor-default rounded-2xl bg-neutral-900/70 p-4">
      <div
        key={image}
        className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-800"
      >
        {hasError ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-800 via-neutral-900 to-black text-xs uppercase tracking-[0.2em] text-white/60">
            Image Placeholder
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover brightness-90 transition duration-300 group-hover:brightness-110"
            onError={() => setHasError(true)}
          />
        )}
      </div>
      <div className="mt-4">
        <div className="text-sm uppercase tracking-[0.2em] text-white">
          {title}
        </div>
      </div>
    </div>
  );
}
