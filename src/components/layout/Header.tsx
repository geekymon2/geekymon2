import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Title } from "./headerStyles";

function Header() {
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
            <Title>Contact Me</Title>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Header;
