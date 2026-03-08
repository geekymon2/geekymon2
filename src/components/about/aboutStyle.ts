import { Container } from "@mui/material";
import Box, { type BoxProps } from "@mui/material/Box";
import { styled, type SxProps, type Theme } from "@mui/material/styles";

export const item: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minWidth: 0,
};

export const MainBox = styled(Box)<BoxProps>(({theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  overflow: "hidden",
  width: "100%",
  display: "flex",
}));

export const MainContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(15),
  position: "relative",
}));

export const CurvyImage = styled("img")<BoxProps>({
  pointerEvents: "none",
  position: "absolute",
  top: -180,
  opacity: 0.7,
});
