import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { iconStyle, item } from "./statsStyle";
import { fetchGitHubStats, type GitHubStats } from "../../utils/githubApi";
import { useEffect, useState } from "react";

export default function Stats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchGitHubStats();
        setStats(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    void loadStats();
  }, []);

  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, position: "relative" }}>
        <Box
          component="img"
          src="/curvy-lines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
          }}
        >
          <Box sx={item}>
            <Box component="img" src="/commit-git.png" alt="suitcase" sx={iconStyle} />
            <Typography variant="h6" sx={{ my: 5 }}>
              Total Commits
            </Typography>
            <Typography variant="h5">{loading ? "..." : (stats?.totalCommits ?? "N/A")}</Typography>
          </Box>

          <Box sx={item}>
            <Box component="img" src="/add-friend.png" alt="graph" sx={iconStyle} />
            <Typography variant="h6" sx={{ my: 5 }}>
              Github Followers
            </Typography>
            <Typography variant="h5"> {loading ? "..." : (stats?.followers ?? "N/A")}</Typography>
          </Box>

          <Box sx={item}>
            <Box component="img" src="/two-way-street.png" alt="clock" sx={iconStyle} />
            <Typography variant="h6" sx={{ my: 5 }}>
              Github Traffic
            </Typography>
            <Typography variant="h5">`1212`</Typography>
          </Box>

          <Box sx={item}>
            <Box component="img" src="/branches.png" alt="clock" sx={iconStyle} />
            <Typography variant="h6" sx={{ my: 5 }}>
              Page Views
            </Typography>
            <Typography variant="h5">`1212`</Typography>
          </Box>
        </Box>
        {(error !== undefined || error !== "") && (
          <Typography color="error" sx={{ mt: 3 }}>
            Error fetching stats: {error}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
