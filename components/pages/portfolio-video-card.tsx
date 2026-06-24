"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { PlayIcon } from "@/components/home/icons";

type PortfolioVideoCardProps = {
  index: number;
  poster: string;
  title: string;
  videoSrc?: string;
  reverse?: boolean;
};

export function PortfolioVideoCard({
  index,
  poster,
  title,
  videoSrc,
  reverse = false,
}: PortfolioVideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canPlayVideo = Boolean(videoSrc);

  const handleVideoReady = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;
    void video.play();
  };

  return (
    <div
      className={`relative min-h-[320px] overflow-hidden bg-[#171614] sm:min-h-[360px] ${
        reverse ? "lg:order-2" : ""
      }`}
    >
      {isPlaying && canPlayVideo ? (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          className="h-full min-h-[320px] w-full object-cover sm:min-h-[360px]"
          controls
          autoPlay
          muted={false}
          playsInline
          preload="metadata"
          onLoadedMetadata={handleVideoReady}
        />
      ) : (
        <button
          type="button"
          aria-label={`Reproducir ${title}`}
          className="group/video relative block h-full min-h-[320px] w-full overflow-hidden text-left sm:min-h-[360px]"
          onClick={() => {
            if (canPlayVideo) {
              setIsPlaying(true);
            }
          }}
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover transition-transform duration-1000 group-hover/video:scale-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.72)_100%)]" />
          <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center border border-[#d7bb7b]/30 bg-black/42 text-[#d7bb7b] backdrop-blur transition-colors duration-300 group-hover/video:bg-[#d7bb7b] group-hover/video:text-[#090806]">
            <PlayIcon className="h-4 w-4" />
          </div>
          <p className="absolute bottom-5 left-5 text-7xl leading-none text-[#d7bb7b]/24">
            0{index + 1}
          </p>
        </button>
      )}
    </div>
  );
}
