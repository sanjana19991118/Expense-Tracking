
import React, { useState, useEffect } from 'react'
// import BarChart from '../Charts/BarChart'
// import LineChart from '../Charts/LineChart'
// import PieChart from '../Charts/PieChart'
import { useSelector, useDispatch } from 'react-redux'
import DoughnutChart from '../Charts/DoughnutChart'
import { UserBudgetData } from '../Charts/DataTwo'
import { startBudgetUser } from '../actions/budgetAction'


const DoughnutMain = () => {
    const [chartData, expenseChart ]= useSelector((state) => {
      // console.log('b', state.budget.budget)
       return [state.budget.budget, state.expense.expense]
    })
   //  console.log(chartData.budget)
   //  console.log(expenseChart)
    
    let sum = 0
    expenseChart.map((ele,i) => {
      //  console.log('e', ele[i].name)
        return sum = sum + ele.amount
    })
    let rem = chartData.budget - sum
   //  console.log('s', sum)
   //  console.log('r', rem)

    const dispatch = useDispatch()
    useEffect(() => {
         dispatch(startBudgetUser())
     },[dispatch])

    const [userData] = useState({
        labels: ["Budget" , "Amount Spent"], // [2016,2017]//  list of all the labels that is represented
        datasets: [{
            label: "type", // usersLost
            data : [rem, sum], //userLost
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#f3ba2f",
                "#ecf0f1",
                "#2a71d0",
                "#50AF95",
                "#40AF95",
                
            ],
            borderColor: "grey",
            borderWidth: 0.5,
        }]
    })
    return  (
        <div>
           {/* <div className="container">
              <BarChart chartData={userData}/>
           </div>
           <div>
              <LineChart chartData={userData}/>
           </div>
           <div>
              <PieChart chartData={userData}/>
           </div> */}
           <div >
              <DoughnutChart chartData={userData}  />
           </div>
        </div>
       
    )
}

export default DoughnutMain