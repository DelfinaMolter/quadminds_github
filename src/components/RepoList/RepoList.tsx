import { useEffect, useState } from "react";
import GetRepoList from "../../services/getRepos";
import SearchRepos from "../../services/searchRepos";
import RepoCard from "../RepoCard/RepoCard";
import { useContext } from 'react';
import { GenericContext } from '../../context/context';
import ListStarred from "../../services/listStarred";
import Pagination from "../Pagination/Pagination";
import {   Repository } from "../../interface/repos";
import { AxiosError, AxiosResponse } from "axios";
import Loading from "../Loading/Loading";


function RepoBoxList() {
  const { assignContext, ...contextValues } = useContext(GenericContext);
  const [ repos, setRepos] = useState<Repository[]>([])
  const [ dataStar, setDataStar ] = useState<string[]>([])
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ isErrorRepo, setIsErrorRepo ] = useState<boolean>(false);


  const getDataStar = async() =>{
    try {
      const response: AxiosResponse | AxiosError = await ListStarred();
      if('data' in response && response.status === 200){
        const fullNamesStarred = response.data.map((obj: Repository) => obj.full_name);
        setDataStar(fullNamesStarred)
      } 
    } catch (error) {
      console.error("Error fetching starred repos:", error);
    }
  }

  const getTotalPages = (linkHeader: string | null)=>{
    const regex = /(?:[?&]page=(\d+))[^>]*>; rel="last"/;
    const match = linkHeader?.match(regex);
    match && assignContext('totalPages', (parseInt(match[1], 10)));
  }

  const getRepos = async() =>{
    setLoading(true);
    let response: any ={}
    const page = contextValues['page'] || 1;
    page === 1 && assignContext('page', page) 
    try {
      if( contextValues['query'] ){
        response = await SearchRepos(contextValues['query'], page );
        response.status === 200 && setRepos( response.data.items)
      }else{
        response = await GetRepoList(page)
        response.status === 200 && setRepos(response.data)
      }
      getTotalPages(response.headers.link)
      
      if(response.status === 200){
        getDataStar()
        setIsErrorRepo(false)
      }
    } catch (error) {
      console.error("Error fetching repos:", error);
      setIsErrorRepo(true);
    } finally {
      setLoading(false);
    }
  }


  useEffect(()=>{
    getRepos()
  },[ contextValues['query'], contextValues['page']])

  if(loading) return <Loading/>

  if(isErrorRepo) return <h1> Error al obtener los datos, inténtelo más tarde.</h1>

  return (
    <div className="w-full py-7">

      {
        repos.length > 0 ?
        <>
          {repos.map((repo, index)=> <RepoCard key={index} data={repo} starred={dataStar.some(fullName => fullName === repo.full_name)}/>)}
          <Pagination/>
        </>
        :
        <h3 className="my-10">No se encontraron repositorios, pruebe otra busqueda.</h3>
      }

    </div>

  );
}

export default RepoBoxList;