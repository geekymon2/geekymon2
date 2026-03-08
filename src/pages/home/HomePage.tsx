import { useLocation, useOutletContext } from "react-router-dom";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import ContactBanner from "../../components/contact/ContactBanner";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import Stats from "../../components/stats/Stats";
import { useEffect } from "react";

type LayoutContext = {
  contactRef: React.RefObject<HTMLDivElement>;
};

export default function HomePage() {
  const { contactRef } = useOutletContext<LayoutContext>();
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollToContact) {
      // Scroll after mount
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
      // Clear the state so it doesn’t scroll again
      window.history.replaceState({}, "");
    }
  }, [location.state]);

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
