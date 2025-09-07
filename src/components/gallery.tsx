"use client";

import { useState, useEffect } from "react";

interface GalleryProps {
  images: string[];
  perPage?: number;
}

export default function Gallery({ images, perPage = 6 }: GalleryProps) {
  const [page, setPage] = useState(1);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = [...images];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledImages(shuffled);
  }, [images]);

  const totalPages = Math.ceil(shuffledImages.length / perPage);
  const start = (page - 1) * perPage;
  const currentImages = shuffledImages.slice(start, start + perPage);

  return (
    <div className="mt-10">
      {/* Grid Gambar */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md border"
          >
            <img
              src={src}
              alt={`Gallery ${idx}`}
              className="w-full h-40 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        {/* Previous Button */}
        <button
          onClick={() =>
            setPage((p) => (p === 1 ? totalPages : p - 1))
          }
          className="px-3 py-1 rounded-md bg-gray-200"
        >
          &lt;
        </button>

        {/* Next Button */}
        <button
          onClick={() =>
            setPage((p) => (p === totalPages ? 1 : p + 1))
          }
          className="px-3 py-1 rounded-md bg-gray-200"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
