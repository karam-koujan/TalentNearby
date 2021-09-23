

export const serverStateReducer = (state,action)=>{
     switch(action.type){
         case "res__succeed":
            return {...state,resSucceed:action.payload}
        case "res__error":
            return {...state,resError:action.payload}
        case "isLoading":
            return {...state,isLoading:action.payload}   
        default :
          return state ;     
     }
}