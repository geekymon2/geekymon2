import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import Hero from "../hero/Hero";

export default function AppLayout() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Footer />
    </React.Fragment>
  );
}
