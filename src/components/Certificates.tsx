import Image from "next/image";
import { certificates } from "@/lib/certificatesData";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h2 className="text-5xl lg:text-5xl pb-2 sm:px-16 font-bold font-mono text-gray-300">
          {"CERTIFICATES"}
        </h2>
        <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
          ACHIEVEMENTS
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">{cert.title}</h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-400">{cert.issuer}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
