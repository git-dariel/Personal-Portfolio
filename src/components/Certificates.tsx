"use client";

import * as React from "react";
import Image from "next/image";
import { certificates } from "@/lib/projectsData";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Certificates() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    setCount(api.scrollSnapList().length);
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden"
    >
      <div className="flex flex-col justify-around flex-wrap items-center w-full max-w-[1200px]">
        <h2 className="text-5xl lg:text-5xl pb-2 sm:px-16 font-bold font-mono text-gray-300">
          {"CERTIFICATES"}
        </h2>
        <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
          ACHIEVEMENTS
        </p>

        <div className="w-full mt-8 px-4 md:px-10">
          <Carousel
            opts={{ align: "start", loop: true }}
            setApi={setApi}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="ml-0">
              {certificates.map((cert) => (
                <CarouselItem
                  key={cert.id}
                  className="pl-0 sm:pl-4 basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-4 hover:shadow-xl transition-all duration-300 md:hover:scale-[1.02] md:hover:-translate-y-1 flex flex-col h-full min-h-[330px]">
                    <div className="relative w-full h-44 sm:h-48 mb-4">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">{cert.title}</h3>
                    <div className="flex justify-between items-center gap-4">
                      <p className="text-gray-400 text-xs sm:text-sm md:text-base">{cert.issuer}</p>
                      <p className="text-sm text-gray-500">{cert.date}</p>
                    </div>
                    <div className="mt-auto pt-4">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 hover:opacity-80 transition-opacity"
                      >
                        View Certificate →
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
              <CarouselPrevious className="static translate-y-0 h-9 w-9 border-zinc-600 bg-zinc-900/70 text-gray-200 hover:bg-zinc-800" />
              <div className="flex items-center gap-2">
                {Array.from({ length: count }).map((_, index) => {
                  const isActive = current === index + 1;

                  return (
                    <button
                      key={`cert-indicator-${index}`}
                      type="button"
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Go to certificate ${index + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        isActive ? "w-6 bg-orange-500" : "w-2 bg-zinc-500"
                      }`}
                    />
                  );
                })}
              </div>
              <CarouselNext className="static translate-y-0 h-9 w-9 border-zinc-600 bg-zinc-900/70 text-gray-200 hover:bg-zinc-800" />
            </div>

            <CarouselPrevious className="hidden md:flex left-1 md:-left-4 border-zinc-600 bg-zinc-900/70 text-gray-200 hover:bg-zinc-800" />
            <CarouselNext className="hidden md:flex right-1 md:-right-4 border-zinc-600 bg-zinc-900/70 text-gray-200 hover:bg-zinc-800" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
