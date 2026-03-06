import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function ContactBanner() {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 6 }}>
      <Box
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          p: 2,
          m: 2,
        }}
      >
        <Typography variant="h5" component="span" sx={{ m:2, p: 2 }}>
          Feel free to reach out for collaboration!
        </Typography>
      </Box>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Contact me for any questions, comments or just to say hi!
      </Typography>
    </Container>
  );
}

export default ContactBanner;
