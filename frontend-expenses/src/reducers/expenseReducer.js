const initialValue = {
    expense: [],
    soft:[]
}
// console.log(initialValue)

const expenseReducer = (state = initialValue, action) => {
    // console.log("state", state)
    // console.log("action", action.payload)
    switch(action.type) {
        case "GET_EXPENSE" :  {
            return  {...state, expense:action.payload}
        }
        case "ADD_EXPENSE" :  {
            return  {...state, expense:[...state.expense,action.payload]}
        }
        case "REMOVE_EXPENSE" : {
            return {...state, expense: state.expense.filter(ele => ele._id !== action.payload)}
        }
        case "UPDATE_EXPENSE" : { // edit
             return {...state, expense: state.expense.map((ele) => {
                 if(ele._id === action.payload._id) {
                     return { ...ele, ...action.payload}
                 }
                 else {
                    return {...ele}
                 }
             })}
        }
        case "SOFT_EXPENSE" : {
            return {...state, soft: state.soft.filter(ele => ele._id !== action.payload)}
        }
        case "EXPENSE_DELETE_SOFT" : {
            return { ...state, expense: state.expense.filter(ele => ele._id !== action.payload)}
        }
        case "SOFT_EXPENSE_LIST" : {
            return {...state, soft: action.payload}
        }
        case "SOFT_EXPENSE_RESTORE" : {
            return { ...state, expense: [...state.expense,action.payload]}
        }
        case "EXPENSE_DATA_DELETE" : {
            return {...state, soft: state.soft.filter(ele => ele._id !== action.payload)}
        }
        case "REMOVE_ALL_EXPENSE_DATA" : {  // account delete
            return { ...state, expense:[]}
        }
       
        default: {
            return {...state}
        }
    }
    
}

export default expenseReducer
