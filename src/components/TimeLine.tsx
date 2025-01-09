import TimeLineItem from "./TimeLineItem";
import { timeline } from "@/lib/projectsData";

export default function Timeline() {
  return (
    <section className="flex flex-col md:flex-row justify-center" id="timeline">
      <div className="w-full md:w-7/12">
        <div className="text-center">
          <h2 className="text-5xl lg:text-5xl pb-2 sm:px-16 font-bold font-mono text-gray-300">
            {"TIMELINE"}
          </h2>
          <p className=" tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
            EXPLORE NOW
          </p>
        </div>
        {timeline.map((item, index) => (
          <TimeLineItem
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </section>
  );
}
