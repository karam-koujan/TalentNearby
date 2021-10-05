import * as React from "react";
import {useFetch} from "../../../hooks/httpReq/useFetch";
export const useInfiniteFetch = (userName)=>{
    const [data,setData]=React.useState({
      pageParams : [],
      pages : []
    })
    
    const setFetch = useFetch();
    const [page,setPage]=React.useState(1)
    const [isResultExist,setIsResultExist] = React.useState(true)
    const [hasFetchNext,setHasFetchNext]=React.useState(true);
    const pageRef = React.useRef(page);     
   pageRef.current = page
React.useEffect(()=>{
          fetchData()
          return()=> {
              setData({
                  pageParams:[],
                  pages:[]
            })
          }
    },[userName])
    const fetchData = async()=>{
      const regex = new RegExp(/^\s*$/)
      const isUserNameEmpty = regex.test(userName)
      if(isUserNameEmpty){
           return   setIsResultExist(false)
      }
     setPage(1)
     try{
       const res = await setFetch(`http://localhost:8080/api/search/${userName}?limit=4&page=${page}`)
       if(res.profiles.length===0){
      return   setIsResultExist(false) 
   
       }
       
       setData(({pageParams,pages})=>(
         { pageParams : [page],
           pages : [res]
         }))
     
     }catch(err){
         console.log(err);
         setIsResultExist(false)
     }

    }



   const fetchPage = async()=>{
    setPage(page=>page+1)

    const res = await setFetch(`http://localhost:8080/api/search/${userName}?limit=4&page=${pageRef.current}`)
    if(res.profiles.length===0){
      setHasFetchNext(false) 

    }
    
    setData(({pageParams,pages})=>
    { 
      return{pageParams : [...pageParams,page],
      pages : [...pages,res]
    }
    })
    
   }


  const fetchMore = ()=> {
    if(hasFetchNext){
      fetchPage()
    }

      
  } 
  return{
      fetchMore,
      data,
      isResultExist
  }
}