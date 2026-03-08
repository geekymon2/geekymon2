import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CurvyImage, item, MainBox, MainContainer } from "./aboutStyle";
import Chip from "@mui/material/Chip";

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
    <MainBox component="section">
      <MainContainer>
        <CurvyImage
          component="img"
          src="/curvy-lines.png"
          alt="curvy lines"
        />
        <Typography variant="h4" component="h2" sx={{ mb: 14 }}>
          About Me
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={6}
          alignItems="flex-start"
        >
          <Box sx={item}>
            <Box sx={number}>SOFTWARE</Box>
            <Box component="img" src="/software.png" alt="software" sx={image} />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Chip label="🛠️ Full-Stack" sx={{ mr: 1, mb: 1 }} />
              <Chip label="⏳ 20+ Years" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🏦 Banking, Government, Enterprise" sx={{ mr: 1, mb: 1 }} />
              <Chip label="⚡ Scalable & High-Performance Apps" sx={{ mr: 1, mb: 1 }} />
              <Chip label="💡 Innovative Solutions" sx={{ mr: 1, mb: 1 }} />
            </Box>
          </Box>
          <Box sx={item}>
            <Box sx={number}>CLOUD NATIVE</Box>
            <Box component="img" src="/cloud-computing.png" alt="cloud" sx={image} />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Chip label="☁️ Cloud-Native Solutions" sx={{ mr: 1, mb: 1 }} />
              <Chip label="⚛️ React " sx={{ mr: 1, mb: 1 }} />
              <Chip label="Angular" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🟢 Node.js" sx={{ mr: 1, mb: 1 }} />
              <Chip label="⚙️ .NET" sx={{ mr: 1, mb: 1 }} />
              <Chip label="☕ Java" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🖥️ Frontend" sx={{ mr: 1, mb: 1 }} />
              <Chip label="Backend" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🔗 APIs" sx={{ mr: 1, mb: 1 }} />
              <Chip label="System Architecture" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🏗️ Platform Modernisation" sx={{ mr: 1, mb: 1 }} />
            </Box>
          </Box>
          <Box sx={item}>
            <Box sx={number}>ARCHITECTURE</Box>
            <Box component="img" src="/design.png" alt="design" sx={image} />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Chip label="🏗️ Clean Architecture" sx={{ mr: 1, mb: 1 }} />
              <Chip label="⚡ Performance" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🎨 User Experience" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🔍 Problem Solving" sx={{ mr: 1, mb: 1 }} />
              <Chip label="💡 Elegant Solutions" sx={{ mr: 1, mb: 1 }} />
              <Chip label="📈 Scalable" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🔒 Secure" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🧩 Modular" sx={{ mr: 1, mb: 1 }} />
            </Box>
          </Box>
        </Box>
      </MainContainer>
    </MainBox>
  );
};

export default About;
