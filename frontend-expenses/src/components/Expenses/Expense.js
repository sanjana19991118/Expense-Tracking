import React, { useState , useEffect } from 'react'
import Search from './Search'
import Pagination from '../Expenses/Pagination/Pagination'
import { Modal }  from 'antd'
import AddExpense from './AddExpense'
import ChartAnother from '../../Charts/ChartAnother'
import ExpenseList from './ExpenseList'
// import { useSelector } from 'react-redux'
import {  useDispatch } from 'react-redux'
import { startGetExpense } from '../../actions/expenseAction'
import '../Css/expenses.css'




const Expense = (props) => {
    // const  { idEdit , formData} = props
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startGetExpense())
    },[dispatch])

    // const  expenseData =  useSelector((state) => {
    //      return state.expense.expense
    // })

    const showModal = () => {
        setModal(!modal)
    }

    const handleOk = () => {
        setModal(false)
    }  
    
    const handleCancel = () => {
        setModal(false)
    }
    const [expenseData, setExpenseData] = useState("")
    
    ////////
    // got to change 
    const data = expenseData
    console.log(data)
    ////////

    const dataSearch = (expenseData) => {
        // console.log('e', expenseData)
        setExpenseData(expenseData)
    } 
    return (
        <div>
        <div className='bg'>
          
          
        </div>
        <span className="card shadow card-body border-warning backcloth expense-card d-flex flex-column align-items-center ">
            <div><ChartAnother /></div>
            <div className="search"><Search  dataSearch={dataSearch} /></div>            
            <Modal 
              cancelButtonProps={{ style: { border: "0.5px solid red" , color : "red"}}}
              okButtonProps={{ style: { backgroundColor: "#2d8659" } }} 
              visible={modal}
              isOpen={modal}
              onOk={handleOk}
              onCancel={handleCancel}
            >
                
                 <AddExpense />
            </Modal>
            <div >
                 <button className="add btn btn-success"  onClick={showModal}>Add Expense</button>
            </div >
                <ExpenseList />
            <div><Pagination /></div>   
           </span>
        </div>
        

    )
}

export default Expense

