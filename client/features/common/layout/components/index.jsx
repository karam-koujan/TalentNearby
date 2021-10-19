import Header from "./header/";
import EmailVerification  from "./emailVerification";
import {DefaultAvatar} from "../templates/layout";

const Layout = ({children,data})=>{
  return(
      <>
      <EmailVerification email={data.email} active={data.active}/>
      <Header data={data}  />
      {children}
      </>
  )
}

export default Layout ;