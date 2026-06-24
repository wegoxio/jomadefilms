"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

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
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const activeAsset = assets[activeIndex];

  const updateThumbnailControls = () => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    setCanScrollPrevious(track.scrollLeft > 4);
    setCanScrollNext(track.scrollLeft < maxScrollLeft - 4);
  };

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    updateThumbnailControls();

    const handleScroll = () => updateThumbnailControls();

    track.addEventListener("scroll", handleScroll, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      updateThumbnailControls();
    });

    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, [assets.length]);

  const scrollThumbnailPage = (direction: -1 | 1) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.scrollBy({
      left: direction * track.clientWidth,
      behavior: "smooth",
    });
  };

  const handleVideoReady = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;
  };

  const scrollToIndex = (index: number) => {
    const safeIndex = Math.max(0, Math.min(index, assets.length - 1));
    const targetItem = itemRefs.current[safeIndex];

    setActiveIndex(safeIndex);

    targetItem?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const goToPrevious = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const goToNext = () => {
    if (activeIndex < assets.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative h-[min(72vh,460px)] overflow-hidden border border-[#d7bb7b]/16 bg-[#12110f] sm:h-[500px] lg:h-[560px]">
        <div
          key={`${activeAsset.type}-${activeAsset.src}`}
          className="absolute inset-0 flex items-center justify-center animate-gallery-in bg-[#12110f]"
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
              className="object-contain"
              priority
            />
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => scrollThumbnailPage(-1)}
          disabled={!canScrollPrevious}
          className="hidden h-10 w-10 shrink-0 items-center justify-center border border-[#d7bb7b]/24 bg-[#171614] text-[#d7bb7b] transition-all duration-300 hover:border-[#d7bb7b] hover:bg-[#1d1b18] disabled:cursor-not-allowed disabled:opacity-40 sm:inline-flex"
          aria-label="Miniatura anterior"
        >
          <span className="text-lg leading-none">←</span>
        </button>

        <div
          ref={trackRef}
          className="flex flex-1 snap-x snap-mandatory gap-3 overflow-x-auto pb-1 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {assets.map((asset, index) => {
            const isActive = index === activeIndex;
            const preview = asset.poster ?? asset.src;

            return (
              <button
                key={`${asset.label}-${asset.src}`}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={`group relative h-24 shrink-0 snap-start overflow-hidden border bg-[#171614] transition-all duration-300 basis-[calc((100%-12px)/2)] sm:basis-[calc((100%-24px)/3)] lg:basis-[calc((100%-48px)/5)] ${
                  isActive
                    ? "border-[#d7bb7b] shadow-[0_0_0_1px_rgba(215,187,123,0.2)]"
                    : "border-[#d7bb7b]/14 hover:border-[#d7bb7b]/50"
                }`}
                aria-label={`Ver ${asset.label}`}
              >
                <Image
                  src={preview}
                  alt=""
                  fill
                  sizes="112px"
                  className="object-cover opacity-78 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/22" />
                {asset.type === "video" ? (
                  <span className="absolute left-2 top-2 inline-flex h-6 w-6 items-center justify-center bg-black/62 text-[#d7bb7b]">
                    <PlayIcon className="h-3 w-3" />
                  </span>
                ) : null}
                <span className="absolute bottom-2 left-2 right-2 text-left text-[10px] uppercase tracking-[0.16em] text-[#f5efe1]">
                  {asset.label}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => scrollThumbnailPage(1)}
          disabled={!canScrollNext}
          className="hidden h-10 w-10 shrink-0 items-center justify-center border border-[#d7bb7b]/24 bg-[#171614] text-[#d7bb7b] transition-all duration-300 hover:border-[#d7bb7b] hover:bg-[#1d1b18] disabled:cursor-not-allowed disabled:opacity-40 sm:inline-flex"
          aria-label="Miniatura siguiente"
        >
          <span className="text-lg leading-none">→</span>
        </button>
      </div>
    </div>
  );
}
