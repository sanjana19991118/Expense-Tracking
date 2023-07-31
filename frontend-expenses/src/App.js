// import './App.css';
// import Home from './components/Home'
// import Register from './components/Register'
import React,{ useEffect } from 'react'
// import PieChart from '../src/Charts/PieChart'
// import React, { useState, useEffect } from  'react'
// import Settings from './components/Settings/Settings'
import NavBar from './components/NavBar'
// import Page from './components/Expenses/Pagination/Page'
// import Category from './components/Categories/Category'
// import Login from './components/Login'
// import ExpenseForm from './components/Expenses/ExpenseForm'
// import Pagination from './components/Expenses/Pagination'
// import Search from './components/Expenses/Search'
// import Expense from './components/Expenses/Expense'
// import Dropdown from '../src/components/Expenses/Dropdown'

function App() {
  // const [userLoggedIn, setUserLoggedIn] = useState(false)

  // const handleAuth = () => {
  //      setUserLoggedIn(!userLoggedIn) 
  // }

     useEffect(() => {
        if(localStorage.getItem("token")) {
          // console.log('local', localStorage.getItem('token'))
            // handleAuth()
        }
    })

  return (
    <div className="header">
      {/* <PieChart/> */}
      <NavBar /> 
         {/* <Home />
         {/* <Register /> */}
         {/* <Category /> */}
         {/* <Login /> */}
         {/* <Settings /> */}
         {/* <ExpenseForm  /> */}
         {/* <ExpenseList />  */}
         {/* <Pagination /> */}
         {/* <Search /> */}
         {/* <BudgetChart /> */}
         {/* <Dropdown /> */}
         {/* <Page/>  */}
    </div>
  );
}

export default App;
