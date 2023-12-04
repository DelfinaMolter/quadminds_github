import React from 'react';
import Star from "../Star/Star";
import { Repository } from '../../interface/repos';

interface DetailRepoProps {
  data: Repository;
}

const DetailRepo: React.FC<DetailRepoProps> = ({data}) => {

  return (
    <div className="pe-10">
      <h3 className=" text-primary-color-title text-xl">{data.name}</h3>
      {
        data.description && <small className="text-gray-color">{data.description}</small>
      }
      <div className="flex items-center gap-2 text-gray-color">
        <Star color={"#8B949E"}/>
        <p>{data.stargazers_count}</p>
      </div>
    </div>
  );
}

export default DetailRepo;