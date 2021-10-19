
export const reducer = (state,action)=>{
    switch(action.type){
          case "set_newGeoLocation" :
              return {...state,newGeolocation:action.payload}
          case "set_defaultGeoLocation" :
              return {...state,defaultGeolocation:action.payload}    
          case "set_disableMapClick" :
             return {...state,disableMapClick:action.payload}    
          case "set_showNewUserPositionCard" :
                 return {...state,showNewUserPositionCard:action.payload}  
          case "set_bounds" :
                     return {...state,bounds:action.payload}
          case "set_showPage" :
                         return {...state,showPage:action.payload}
          default :
            return state;                                             
    }
 }
