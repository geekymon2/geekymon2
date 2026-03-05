export interface GitHubStats {
  followers: number;
  public_repos: number;
  total_commits: number;
}

const username: string = import.meta.env.VITE_GITHUB_USERNAME;
const token: string = import.meta.env.VITE_GITHUB_TOKEN;
const headers: HeadersInit = token ? { Authorization: `token ${token}` } : {};
  
export const fetchGitHubStats = async (): Promise<GitHubStats> => {

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, { headers });
    if (!res.ok) throw new Error("Failed to fetch GitHub user data");

    const data = await res.json();
    console.log("GitHub API response:", data);

    return {
      followers: data.followers,
      public_repos: data.public_repos,
      total_commits: await fetchTotalCommits(),
    };
  } catch (error: unknown) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export const fetchTotalCommits = async (): Promise<number> => {

  const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers });
  if (!reposRes.ok) throw new Error("Failed to fetch repositories");
  const repos = await reposRes.json();

  const totalCommits = await Promise.all(
    repos.map(async (repo: any) => {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}&per_page=1`,
        { headers }
      );
      const link = res.headers.get("link");
      if (link) {
        const match = link.match(/&page=(\d+)>; rel="last"/);
        return match ? parseInt(match[1]) : 0;
      } else {
        const commits = await res.json();
        return commits.length;
      }
    })
  ).then(arr => arr.reduce((a, b) => a + b, 0));

  return totalCommits;
}
