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

export const HeroLayoutRoot = styled("section")<{ theme?: Theme }>((props) => ({
  color: props.theme?.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "60vh",
  minHeight: 500,
  maxHeight: 1300,
  width: "100%",
}));

export const boxStyle: CSSProperties = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: -1,
};

export const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const arrowBoxStyle: CSSProperties = {
  height: "16px",
  width: "12px",
  position: "absolute",
  bottom: 32,
};
