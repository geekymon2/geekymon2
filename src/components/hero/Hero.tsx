import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HeroLayout from "./HeroLayout";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../themes/theme";
import { heroTitleStyle } from "./heroLayoutStyles";

const backgroundImage = "/coding.png?auto=format&fit=crop&w=1440";

export default function ProductHero() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Typography style={heroTitleStyle} color="inherit" align="center" variant={isMobile ? "h4" : "h2"}>
        Engineer. Problem Solver. Creator.
      </Typography>
      <Typography color="inherit" align="center" variant="h5" sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}>
        Turning ideas into user-friendly, high performance products.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        sx={{ minWidth: 200 }}
      >
        My Skills
      </Button>
    </HeroLayout>
  );
}
