import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Title } from "./headerStyles";
import { Button, Container, IconButton, MenuItem, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import Icon from "@mui/icons-material/CatchingPokemonTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { useState } from "react";

interface HeaderProps {
  contactRef?: React.RefObject<HTMLDivElement | null>;
}
function Header({ contactRef }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const gotoContact = () => {
    if (location.pathname === ROUTES.HOME) {
      // Already on home page — scroll directly
      contactRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page and pass state
      void navigate(ROUTES.HOME, { state: { scrollToContact: true } });
    }
  };

  const gotoSkills = () => {
    void navigate(ROUTES.SKILLS);
    window.scrollTo(0, 0);
  };

  const gotoHome = () => {
    void navigate(ROUTES.HOME);
    window.scrollTo(0, 0);
  };

  const pages = [
    { label: "Home", action: gotoHome },
    { label: "Skills", action: gotoSkills },
    { label: "Contact Me", action: gotoContact },
  ];

  const handleClick = (fn: () => void | Promise<void>) => () => void fn();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar position="static" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Icon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Title sx={{ display: { xs: "none", md: "flex" } }} onClick={handleClick(gotoHome)}>
              geekymon2
            </Title>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.label}
                    onClick={() => {
                      handleCloseNavMenu();
                      page.action();
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Icon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Title sx={{ display: { xs: "flex", md: "none" } }} onClick={handleClick(gotoHome)}>
              geekymon2
            </Title>
            <Box sx={{ ml: 6, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={() => {
                    handleCloseNavMenu();
                    page.action();
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
