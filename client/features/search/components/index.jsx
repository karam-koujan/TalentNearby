import * as React from "react";
import {Form,SearchInput,SearchBtn} from "../templates/form"
import {Close, SearchIcon} from "../templates/icon";
import {SearchBoard as SearchBoardWrapperParent,SearchBoardWrapper} from "../templates/layout";
import {NoResult} from "../templates/text";
import { useInfiniteFetch } from "../hooks/useInfiniteFetch";
import SearchBoard from "./searchBoard";
import { Waypoint } from "react-waypoint";
const Search = ()=>{
    const [userName,setUserName] = React.useState("")
    const {data,isResultExist,fetchMore}=useInfiniteFetch(userName)
    const handleOnChange = (e)=>{
       setUserName(e.target.value)
    } 
  return(
      <Form>
          <SearchBtn>
              <SearchIcon className="fa fa-search"></SearchIcon>
          </SearchBtn>
          <SearchInput name="search" ariaLabel="search" placeholder="Search" onChange={handleOnChange} value={userName}/>
         {userName?(
             <SearchBoardWrapperParent>
               { !data.pages.length?!isResultExist?
                  ( 
                  <SearchBoardWrapper>
                   <NoResult>No Result</NoResult>
                   </SearchBoardWrapper>
                   )
                  :(
                    <SearchBoardWrapper>
                    <NoResult>is Loading...</NoResult>
                    </SearchBoardWrapper>
                  ):data.pages.map((profiles,currentPageIdx)=>(
               <SearchBoardWrapper>
                       { profiles.profiles.map(({userName,profileImg,rating},profileIndex)=>(
                              <SearchBoard userName={userName}  profileImg={profileImg} rating={rating} key={profileIndex}/>
                         ))}
                         {currentPageIdx===data.pages.length-1?<Waypoint onEnter={()=>fetchMore()}/>:null}
                    </SearchBoardWrapper>
                ))}
                
                </SearchBoardWrapperParent>
                ):null}
         {userName?<Close onClick={()=>setUserName("")}>&#10006;</Close>:null}
      </Form>
  )
}

export default Search ;