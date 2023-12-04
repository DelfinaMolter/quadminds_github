
const Starred = async (full_name: string): Promise<Response | Error> => {
  const githubApiUrl = import.meta.env.VITE_GITHUB_API_URL;
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
  return new Promise((resolve) => {
    fetch(`${githubApiUrl}/user/starred/${full_name}`, {
      method: "PUT",
      headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer " + githubToken,
          "X-GitHub-Api-Version": "2022-11-28",
      },
    })
      .then((response) => resolve(response))
      .catch((error) => resolve(error));
  });
};
export default Starred;


