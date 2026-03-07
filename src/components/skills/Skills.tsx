import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: ".NET", level: 75 },
  { name: "AWS", level: 70 },
];

export default function Skills() {
  return (
    <Container sx={{ py: 10, maxWidth: 700 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Skills
      </Typography>

      <Stack spacing={4} mt={6}>
        {skills.map((skill) => (
          <Box key={skill.name}>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography fontWeight={500}>{skill.name}</Typography>
              <Typography variant="body2">{skill.level}%</Typography>
            </Box>

            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={{
                height: 8,
                borderRadius: 5,
              }}
            />
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
