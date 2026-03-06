import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import theme from "../../themes/theme";
import { sendEmail } from "../../utils/emailUtil";
import { forwardRef, useState } from "react";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ContactProps {}

const Contact = forwardRef<HTMLDivElement, ContactProps>((_props, ref) => {
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
      setErrorMessage(result.error ?? "Failed to send");
    }
  };

  return (
    <Box
      component="section"
      ref={ref as React.Ref<HTMLDivElement>}
      sx={{
        py: 2,
        bgcolor: theme.palette.background.paper,
        width: "100%",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Box
          component="form"
          sx={{ mt: 4 }}
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit(e);
          }}
        >
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
});

Contact.displayName = "Contact";
export default Contact;
