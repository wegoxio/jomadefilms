"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { PlayIcon } from "@/components/home/icons";

type GalleryAsset = {
  type: string;
  label: string;
  src: string;
  poster?: string;
};

type PortfolioDetailGalleryProps = {
  assets: GalleryAsset[];
  title: string;
};

export function PortfolioDetailGallery({
  assets,
  title,
}: PortfolioDetailGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeAsset = assets[activeIndex];

  const handleVideoReady = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-video overflow-hidden border border-[#d7bb7b]/16 bg-[#12110f]">
        <div
          key={`${activeAsset.type}-${activeAsset.src}`}
          className="absolute inset-0 animate-gallery-in"
        >
          {activeAsset.type === "video" ? (
            <video
              ref={videoRef}
              src={activeAsset.src}
              poster={activeAsset.poster}
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              onLoadedMetadata={handleVideoReady}
            />
          ) : (
            <Image
              src={activeAsset.src}
              alt={`${title} - ${activeAsset.label}`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              priority
            />
          )}
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {assets.map((asset, index) => {
          const isActive = index === activeIndex;
          const preview = asset.poster ?? asset.src;

          return (
            <button
              key={`${asset.label}-${asset.src}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative h-24 w-40 shrink-0 overflow-hidden border bg-[#171614] transition-colors duration-300 ${
                isActive
                  ? "border-[#d7bb7b]"
                  : "border-[#d7bb7b]/14 hover:border-[#d7bb7b]/50"
              }`}
              aria-label={`Ver ${asset.label}`}
            >
              <Image
                src={preview}
                alt=""
                fill
                sizes="160px"
                className="object-cover opacity-78 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/22" />
              {asset.type === "video" ? (
                <span className="absolute left-3 top-3 inline-flex h-7 w-7 items-center justify-center bg-black/62 text-[#d7bb7b]">
                  <PlayIcon className="h-3 w-3" />
                </span>
              ) : null}
              <span className="absolute bottom-2 left-3 right-3 text-left text-[10px] uppercase tracking-[0.16em] text-[#f5efe1]">
                {asset.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
