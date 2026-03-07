import { useOutletContext } from "react-router-dom";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import ContactBanner from "../../components/contact/ContactBanner";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import Stats from "../../components/stats/Stats";

type LayoutContext = {
  contactRef: React.RefObject<HTMLDivElement>;
};

export default function HomePage() {
  const { contactRef } = useOutletContext<LayoutContext>();

  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <About />
      <ContactBanner />
      <Contact ref={contactRef} />
    </>
  );
}
