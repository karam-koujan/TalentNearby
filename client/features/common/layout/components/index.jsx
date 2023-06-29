import Header from "./header/";
import EmailVerification from "./emailVerification";
import { DefaultAvatar } from "../templates/layout";

const Layout = ({ children, data }) => {
  return (
    <>
      <Header data={data} />
      {children}
    </>
  );
};

export default Layout;
