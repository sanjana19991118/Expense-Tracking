const initialValue = {
    category: []
}
// console.log(initialValue)

const categoryReducer = (state = initialValue, action) => {
    switch(action.type) {
        case "SET_CATEGORY" :  {
            return  {...state, category:[...state.category,action.payload]}
        }
        case "SET_CATEGORY_LIST" : {
            return {...state, category:action.payload}
        }
        case "REMOVE_ITEM" : {
            return {...state, category:state.category.filter(ele => ele._id !== action.payload)}
        }
        default: {
            return {...state}
        }
    }
    
}

export default categoryReducer
