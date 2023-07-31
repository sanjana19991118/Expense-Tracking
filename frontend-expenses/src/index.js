import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { startCategoryUser } from './actions/categoryAction';
import { startGetExpense } from './actions/expenseAction'
// import { startBudgetUser } from './actions/budgetAction';
import { startAccountUser } from './actions/userAction';
const store = configureStore()

// console.log('state' , store.getState())
store.subscribe(() => {
  // console.log('state updated', store.getState())
})

if(localStorage.getItem("token")) {
  //  store.dispatch(startBudgetUser())
   store.dispatch(startAccountUser())
   store.dispatch(startCategoryUser())
   store.dispatch(startGetExpense())
  //  store.dispatch(startRemoveList())
  //  store.dispatch(startGetUsers())
}

// store.dispath()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

