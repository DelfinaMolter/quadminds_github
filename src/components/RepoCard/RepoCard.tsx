import { useEffect, useState } from "react";
import DeleteStarred from "../../services/deleteStarred";
import Starred from "../../services/putStarred";
import Button from "../Button/Button";
import Star from "../Star/Star";
import Swal from 'sweetalert2'
import DetailRepo from "../DetailRepo/DetailRepo";
import { ApiResponseRepository, ApiResponseStar, Repository } from "../../interface/repos";

interface RepoCardProps {
  data: Repository;
  starred: boolean;
}

interface ApiResponseOrEmpty{}


const RepoCard: React.FC<RepoCardProps> = ({data, starred}) => {
  const [ star, setStar ] = useState<boolean>(false)

  useEffect(()=>{
    setStar(starred)
  },[data, starred])


  const handleStar = async() => {
    let response: ApiResponseRepository | ApiResponseOrEmpty = {}
    if(!star){
      response = await Starred(data.full_name );
    }else{
      response = await DeleteStarred(data.full_name);
    }
    if ('status' in response && (response as ApiResponseStar).status === 204) {
      setStar(!star)
    }else{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "No se pudo procesar tu cambio, intenta más tarde.",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  return (
    <div className="w-full flex flex-col justify-between items-start py-3  border-b border-border-color sm:flex-row sm:items-center">
      <DetailRepo data={data}/>
      <div className="self-end">
        <Button onClick={handleStar}>
          <p className="font-semibold tracking-wider">{star? "Starred" :"Star"}</p>
          <Star isFull={star }/>
        </Button>
      </div>
    </div>

  );
}

export default RepoCard;