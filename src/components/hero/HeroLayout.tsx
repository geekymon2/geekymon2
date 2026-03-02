import * as React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  arrowBoxStyle,
  boxStyle,
  containerStyle,
  HeroLayoutRoot,
  type HeroLayoutProps,
} from "./heroLayoutStyles";
import { Background } from "./heroLayoutStyles";

export default function ProductHeroLayout(
  props: React.HTMLAttributes<HTMLDivElement> & HeroLayoutProps,
) {
  const { sxBackground, children } = props;

  return (
    <HeroLayoutRoot>
      <Container sx={containerStyle}>
        {children}
        <Box sx={boxStyle} />
        <Box component={Background} sx={sxBackground} />
        <Box component="img" src="/arrow-down.png" alt="arrow down" sx={arrowBoxStyle} />
      </Container>
    </HeroLayoutRoot>
  );
}
