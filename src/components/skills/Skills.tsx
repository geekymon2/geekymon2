import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const skillGroups = [
  {
    category: "Frontend",
    gradient: "linear-gradient(135deg,#4facfe,#00f2fe)",
    skills: [
      {
        name: "React",
        level: "Expert",
        years: 5,
        icon: "⚛️",
        tags: ["Hooks", "SPA", "Performance"],
      },
      {
        name: "TypeScript",
        level: "Advanced",
        years: 4,
        icon: "📘",
        tags: ["Typing", "Large Apps"],
      },
      {
        name: "Angular",
        level: "Advanced",
        years: 6,
        icon: "🅰️",
        tags: ["RxJS", "Enterprise Apps"],
      },
    ],
  },
  {
    category: "Backend",
    gradient: "linear-gradient(135deg,#43e97b,#38f9d7)",
    skills: [
      {
        name: ".NET",
        level: "Expert",
        years: 12,
        icon: "🟣",
        tags: ["Enterprise", "API Design"],
      },
      {
        name: "Node.js",
        level: "Advanced",
        years: 5,
        icon: "🟢",
        tags: ["REST APIs", "Microservices"],
      },
      {
        name: "Java",
        level: "Advanced",
        years: 10,
        icon: "☕",
        tags: ["Spring", "High Performance"],
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    gradient: "linear-gradient(135deg,#fa709a,#fee140)",
    skills: [
      {
        name: "AWS",
        level: "Advanced",
        years: 4,
        icon: "☁️",
        tags: ["Lambda", "S3", "Architecture"],
      },
      {
        name: "Kubernetes",
        level: "Intermediate",
        years: 3,
        icon: "🐳",
        tags: ["Containers", "Scaling"],
      },
    ],
  },
];

export default function Skills() {
  return (
    <Container sx={{ py: 12, maxWidth: 1100 }}>
      <Typography variant="h3" align="center" sx={{ fontWeight: 700 }} gutterBottom>
        Technical Skills
      </Typography>

      {skillGroups.map((group) => (
        <Box key={group.category} mt={10}>
          {/* Category Header */}
          <Box
            sx={{
              background: group.gradient,
              color: "white",
              px: 3,
              py: 1,
              borderRadius: 2,
              display: "inline-block",
              mb: 4,
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              {group.category}
            </Typography>
          </Box>

          {/* Skills Flex Container */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24, // space between boxes
            }}
          >
            {group.skills.map((skill) => (
              <Card
                key={skill.name}
                sx={{
                  flex: "1 1 250px", // grow, shrink, min width
                  minWidth: 250,
                  borderRadius: 3,
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardContent>
                  {/* Skill Header */}
                  <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                    <Typography fontSize={22}>{skill.icon}</Typography>
                    <Typography fontWeight={600}>{skill.name}</Typography>
                  </Stack>

                  {/* Level + Years */}
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {skill.level} • {skill.years} yrs
                  </Typography>

                  {/* Tags */}
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {skill.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </Container>
  );
}
