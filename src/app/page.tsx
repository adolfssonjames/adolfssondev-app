import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Timeline from "@/components/timeline";
import Contact from "@/components/contact";
import Ourservices from "@/components/ourservices";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Ourservices />
      <Projects />
      <Testimonials />
      <Timeline />
      <About />
      <Contact />
    </main>
  );
}
