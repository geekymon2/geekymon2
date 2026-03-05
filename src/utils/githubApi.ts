const username: string = import.meta.env.VITE_GITHUB_USERNAME;
const token: string = import.meta.env.VITE_GITHUB_TOKEN;

if (!username) throw new Error("Missing VITE_GITHUB_USERNAME");
if (!token) throw new Error("Missing VITE_GITHUB_TOKEN");

export interface GitHubStats {
  followers: number;
  publicRepos: number;
  totalCommits: number;
}

interface GraphQLResponse {
  data?: {
    user: {
      followers: { totalCount: number };
      repositories: {
        totalCount: number;
        nodes: {
          defaultBranchRef: {
            target: {
              history: {
                totalCount: number;
              };
            };
          } | null;
        }[];
      };
    };
  };
  errors?: { message: string }[];
}

export const fetchGitHubStats = async (): Promise<GitHubStats> => {
  const query = `
    query ($username: String!) {
      user(login: $username) {
        followers {
          totalCount
        }
        repositories(
          first: 100,
          ownerAffiliations: OWNER,
          isFork: false
        ) {
          totalCount
          nodes {
            defaultBranchRef {
              target {
                ... on Commit {
                  history {
                    totalCount
                  }
                }
              }
            }
          }
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
    publicRepos: user.repositories.totalCount,
    totalCommits,
  };
};

function isGraphQLResponse(obj: unknown): obj is GraphQLResponse {
  return typeof obj === "object" && obj !== null && ("data" in obj || "errors" in obj);
}
