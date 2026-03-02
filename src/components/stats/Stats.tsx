import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { iconStyle, item } from "./statsStyle";

function Stats() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, position: "relative" }}>
        <Box display="flex" justifyContent="center" flexDirection="row">
          <Box sx={item}>
            <Box component="img" src="/commit-git.png" alt="suitcase" sx={iconStyle} />
            <Typography variant="h6" sx={{ my: 5 }}>
              Total Commits
            </Typography>
            <Typography variant="h5">{"1212"}</Typography>
          </Box>

          <Box sx={item}>
            <Box component="img" src="/add-friend.png" alt="graph" sx={iconStyle} />
            <Typography variant="h6" sx={{ my: 5 }}>
              Github Followers
            </Typography>
            <Typography variant="h5">{"1212"}</Typography>
          </Box>

          <Box sx={item}>
            <Box component="img" src="/two-way-street.png" alt="clock" sx={iconStyle} />
            <Typography variant="h6" sx={{ my: 5 }}>
              Github Traffic
            </Typography>
            <Typography variant="h5">{"1212"}</Typography>
          </Box>

          <Box sx={item}>
            <Box component="img" src="/branches.png" alt="clock" sx={iconStyle} />
            <Typography variant="h6" sx={{ my: 5 }}>
              Page Views
            </Typography>
            <Typography variant="h5">{"1212"}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Stats;
