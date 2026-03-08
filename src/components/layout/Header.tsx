import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Title } from "./headerStyles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

interface HeaderProps {
  contactRef?: React.RefObject<HTMLDivElement | null>;
}
function Header({ contactRef }: HeaderProps) {
  const navigate = useNavigate();

  const gotoContact = () => {
    if (location.pathname === ROUTES.HOME) {
      // Already on home page — scroll directly
      contactRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page and pass state
      navigate(ROUTES.HOME, { state: { scrollToContact: true } });
    }
  };

  const gotoSkills = () => {
    navigate(ROUTES.SKILLS);
    window.scrollTo(0, 0);
  };

  const gotoHome = () => {
    navigate(ROUTES.HOME);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <AppBar position="fixed" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flex: 1 }} />
          <Title onClick={gotoHome}>geekymon2</Title>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Button size="large" onClick={gotoHome} color="inherit">
              Home
            </Button>
            <Button size="large" onClick={gotoSkills} color="inherit">
              Skills
            </Button>
            <Button size="large" onClick={gotoContact} color="inherit">
              Contact Me
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Header;
