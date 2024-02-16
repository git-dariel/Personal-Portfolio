export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-5xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          Your friendly neighborhood aspiring software engineer with a knack for
          turning web and mobile development into digital magic. As a full-stack
          developer, I&apos;m not just about writing code – I&apos;m all about
          crafting seamless and dazzling user experiences.
          <br />
          <br />I honed my skills as a backend developer at Quezelco Corplan
          Company, where I had the fantastic opportunity to be part of the IT
          dream team. Working on the nitty-gritty of backend systems, I&apos;ve
          become your go-to person for building robust and scalable solutions.
        </p>
      </div>
    </section>
  );
}
