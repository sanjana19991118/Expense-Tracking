const initialValue = {
    profile : {}
}

const profileReducer = (state = initialValue, action) => {
    switch(action.type){
        case 'SET_USERPROFILE':{
            return {...state,profile:action.payload}
        }
        case 'REMOVE_USERPROFILE':{
            return {...state,profile:{}}
        }
        case 'RESET_ALL':{
            return {...state,profile:[]}
        }
        default:{
            return {...state}
        }
    }
    // switch(action.type) {
    //     case "SET_PROFILE_DETAILS" : {
    //         return {...state, profile: action.payload}
    //     }
    //     case "UPDATE_PROFILE_DETAILS" : {
    //         return {...state, profile:action.payload}
    //     }
    //     case "UPDATE_PROFILE_PICTURE" : {
    //         return {...state, profile:action.payload}
    //     }

    //     default: {
    //         return {...state}
    //     }
    // }
}

export default profileReducer