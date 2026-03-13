import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        level: "Expert",
        years: 5,
        version: "19.x",
        icon: "⚛️",
        tags: [
          "Hooks",
          "SPA",
          "Context API",
          "Router",
          "Data Fetching",
          "Responsive UI",
          "State Management",
        ],
      },
      {
        name: "TypeScript",
        level: "Advanced",
        years: 4,
        version: "5.x",
        icon: "📘",
        tags: [
          "Typing",
          "Large Apps",
          "Interfaces",
          "Type Safety",
          "Generics",
          "Arrow Functions",
          "Async/Await",
          "Modules",
        ],
      },
      {
        name: "Angular",
        level: "Intermediate",
        years: 1,
        version: "20.x",
        icon: "🅰️",
        tags: ["RxJS", "Signal", "Lazy Loading", "Enterprise Apps", "Component-Based"],
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: ".NET Core",
        level: "Expert",
        years: 12,
        version: "8.x",
        icon: "🟣",
        tags: [
          "Enterprise",
          "API Design",
          "Microservices",
          "High Performance",
          "C#",
          "Dependency Injection",
          "LINQ",
          "Entity Framework",
          "Asynchronous Programming",
        ],
      },
      {
        name: "Node.js",
        level: "Advanced",
        years: 5,
        version: "18.x",
        icon: "🟢",
        tags: ["Express", "API Development", "Real-time Apps", "Event-Driven"],
      },
      {
        name: "Java",
        level: "Advanced",
        years: 10,
        version: "17.x, 21.x",
        icon: "☕",
        tags: [
          "Spring",
          "Spring Boot",
          "Enterprise",
          "Microservices",
          "High Performance",
          "OOP",
          "JVM",
          "Multithreading",
        ],
      },
      {
        name: "Databases",
        level: "Advanced",
        years: 18,
        version: undefined,
        icon: "🗄️",
        tags: [
          "SQL Server",
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Database Design",
          "Performance Tuning",
        ],
      },
      {
        name: "APIs & Protocols",
        level: "Advanced",
        years: 15,
        version: undefined,
        icon: "🔌",
        tags: [
          "REST",
          "GraphQL",
          "API Design",
          "API Security",
          "API Documentation",
          "JWT",
          "OAuth",
          "OpenAPI",
          "SOAP",
        ],
      },
    ],
  },
  {
    category: "Cloud",
    skills: [
      {
        name: "AWS",
        level: "Advanced",
        years: 6,
        version: undefined,
        icon: "☁️",
        tags: [
          "Lambda",
          "S3",
          "EC2",
          "RDS",
          "Fargate",
          "EFS",
          "EBS",
          "DynamoDB",
          "API Gateway",
          "CloudFormation",
          "Serverless",
          "CI/CD",
          "Cloud Security",
          "Cloud Architecture",
        ],
      },
      {
        name: "Azure",
        level: "Advanced",
        years: 3,
        version: undefined,
        icon: "☁️",
        tags: [
          "Azure App Services",
          "Azure Functions",
          "Azure SQL Database",
          "Azure Storage",
          "Azure DevOps",
          "Azure Kubernetes Service",
          "Azure Active Directory",
          "Azure Monitor",
          "Azure Resource Manager",
          "Azure Security",
        ],
      },
    ],
  },
  {
    category: "Monitoring and Observability",
    skills: [
      {
        name: "Dynatrace",
        level: "Advanced",
        years: 6,
        version: undefined,
        icon: "📈",
        tags: [
          "Application Performance Monitoring",
          "Infrastructure Monitoring",
          "Real User Monitoring",
          "Synthetic Monitoring",
          "Log Management",
          "AI-Powered Insights",
          "Cloud Monitoring",
          "Microservices Observability",
          "Custom Dashboards",
          "Alerting and Anomaly Detection",
        ],
      },
      {
        name: "AppInsights",
        level: "Advanced",
        years: 3,
        version: undefined,
        icon: "📊",
        tags: [
          "Application Performance Monitoring",
          "Infrastructure Monitoring",
          "Real User Monitoring",
          "Synthetic Monitoring",
          "Log Management",
          "Observability",
          "Dashboards",
          "Alerting and Anomaly Detection",
        ],
      },
    ],
  },
];

export default function Skills() {
  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 8 }}>
        Technical Skills
      </Typography>

      {skillGroups.map((group) => (
        <Box key={group.category} mb={10}>
          {/* Category Title */}
          <Stack direction="row" alignItems="center" spacing={2} mb={4}>
            <Typography variant="h5" fontWeight={600}>
              {group.category}
            </Typography>
            <Divider sx={{ flex: 1 }} />
          </Stack>
          <Grid container spacing={4}>
            {group.skills.map((skill) => (
              <Grid key={skill.name}>
                <Card
                  sx={{
                    height: "100%",
                    width: 360,
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                      <Typography fontSize={26}>{skill.icon}</Typography>
                      <Typography fontWeight={600} variant="h6">
                        {skill.name}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary" mb={1}>
                      • {skill.level} • {skill.years} years{" "}
                      {skill.version ? "• v" + skill.version : ""}
                    </Typography>
                    <Box
                      display="flex"
                      flexWrap="wrap"
                      gap={1} // spacing between chips (both horizontal & vertical)
                      justifyContent="flex-start"
                    >
                      {skill.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" variant="outlined" />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
}
