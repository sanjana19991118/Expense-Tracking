const initialValue = {
    users: {},
    errors: {}
}

const userReducer = (state = initialValue, action) => {
    // console.log('action', action.payload)
    switch(action.type) {
        case "SET_USER" : {
            return  {...state, users:{...state.users, ...action.payload}}
        }
        case "LOGIN_USER" : {
            return   {...state, users:{...state.users, ...action.payload}}
        }
         case "SET_ACCOUNT" : {
            return {...state, users:{...state.users, ...action.payload}}
        }
        case "SET_ERROR" : {
            return {...state, errors: action.payload}
        }

        default: {
            return {...state}
        }
    }

}

export default userReducer