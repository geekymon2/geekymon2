import styled from "@emotion/styled";
import type { CSSProperties } from "react";
import type { SxProps } from "@mui/system";
import type { Theme } from "@mui/material/styles";

export const heroSectionStyle: CSSProperties = {
  width: "100%",
};

export const heroTitleStyle: CSSProperties = {
  fontSize: "48px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "inherit",
};

export const Background = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
});

export interface HeroLayoutProps {
  sxBackground: SxProps<Theme>;
}
