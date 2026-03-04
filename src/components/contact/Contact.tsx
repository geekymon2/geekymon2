import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import theme from "../../themes/theme";
import { sendEmail } from "../../utils/emailUtil";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await sendEmail({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    });

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Failed to send");
    }
  };

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
        <Box component="form" sx={{ mt: 4 }} onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField label="NAME" name="name" fullWidth required />
            <TextField label="EMAIL" name="email" type="email" fullWidth required />
            <TextField label="MESSSAGE" name="message" fullWidth multiline rows={5} required />
            <Button type="submit" variant="contained" size="large">
              Send Message
            </Button>

            <Collapse in={status === "success" || status === "error"}>
              {status === "success" && (
                <Alert severity="success">
                  <Typography variant="h5">Message sent successfully!</Typography>
                </Alert>
              )}

              {status === "error" && <Alert severity="error">{errorMessage}</Alert>}
            </Collapse>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
