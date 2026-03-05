const username: string = import.meta.env.VITE_GITHUB_USERNAME;
const token: string = import.meta.env.VITE_GITHUB_TOKEN;

if (!username) throw new Error("Missing VITE_GITHUB_USERNAME");
if (!token) throw new Error("Missing VITE_GITHUB_TOKEN");

export interface GitHubRepoStats {
  name: string;
  description: string | null;
  url: string;
  stargazers: number;
  forks: number;
  primaryLanguage: string | null;
  totalCommits: number;
}

export interface GitHubStats {
  login: string;
  name: string | null;
  bio: string | null;
  followers: number;
  totalRepos: number;
  contributions: {
    commits: number;
    pullRequests: number;
    issues: number;
  };
  totalCommits: number;
  repositories: GitHubRepoStats[];
}

interface GraphQLResponse {
  data?: {
    user: {
      login: string;
      name: string | null;
      bio: string | null;
      followers: { totalCount: number };
      repositories: {
        totalCount: number;
        nodes: {
          name: string;
          description: string | null;
          url: string;
          stargazerCount: number;
          forkCount: number;
          primaryLanguage: { name: string } | null;
          defaultBranchRef?: {
            target: {
              history: { totalCount: number };
            };
          };
        }[];
      };
      contributionsCollection: {
        totalCommitContributions: number;
        totalPullRequestContributions: number;
        totalIssueContributions: number;
      };
    };
  };
  errors?: { message: string }[];
}

export const fetchGitHubStats = async (): Promise<GitHubStats> => {
  const query = `
    query ($username: String!) {
      user(login: $username) {
        login
        name
        bio
        followers { totalCount }
        repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
          totalCount
          nodes {
            name
            description
            url
            stargazerCount
            forkCount
            primaryLanguage { name }
            defaultBranchRef {
              target {
                ... on Commit {
                  history { totalCount }
                }
              }
            }
          }
        }
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
      variables: { username },
    }),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const json: unknown = await response.json();

  if (!isGraphQLResponse(json)) {
    throw new Error("Invalid response format");
  }

  const result: GraphQLResponse = json;

  if (result.errors && result.errors.length > 0 && result.errors[0].message) {
    throw new Error(result.errors[0].message);
  }

  if (!result.data) {
    throw new Error("No data returned");
  }

  const user = result.data.user;

  const totalCommits = user.repositories.nodes.reduce(
    (sum, repo) => sum + (repo.defaultBranchRef?.target.history.totalCount ?? 0),
    0,
  );

  return {
    followers: user.followers.totalCount,
    totalRepos: user.repositories.totalCount,
    contributions: {
      commits: user.contributionsCollection.totalCommitContributions,
      pullRequests: user.contributionsCollection.totalPullRequestContributions,
      issues: user.contributionsCollection.totalIssueContributions,
    },
    login: user.login,
    name: user.name,
    bio: user.bio,
    totalCommits,
    repositories: user.repositories.nodes.map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.url,
      stargazers: repo.stargazerCount,
      forks: repo.forkCount,
      primaryLanguage: repo.primaryLanguage?.name ?? null,
      totalCommits: repo.defaultBranchRef?.target.history.totalCount ?? 0,
    })),
  };
};

function isGraphQLResponse(obj: unknown): obj is GraphQLResponse {
  return typeof obj === "object" && obj !== null && ("data" in obj || "errors" in obj);
}
