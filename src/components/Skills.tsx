import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { skills, softSkill, tools } from "@/lib/projectsData";

export default function Skills() {
  return (
    <section
      className="sm:w-[90%] mx-auto h-full flex flex-col justify-center sm:gap-24 my-10"
      id="skills"
    >
      <article className="flex flex-col gap-5 px-5">
        <h2 className="text-5xl font-bold text-center pt-4 text-white">
          {"SKILLS"}
        </h2>
        <div className=" h-5 flex items-center font-semibold sm:text-lg justify-center space-x-3">
          <div>
            <h5 className="tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
              Tech Stack
            </h5>
          </div>
          {/* <Separator orientation="vertical" /> */}
          <div>
            <h5 className="tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
              & Design
            </h5>
          </div>
        </div>
        <section className="flex gap-4 flex-wrap justify-center max-w-5xl mx-auto">
          {skills.map(({ id, title, icon }) => {
            return (
              <Badge
                variant={"default"}
                key={id}
                className="flex items-center gap-1"
              >
                {icon && (
                  <Image
                    src={`/tech-icons${icon}`}
                    alt={`${title} icon`}
                    width={26}
                    height={26}
                    className="object-cover"
                  />
                )}
                {title}
              </Badge>
            );
          })}
        </section>
        <Separator className="max-w-4xl mx-auto" />

        <div className="font-semibold flex items-center sm:text-lg justify-center">
          <h5 className="tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
            Tools
          </h5>
        </div>

        <section className="flex gap-4 flex-wrap justify-center max-w-5xl mx-auto">
          {tools.map(({ id, title, icon }) => {
            return (
              <Badge
                variant={"default"}
                key={id}
                className="flex items-center gap-1"
              >
                {icon && (
                  <Image
                    src={`/tech-icons${icon}`}
                    alt={`${title} icon`}
                    width={22}
                    height={22}
                    className="object-cover"
                  />
                )}
                {title}
              </Badge>
            );
          })}
        </section>
        <Separator className="max-w-md mx-auto" />

        <div className="flex items-center font-semibold sm:text-lg justify-center flex-wrap ">
          <h5 className="tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
            Soft Skills
          </h5>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          {softSkill.map(({ id, title }) => {
            return (
              <Badge variant={"default"} key={id}>
                {title}
              </Badge>
            );
          })}
        </div>
      </article>
    </section>
  );
}
