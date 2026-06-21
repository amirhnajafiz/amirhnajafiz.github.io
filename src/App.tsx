import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Papers } from "./components/Papers";
import { Projects } from "./components/Projects";
import { Students } from "./components/Students";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Papers />
        <Projects />
        <Students />
        <Blog />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
