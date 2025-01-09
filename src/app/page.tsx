import About from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/TimeLine";
import Certificates from "@/components/Certificates";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-full w-full bg-[url('/LooperGroup2.png')]">
        <div className="flex flex-col gap-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Certificates />
          <Footer />
        </div>
      </main>
    </>
  );
}
