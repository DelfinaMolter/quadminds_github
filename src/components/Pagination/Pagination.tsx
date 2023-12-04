import { useContext } from 'react';
import { GenericContext } from '../../context/context';
import Arrow from "../Arrow/Arrow";
import Button from "../Button/Button";


const Pagination = () => {
  const { assignContext, page, totalPages  } = useContext(GenericContext);

  const handlePageChange = (direction: number) =>{
    const nextPage = page + direction;
    const isFirstPage = nextPage === 1;
    const isLastPage = nextPage === totalPages;
    if((nextPage >= 1 && nextPage <= totalPages) && (!isFirstPage || !isLastPage)){
      assignContext('page', nextPage);
    }
  }

  return (
    <div className='flex items-center justify-center gap-7 mt-10'>
      <Button onClick={()=>handlePageChange(-1)} >
        <Arrow active={page > 1} className={'rotate-180'}/>
      </Button>
      <p className="text-center">Paginación {page}&nbsp;<span className="text-gray-color">/&nbsp;{totalPages}</span></p>
      <Button  onClick={()=>handlePageChange(1)}>
        <Arrow active={page < totalPages}/>
      </Button>
    </div>
  );
}

export default Pagination;