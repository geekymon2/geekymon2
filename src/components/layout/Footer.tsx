import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

export default function AppFooter(): React.ReactElement {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", py: 6, color: "primary.contrastText", pt: 2, pb: 2 }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={{ xs: 4, sm: 0 }}
          mb={2}
        >
          {/* Socials + Copyright */}
          <Stack spacing={2}>
            <Stack direction="row" spacing={1}>
              <Link
                href="https://www.facebook.com/geekymon2/"
                aria-label="Facebook"
                color="inherit"
              >
                <FacebookIcon />
              </Link>
              <Link href="https://x.com/geekymon2/" aria-label="X/Twitter" color="inherit">
                <XIcon />
              </Link>
            </Stack>
            <Typography variant="body2" color="inherit">
              &copy; {new Date().getFullYear()} geekymon2. All rights reserved.
            </Typography>
          </Stack>

          {/* Legal */}
          <Stack spacing={0.5}>
            <Typography variant="h6" color="inherit">
              Legal
            </Typography>
            <Stack component="ul" spacing={0.5} sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li>
                <Link href="/terms" color="inherit" underline="hover">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" color="inherit" underline="hover">
                  Privacy
                </Link>
              </li>
            </Stack>
          </Stack>
        </Stack>

        {/* Bottom section: Icon credit */}
        <Typography variant="caption" color="inherit">
          Icons made by{" "}
          <Link href="https://www.freepik.com" color="inherit" rel="sponsored" target="_blank">
            Freepik
          </Link>{" "}
          from{" "}
          <Link href="https://www.flaticon.com" color="inherit" rel="sponsored" target="_blank">
            www.flaticon.com
          </Link>{" "}
        </Typography>
      </Container>
    </Box>
  );
}
