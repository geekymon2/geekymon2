import Header from "./Header";
import Footer from "./Footer";
import Hero from "../hero/Hero";
import Stats from "../stats/Stats";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import About from "../about/About";
import ContactBanner from "../contact/ContactBanner";
import { useRef } from "react";

export default function AppLayout(): React.ReactElement {
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header contactRef={contactRef} />
      <Hero />
      <Stats />
      <Projects />
      <About />
      <ContactBanner />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}
