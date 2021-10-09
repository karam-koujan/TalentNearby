import { useFetch } from "./httpReq/useFetch";
import {useInfiniteQuery} from "react-query";
export const useFetchInfiniteQuery = (query,endPoint,limit)=>{
  const setFetch = useFetch()
  const fetchProjects = ({pageParam=1}) => setFetch(`${endPoint}?page=${pageParam}&limit=${limit}`)
 const { data,
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
  status} = useInfiniteQuery(query,fetchProjects,{
    getNextPageParam: (lastPage,pages) => {
      const fetchMore = lastPage[Object.keys(lastPage)[0]].length !== 0 ; 
      if(!fetchMore){
        return undefined
      } 
      return pages.length + 1
    }
  })
const fetchMore = () => {
  if(hasNextPage){
   
     fetchNextPage()
    
  }  
}
 return {
    data,
    status,
    fetchMore,
    isFetchingNextPage,
    hasNextPage
 }
}