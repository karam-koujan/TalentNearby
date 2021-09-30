import {Wrapper,Circle, Rectangle} from "../../templates/layout";
import {Close} from "../../templates/icons";
import Styles from "../../styles/styles.module.css"

const Loading = ({handleCloseCard,...props})=>{
  return(
      <Wrapper isLoading={true} {...props}>
         <Close className={Styles.close} onClick={handleCloseCard}>&#10006;</Close>
       <Circle></Circle>
       <Rectangle width="100px" margin="1rem auto"></Rectangle>
       <Rectangle width="30px" margin="1rem 0 0 2rem"></Rectangle>
       <Rectangle width="100px" margin="1rem 0 0 2rem"></Rectangle>
       <Rectangle width="30px" margin="1rem 0 0 2rem"></Rectangle>
       <Rectangle width="100px" margin="1rem 0 0 2rem"></Rectangle>
       <Rectangle width="30px" margin="1rem 0 0 2rem"></Rectangle>
       <Rectangle width="100px" margin="1rem 0 0 2rem"></Rectangle>
      </Wrapper>
  )
}


export default Loading;


