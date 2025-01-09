"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <div id="hero" className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image priority src="/Me.png" height={300} width={300} alt="Dariel Avila" />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-medium font-inter text-white">
          <span className="inline-block bg-gradient-to-r from-gray-300 via-gray-500 to-gray-600 font-bold text-transparent bg-clip-text p-2 animate-gradient bg-300% text-5xl md:text-6xl lg:text-7xl py-4">
            Dariel Avila
          </span>
        </h1>

        <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
          I do Code &{" "}
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Chill
          </span>{" "}
          🍿
        </p>
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Adaptable, quick to learn, and a natural leader. Driven by a clear vision, proactive, and
          deeply passionate about technologies that give back to society.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:darielavila42@gmail.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};
