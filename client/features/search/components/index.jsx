import * as React from "react";
import {Form,SearchInput,SearchBtn} from "../templates/form"
import {Close, SearchIcon} from "../templates/icon";
import {SearchBoard as SearchBoardWrapper} from "../templates/layout";
import SearchBoard from "./searchBoard";
const Search = ()=>{
    const [userName,setUserName] = React.useState("")
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
             <SearchBoardWrapper>
            <SearchBoard/>
         </SearchBoardWrapper>
         ):null}
         {userName?<Close onClick={()=>setUserName("")}>&#10006;</Close>:null}
      </Form>
  )
}

export default Search ;