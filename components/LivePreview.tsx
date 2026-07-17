"use client";

import { useEffect, useRef, useState } from "react";

const BASE_WIDTH = 1280;
const BASE_HEIGHT = 800;

export default function LivePreview({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / BASE_WIDTH);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={box}
      className="relative aspect-[16/10] w-full overflow-hidden bg-cream"
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        scrolling="no"
        tabIndex={-1}
        aria-hidden="true"
        style={{
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          border: 0,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          pointerEvents: "none",
        }}
      />
      {/* overlay agar klik diteruskan ke kartu, bukan ke iframe */}
      <div className="absolute inset-0" />
    </div>
  );
}
