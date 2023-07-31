import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { startBudgetUser } from '../../actions/budgetAction'
import Form from './Form'
import '../Css/budget.css'
// import { Card } from 'antd'


const Budget = (props) => { 
    const [toggle, setToggle] = useState(false)
     const budget = useSelector((state) => {
         return state.budget.budget
     })
   //   console.log("a", budget.budget)
     const dispatch = useDispatch()

     const handleEdit = () => {
        setToggle(!toggle)
     }

     useEffect(() => {
         dispatch(startBudgetUser())
     },[dispatch])

   //   useEffect(() => {
        
   //   })

     return (
        <div >
           {
              toggle ? 
                <div> 
                    (
                   
                    <Form  handleEdit = {handleEdit} />
                     <button onClick={handleEdit}>cancel</button>
                    )
                 </div>
            : (
               <div className='form-background'>
               <div className='center-form'>
               <div className='card shadow border-warning card-body d-flex flex-column align-items-center'>
                  <label className='center-label card-title text-success'>
                       <h4 className="text-success"> Budget in hand - <small className="text-muted ">{budget.budget}</small> </h4>
                 </label>
                 
                 <button onClick={handleEdit} className="btn btn-success edit">Edit Budget</button>  
               </div>
               </div>
               </div>
           )
        }
        </div> 
     )
}

export default Budget


