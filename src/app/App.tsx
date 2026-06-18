import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Technologies } from "./components/Technologies";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Technologies />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}