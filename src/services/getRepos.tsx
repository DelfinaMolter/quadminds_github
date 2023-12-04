
import axios, { AxiosResponse, AxiosError } from 'axios';

const GetRepoList = async (page: number): Promise<AxiosResponse | AxiosError> => {
  const githubApiUrl = import.meta.env.VITE_GITHUB_API_URL;
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
  return new Promise<AxiosResponse | AxiosError>((resolve) => {
    axios({
      method: "GET",
      url: `${githubApiUrl}/user/repos?page=${page}`,
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
export default GetRepoList;


// Simular un retraso de 2 segundos para visualizar el loading.

// const GetRepoList = async (page: number): Promise<AxiosResponse | AxiosError> => {
//   const githubApiUrl = import.meta.env.VITE_GITHUB_API_URL;
//   const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
//   return new Promise<AxiosResponse | AxiosError>((resolve) => {
//     setTimeout(() => { 
//       axios({
//         method: "GET",
//         url: `${githubApiUrl}/user/repos?page=${page}`,
//         headers: {
//           Accept: "application/vnd.github+json",
//           Authorization: "Bearer " + githubToken,
//           "X-GitHub-Api-Version": "2022-11-28",
//         }
//       })
//       .then((response) => resolve(response))
//       .catch((error) => resolve(error));
//     }, 2000); 
//   });
// };

// export default GetRepoList;