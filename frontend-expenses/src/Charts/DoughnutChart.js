import React from 'react'
import { useSelector } from 'react-redux'
import { Doughnut } from "react-chartjs-2"
// import { startBudgetUser } from '../actions/budgetAction'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto'

import './style.css'
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const DoughnutChart = ({chartData}, props) => {
    // const { sum } = props
    // console.log(sum)
    Object.values(chartData).map((ele,i) => {
        //  console.log('cc', ele[i])
         return ele
    })

     const [budgetDetails,expenseDetails] = useSelector((state) => {
    //   console.log('b', state.expense.expense)
       return [state.budget.budget, state.expense.expense]
    })
    // console.log(budgetDetails)
    let sum = 0 
    expenseDetails.map((ele,i) => { 
        return sum = sum + ele.amount
    })

     let rem = budgetDetails.budget - sum
    //  console.log( 'rem' ,  rem)

    // console.log( budgetDetails.budget)

    // const dispatch = useDispatch()
    // useEffect(() => {
    //      dispatch(startBudgetUser())
    //  },[dispatch])
     
    return <div>
        <div>
           <div className="card  card-chart border-warning first" style={{ width: "400px",  marginLeft : "30px", marginTop: "10px"}} >
            <div className="card-header text-muted" style={{ backgroundColor: "#ffff99", fontWeight: "bold" }}>
                Budget Overview
            </div>
            <div className="card-body  card-chart-body first-child" style={{ width: "400px", height: "180px"}}>
                <Doughnut data={chartData}  className="first-child"  />
                <div className="first-child ">
                 <div className="div">
                     <div className="div1 ">
                         <h6 className="text-success">Total Budget</h6>
                         <p className="text-muted">{budgetDetails.budget}</p>
                     </div>
                     <div className="div2 ">
                        <h6 className="text-success">Remaining budget</h6>
                        <p className="text-muted">Rs {rem} </p>
                     </div>
                 </div>
                     <div className="div3 "> 
                        <h6 className="text-success">Total Expense</h6>
                        <p className="text-muted">Rs {sum} </p>
                     </div>
                </div>
            </div>
            </div>
            </div>
          </div>
      
}

export default DoughnutChart


