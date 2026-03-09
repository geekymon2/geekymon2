import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  CurvyImage,
  ExpertiseContainer,
  item,
  MainBox,
  MainContainer,
  SectionTitle,
} from "./aboutStyle";
import Chip from "@mui/material/Chip";

const image = {
  height: 55,
  my: 4,
};

const About = () => {
  return (
    <MainBox component="section">
      <MainContainer>
        <CurvyImage component="img" src="/curvy-lines.png" alt="curvy lines" />
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
            <SectionTitle>EXPERTISE</SectionTitle>
            <Box component="img" src="/software.png" alt="software" sx={image} />
            <ExpertiseContainer>
              <Chip label="🛠️ Full Stack" sx={{ mr: 1, mb: 1 }} />
              <Chip label="⚛️ React 🅰️ Angular" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🟢 Node.js 🔷 TypeScript" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🔗 Rest API ⚙️ .NET, ☕ Java, 🌱 Sprint Boot" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🌱 Spring Cloud" sx={{ mr: 1, mb: 1 }} />
              <Chip label="⚡ Microservices" sx={{ mr: 1, mb: 1 }} />
              <Chip label="☸️ Kubernetes 🐳 Docker" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🗄️ Database Management" sx={{ mr: 1, mb: 1 }} />
              <Chip label="☁️ Cloud Integration" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🔐 Authentication & Security" sx={{ mr: 1, mb: 1 }} />
            </ExpertiseContainer>
          </Box>
          <Box sx={item}>
            <SectionTitle>TOOLS</SectionTitle>
            <Box component="img" src="/settings.png" alt="cloud" sx={image} />
            <ExpertiseContainer>
              <Chip label="🧑‍💻 VS Code" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🟪 Visual Studio 2022" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🗄️ SQL Server" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🟢 Node.js" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🌿 Git" sx={{ mr: 1, mb: 1 }} />
              <Chip label="☕ IntelliJ IDEA" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🏛️ Maven, 🏗️ Gradle,📦 Ant" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🗄️ Oracle" sx={{ mr: 1, mb: 1 }} />
              <Chip label="📤 Postman 💤 Insomnia" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🤖 Android Studio" sx={{ mr: 1, mb: 1 }} />
            </ExpertiseContainer>
          </Box>
          <Box sx={item}>
            <SectionTitle>AWS</SectionTitle>
            <Box component="img" src="/aws.png" alt="cloud" sx={image} />
            <ExpertiseContainer>
              <Chip label="☁️ AWS CloudFormation" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🔄 CI/CD Pipelines" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🖥️ EC2" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🗄️ EFS / EBS" sx={{ mr: 1, mb: 1 }} />
              <Chip label="⚖️ ELB" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🛢️ RDS / DynamoDB" sx={{ mr: 1, mb: 1 }} />
              <Chip label="⚡ AWS Lambda" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🔐 IAM" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🌐 API Gateway" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🛡️ AWS WAF" sx={{ mr: 1, mb: 1 }} />
              <Chip label="📊 CloudWatch" sx={{ mr: 1, mb: 1 }} />
              <Chip label="📬 SQS, SNS" sx={{ mr: 1, mb: 1 }} />
            </ExpertiseContainer>
          </Box>
          <Box sx={item}>
            <SectionTitle>AZURE</SectionTitle>
            <Box component="img" src="/azure.png" alt="design" sx={image} />
            <ExpertiseContainer>
              <Chip label="☁️ Azure App Service 🌐 SWA" sx={{ mr: 1, mb: 1 }} />
              <Chip label="⚡ Azure Functions" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🗄️ Azure SQL Database" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🔐 Azure Active Directory" sx={{ mr: 1, mb: 1 }} />
              <Chip label="📤 Azure DevOps" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🔄 Azure Pipelines" sx={{ mr: 1, mb: 1 }} />
              <Chip label="📬 Azure Service Bus" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🔐 Azure Key Vault" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🗄️ Azure Blob Storage" sx={{ mr: 1, mb: 1 }} />
            </ExpertiseContainer>
          </Box>
          <Box sx={item}>
            <SectionTitle>GCP</SectionTitle>
            <Box component="img" src="/google-cloud.png" alt="design" sx={image} />
            <ExpertiseContainer>
              <Chip label="⚛️ Kubernetes" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🖥️ Compute Engine" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🗄️ Cloud SQL" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🔐 Cloud IAM" sx={{ mr: 1, mb: 1 }} />
              <Chip label="📤 Cloud Build" sx={{ mr: 1, mb: 1 }} />
              <Chip label="⚡ Cloud Functions" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🔐 Secret Manager" sx={{ mr: 1, mb: 1 }} />
              <Chip label="🗄️ Cloud Storage" sx={{ mr: 1, mb: 1 }} />
            </ExpertiseContainer>
          </Box>
        </Box>
      </MainContainer>
    </MainBox>
  );
};

export default About;
