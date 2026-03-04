import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function ContactBanner() {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 6 }}>
      <Button
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Feel free to reach out for collaboration!
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Contact me for any questions, comments or just to say hi!
      </Typography>
    </Container>
  );
}

export default ContactBanner;
