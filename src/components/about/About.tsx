import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { item } from "./aboutStyle";

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

const About = () => {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/curvy-lines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" component="h2" sx={{ mb: 14 }}>
          About Me
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={6}
          alignItems={"flex-start"}
        >
          <Box sx={item}>
            <Box sx={number}>1.</Box>
            <Box component="img" src="/software.png" alt="software" sx={image} />
            <Typography variant="h5" align="justify">
              I’m a passionate Full-Stack Software Engineer with over 20 years of experience
              designing and delivering scalable, high-performance applications across Banking,
              Government, Telecommunications, and Enterprise sectors.
            </Typography>
          </Box>
          <Box sx={item}>
            <Box sx={number}>2.</Box>
            <Box component="img" src="/cloud-computing.png" alt="cloud" sx={image} />
            <Typography variant="h5" align="justify">
              I specialise in building modern cloud-native solutions using technologies like React,
              // Angular, .NET, Java, Node.js, and cloud platforms. My expertise spans frontend,
              backend, // APIs, system architecture, and platform modernisation.
            </Typography>
          </Box>
          <Box sx={item}>
            <Box sx={number}>3.</Box>
            <Box component="img" src="/design.png" alt="design" sx={image} />
            <Typography variant="h5" align="justify">
              I have a strong focus on clean architecture, performance, and user experience, and I
              enjoy transforming complex business requirements into elegant technical solutions.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
