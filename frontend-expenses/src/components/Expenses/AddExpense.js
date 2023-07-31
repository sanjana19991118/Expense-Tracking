import React from 'react'
import ExpenseDetails from './ExpenseDetails'
import { useDispatch } from 'react-redux' 
import  { startAddExpense } from '../../actions/expenseAction'

const AddExpense = () => {
    const dispatch = useDispatch()
    const formSub = (formData) => {
        dispatch(startAddExpense(formData))
    }
  
    return (
        <div>
           <ExpenseDetails formSub = {formSub} />
        </div>
    )
}

export default  AddExpense