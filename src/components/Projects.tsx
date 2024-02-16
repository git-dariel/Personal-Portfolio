import { projectsData } from "@/lib/projectsData";
import Image from "next/image";
import { GithubIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default function Projects() {
  return (
    <section
      className="h-max text-slate-50 p-6 md:p-10 sm:w-[95%] mx-auto text-center"
      id="projects"
    >
      <h2 className="text-5xl lg:text-5xl pb-2 pl-6 sm:px-16 font-bold font-mono text-gray-300">
        {"PROJECTS"}
      </h2>

      <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
        EXPLORE NOW
      </p>

      <div className="bg-gray-800 bg-opacity-10 backdrop-blur-xl  flex flex-col gap-10 rounded-[56px] h-max sm:w-[90%] mx-auto">
        {projectsData.map(
          ({ id, name, description, github, link, image, techStack }) => {
            return (
              <article
                key={id}
                className="rounded-[30%] flex flex-col md:flex-row justify-between gap-6 px-8 py-9 max-w-6xl mx-auto w-full"
              >
                <div className="rounded-2xl border border-slate-950 overflow-hidden aspect-video min-w-[50%] flex items-center justify-center">
                  {image ? (
                    <Image
                      src={image}
                      alt={`${name} project image`}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center">
                      <p className="font-semibold text-center">
                        I&apos;m working on it...
                      </p>
                    </div>
                  )}
                </div>

                <section className="flex flex-col gap-5 justify-between min-w-[45%] min-h-[200px]">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-medium text-xl ">{name}</h3>

                      <Button asChild variant={"secondary"} size={"icon"}>
                        <Link href={github} target="_blank" rel="noreferrer">
                          <GithubIcon size={26} />
                        </Link>
                      </Button>
                    </div>

                    <div className="flex items-center flex-wrap gap-2 py-3 cursor-pointer">
                      {techStack.map((tech, index) => (
                        <Badge
                          key={index}
                          variant={"default"}
                          className="rounded-full text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="font-inter">{description}</p>
                  </div>

                  <Link href={link} target="_blank" rel="noreferrer">
                    <Button className="w-full" variant={"default"}>
                      Look At
                    </Button>
                  </Link>
                </section>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
}
