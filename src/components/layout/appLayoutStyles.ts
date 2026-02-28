import type { CSSProperties } from "react";

export const layoutStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

export const innerLayoutStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

export const contentStyle: CSSProperties = {
  flex: 1,
  maxWidth: "1440px",
  margin: "0 auto",
};
