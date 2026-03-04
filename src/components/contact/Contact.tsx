import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import theme from "../../themes/theme";

export default function Contact() {
  return (
    <Box
      component="section"
      sx={{
        py: 2,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Box component="form" sx={{ mt: 4 }}>
          <Stack spacing={3}>
            <TextField label="NAME" name="name" fullWidth required />
            <TextField label="EMAIL" name="email" type="email" fullWidth required />
            <TextField label="MESSSAGE" name="message" fullWidth multiline rows={5} required />
            <Button type="submit" variant="contained" size="large">
              Send Message
            </Button>
          </Stack>
        </Box>

        {
          <Alert severity="success" sx={{ mt: 3 }}>
            Your message has been sent!
          </Alert>
        }
      </Container>
    </Box>
  );
}
