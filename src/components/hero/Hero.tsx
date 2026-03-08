import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HeroLayout from "./HeroLayout";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../themes/theme";
import { HeroTitle } from "./heroLayoutStyles";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const backgroundImage = "/coding.png?auto=format&fit=crop&w=1440";

export default function ProductHero() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const goToSkills = () => void navigate(ROUTES.SKILLS);

  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <HeroTitle align="center" variant={isMobile ? "h4" : "h2"}>
        Engineer. Problem Solver. Creator.
      </HeroTitle>
      <Typography color="inherit" align="center" variant="h5" sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}>
        Turning ideas into user-friendly, high performance products.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        sx={{ minWidth: 300 }}
      >
        <Button color="inherit" onClick={() => goToSkills()} size="large">
          <Typography variant="h4" color="inherit">
            My SKills
          </Typography>
        </Button>
      </Button>
    </HeroLayout>
  );
}
