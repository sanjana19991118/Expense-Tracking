const initialValue = {
    search: []
}
// console.log(initialValue)
const searchReducer = (state = initialValue, action) => {
    // console.log("state", state)
    // console.log("action", action.payload)
    switch(action.type) {
        case "SEARCH" : {
            // category:[...state.category,action.payload]
            return {...state, search:action.payload}
        }
        default : {
            return {...state}
        }
    }
    
}

export default searchReducer
