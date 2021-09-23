import  redMarker from  "../../../../assets/icons/redMarker.svg"
import  greenMarker from  "../../../../assets/icons/greenMarker.svg"
import Styles from "./styles.module.css"
const Marker = ({color,userName})=>{
    return( 
          <div className={Styles.container}>
              <img src={color==="green"?greenMarker.src:redMarker.src} alt={`${userName} marker`}/>
          </div>
        )
}

export default Marker;