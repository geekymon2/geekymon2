import Typography from "@mui/material/Typography";
import { styled, type Theme } from "@mui/material/styles";

export const Title = styled(Typography)(({ theme }: { theme: Theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
  lineHeight: theme.typography.h6.lineHeight,
  fontFamily: theme.typography.h6.fontFamily,
  textTransform: theme.typography.h6.textTransform,
  color: theme.palette.common.white,
  textDecoration: "none",
  letterSpacing: "0.3rem",
}));
