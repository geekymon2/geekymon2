import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Title } from "./headerStyles";
import { Button } from "@mui/material";

interface HeaderProps {
  contactRef?: React.RefObject<HTMLDivElement | null>;
}
function Header({ contactRef }: HeaderProps) {
  const handleScrollToContact = () => {
    contactRef?.current?.scrollIntoView({ behavior: "smooth" });
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
          <Title>geekymon2</Title>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Button size="large" onClick={handleScrollToContact} color="inherit">
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
