import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-court">
      <Navbar />
      <Hero />
      <Stats />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  );
}
