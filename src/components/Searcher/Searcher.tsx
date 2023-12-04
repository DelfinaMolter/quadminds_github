import { ChangeEvent,  useContext } from "react";
import { GenericContext  } from "../../context/context";

function Searcher() {
  const { assignContext } = useContext(GenericContext);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>{
    const getData = setTimeout(() => {
      assignContext('query',  e.target.value)
      assignContext('page', 1);
    }, 1500)
    return () => clearTimeout(getData)
  }
  
  return (
      <input type="text" name="search" placeholder="Find a repository..."  className="rounded-md px-4 py-2 w-full bg-transparent border border-border-color" onChange={(e) => handleSearch(e)}/>


  );
}

export default Searcher;