import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import budgetReducer from '../reducers/budgetReducer'
import categoryReducer from '../reducers/categoryReducer'
import expenseReducer from '../reducers/expenseReducer'
import searchReducer from '../reducers/searchReducer'
import userReducer from '../reducers/userReducer'
import profileReducer from '../reducers/profileReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
          budget : budgetReducer,
          category : categoryReducer,
          expense : expenseReducer,
          search : searchReducer,
          user: userReducer,
          profile:profileReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore

// we do not want to export a variable from the file , so we have the function