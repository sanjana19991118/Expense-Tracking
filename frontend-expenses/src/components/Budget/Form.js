import React, {useState } from 'react'
import '../Css/budget.css'
import { useSelector, useDispatch } from 'react-redux'
import { startUpdateUser } from '../../actions/budgetAction'

const Form = (props) => {
   
    const {handleEdit} = props 

    const budgets = useSelector((state) => {
        return state.budget.budget
    })

    const [budget, setBudget] = useState(budgets.budget ? budgets.budget : 0)
    const [_id] = useState(budgets._id ? budgets._id : ' ')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setBudget(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
             id: _id, 
             budget: budget
        }
        dispatch(startUpdateUser(formData))
        handleEdit()
        console.log(formData)
    }
    


    // useEffect(() => {
    //     setAmount(budget.budget)
    //     setId(budget._id)
    // },[budget.budget, budget.id])
    
    return (
        <div className='form-background'>
        <div className='center-form'>
        <div className='card shadow border-warning card-body d-flex flex-column align-items-center'>
            <label className='card-title text-success'>
               Enter Budget Here
            </label>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                       value={budget}
                       className="form-control border-success"
                       onChange={handleChange}
                />
                <br/> 
                <input type="submit" 
                       value="update" 
                       className="btn btn-success"  />
            </form>
          </div>
         </div>
        </div>
    )

}

export default Form