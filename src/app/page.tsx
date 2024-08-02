import About from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-full w-full bg-[url('/LooperGroup2.png')] bg-no-repeat">
        <div className="flex flex-col gap-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
