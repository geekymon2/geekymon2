import Header from "./Header";
import Footer from "./Footer";
import Hero from "../hero/Hero";
import Stats from "../stats/Stats";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import About from "../about/About";

export default function AppLayout(): React.ReactElement {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
