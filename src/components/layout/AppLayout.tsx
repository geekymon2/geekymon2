import Header from "./Header";
import Footer from "./Footer";
import { useRef } from "react";
import { mainLayoutStyle } from "./appLayoutStyles";
import { Outlet } from "react-router";

export default function AppLayout() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header contactRef={contactRef} />
      <main style={mainLayoutStyle}>
        <Outlet context={{ contactRef }} />
      </main>
      <Footer />
    </>
  );
}
