export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center max-w-[900px]">
        <h2 className="text-5xl lg:text-5xl pb-2 sm:px-16 font-bold font-mono text-gray-300">
          {"ABOUT ME"}
        </h2>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center text-base">
          A passionate and driven aspiring software engineer with a strong focus on backend
          engineering and a growing interest in DevOps, I specialize in building scalable, secure,
          and efficient web and mobile solutions. I am dedicated not only to writing clean and
          reliable code, but also to designing systems that deliver seamless and high-quality user
          experiences.
          <br />
          <br />I further developed my technical expertise through my experience with the UNLAD
          Foundation, where I contributed as part of a collaborative IT team, working on backend
          systems and system architecture. My core strengths lie in developing robust APIs, managing
          data-driven applications, and implementing cloud-based solutions using Google Cloud
          Platform. While my journey in DevOps is just beginning, I am actively learning and
          applying practices such as deployment automation, scalability, and system reliability to
          continuously improve my skill set.
        </p>
      </div>
    </section>
  );
}
