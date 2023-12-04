import axios, { AxiosResponse, AxiosError } from 'axios';

const SearchRepos = async (query: string, page: number) => {
  const githubApiUrl = import.meta.env.VITE_GITHUB_API_URL;
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
  return new Promise<AxiosResponse | AxiosError>((resolve) => {
    axios({
      method: "GET",
      url: `${githubApiUrl}/search/repositories?q=${query}&page=${page}`,
      headers: {
        Accept: "application/vnd.github+json",
          Authorization: "Bearer " + githubToken,
          "X-GitHub-Api-Version": "2022-11-28",
      }
    })
      .then((response) => resolve(response))
      .catch((error) => resolve(error));
  });
};
export default SearchRepos;