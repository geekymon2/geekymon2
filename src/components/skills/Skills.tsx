import { Row, Col, Card, Progress, Flex } from "antd";
import { cardStyle } from "./skillsStyle";
import Title from "antd/es/typography/Title";

const skills = {
  Frontend: [
    {
      name: "React",
      level: 90,
      years: 3,
      tags: ["Router", "Hooks", "Apollo Client"],
    },
    {
      name: "Vite",
      level: 80,
      years: 2,
      tags: ["Build Tool", "Fast Development"],
    },
    { name: "TypeScript", level: 85, years: 3, tags: ["ES6", "Type Safety"] },
  ],
  Backend: [
    { name: "Node.js", level: 80, years: 3, tags: ["Express", "NestJS"] },
    {
      name: "MongoDB",
      level: 75,
      years: 2,
      tags: ["NoSQL", "Database Design"],
    },
  ],
  DevOps: [
    {
      name: "Docker",
      level: 70,
      years: 2,
      tags: ["Containerization", "Microservices"],
    },
    { name: "AWS", level: 65, years: 2, tags: ["EC2", "S3", "Lambda"] },
  ],
  Cloud: [
    {
      name: "Azure",
      level: 80,
      years: 3,
      tags: ["App Services", "Functions", "Cosmos DB"],
    },
    {
      name: "Kubernetes",
      level: 70,
      years: 2,
      tags: ["Container Orchestration", "Microservices"],
    },
  ],
  Databases: [
    {
      name: "PostgreSQL",
      level: 80,
      years: 3,
      tags: ["SQL", "Database Design"],
    },
    { name: "Redis", level: 70, years: 2, tags: ["In-Memory", "Caching"] },
  ],
};

export default function Skills() {
  return (
    <Row gutter={[16, 16]}>
      {Object.entries(skills).map(([category, items]) => (
        <Col xs={24} md={12} key={category}>
          <Card style={cardStyle} title={<Title level={4}>{category}</Title>}>
            {items.map((skill) => (
              <Flex vertical key={skill.name} style={{ marginBottom: 12 }}>
                <strong>
                  {skill.name}: {skill.years} years{" "}
                  {skill.tags && `(${skill.tags.join(", ")})`}
                </strong>
                <Progress percent={skill.level} />
              </Flex>
            ))}
          </Card>
        </Col>
      ))}
    </Row>
  );
}
