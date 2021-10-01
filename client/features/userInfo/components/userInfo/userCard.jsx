import {Wrapper} from "../../templates/layout";
import {Close} from "../../templates/icons";
import { UserName } from "../../templates/text";
import  {DescriptionList,DescriptionTitle,Description} from "../../templates/list";
import { useFetchQuery } from "../../../../hooks/useFetchQuery";
import Styles  from "../../styles/styles.module.css";
import Avatar from "../../../common/components/avatar"
import RatingStars from "../../../common/components/ratingStars";
import Loading from "../loading";
const UserCard = ({_id,handleCloseCard,...props})=>{
  const {isLoading,data} = useFetchQuery(["users",_id],`http://localhost:8080/api/profile/${_id}`) 
return(!isLoading?
      <Wrapper {...props}>
        <Close className={Styles.close} onClick={handleCloseCard}>&#10006;</Close>
        <Avatar profileImg={data.user.profileImg} userName={data.user.userName} size="60px" className={Styles.avatar}/>
        <UserName>
            {data.user.userName}
        </UserName>
        <RatingStars rating={data.rating} />
        <DescriptionList>
            <DescriptionTitle>
                Job 
            </DescriptionTitle>
            <Description>
                {data.user.job}
            </Description>
            <DescriptionTitle>
                Phone 
            </DescriptionTitle>
            <Description>
                {data.user.phoneNumber}
            </Description>
            <DescriptionTitle>
                Email 
            </DescriptionTitle>
            <Description>
                {data.user.email}
            </Description>
            <DescriptionTitle>
                bio 
            </DescriptionTitle>
            <Description>
                {data.user.bio}
            </Description>
        </DescriptionList>
      </Wrapper>:<Loading handleCloseCard={handleCloseCard} {...props}/>
  )
}

export default UserCard ;
