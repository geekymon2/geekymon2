import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import Hero from "../hero/Hero";
import Stats from "../stats/Stats";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import About from "../about/About";

export default function AppLayout() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
