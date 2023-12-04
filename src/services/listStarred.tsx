import axios, { AxiosResponse, AxiosError } from 'axios';

const ListStarred = async (): Promise<AxiosResponse | AxiosError> => {
  const githubApiUrl = import.meta.env.VITE_GITHUB_API_URL;
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
  const githubUser = import.meta.env.VITE_GITHUB_USER;
  return new Promise<AxiosResponse | AxiosError>((resolve) => {
    axios({
      method: "GET",
      url: `${githubApiUrl}/users/${githubUser}/starred`,
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
export default ListStarred;