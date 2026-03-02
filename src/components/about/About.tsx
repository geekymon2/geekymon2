import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography>
        I’m a passionate Full-Stack Software Engineer with over 20 years of experience designing and
        delivering scalable, high-performance applications across Banking, Government,
        Telecommunications, and Enterprise sectors.
      </Typography>
      <Typography>
        I specialise in building modern cloud-native solutions using technologies like React,
        Angular, .NET, Java, Node.js, and cloud platforms. My expertise spans frontend, backend,
        APIs, system architecture, and platform modernisation.
      </Typography>
      <Typography>
        I have a strong focus on clean architecture, performance, and user experience, and I enjoy
        transforming complex business requirements into elegant technical solutions.
      </Typography>
      <Typography>
        I emphasise: ⚡ Scalable and maintainable systems ☁️ Cloud-native and modern architectures
        🎯 High-quality, production-ready code 🔓 Open-source technologies and best practices 🚀
        Fast, reliable delivery
      </Typography>
      <Typography>
        I’m currently focused on modern web technologies, AI-enabled solutions, and helping
        businesses build future-ready platforms.
      </Typography>
    </Container>
  );
};

export default About;
