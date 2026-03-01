import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import Hero from "../hero/Hero";
import Stats from "../stats/Stats";
import Projects from "../../pages/projects/Projects";
import Contact from "../contact/Contact";

export default function AppLayout() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Stats />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
