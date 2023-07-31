// questions - cdn version means ?
// react.refs
// useRefs
// useReducer
// pull , clone , rebashing in git 
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import BarChart from '../Charts/BarChart'
import PieChart from '../Charts/PieChart'
import DoughnutMain from '../Charts/DoughnutMain'
// import Doughnut from '../Charts/DoughnutChart'
// import { UserData } from '../Charts/Data'



const ChartAnother = (props) => {
   const [categoryDetails, expenseDetails] = useSelector((state) => {
      // console.log('csc', state.category.category)
       return [state.category.category,state.expense.expense]
   })

   // console.log( 'cc', categoryDetails[4].category)
   // console.log('ee' , expenseDetails[0][1].amount)
   let finalChart = []
   categoryDetails.forEach((ele) => {
      // console.log('d', ele._id)
      //  return ele
      let catSum = 0
      expenseDetails.forEach((elem,i) => {
         //  console.log('ele', elem[i].categoryId)
         //  console.log(ele._id)
         //  console.log(elem[i].amount)
         if(ele._id === elem.categoryId) {
             catSum = catSum + elem.amount
         }
      })
      //  console.log('sum', catSum)
      finalChart = [...finalChart,[ele.category, catSum]]
      
   })
   // console.log('f' , finalChart)
  

   
   // expenseDetails.map((ele,i) => {
   //     if(ele._id === categoryDetails[i].categoryId) {
   //        sumup =  sumup + categoryDetails.amount
   //     }
   // })

    
    const [userData] = useState({
        labels: finalChart.map((data) => data[0]), // [2016,2017]//  list of all the labels that is represented
        datasets: [{
            label: "differnt categories", // usersLost
            data: finalChart.map((data) => data[1]),  //userLost
            backgroundColor: [
                "#50AF95",
                "#2a71d0",
                "#ecf0f1",
                "rgba(75,192,192,1)",
                "#f3ba2f",
                
                
            ],
            borderColor: "grey",
            borderWidth: 0.5,
        }]
    })
    return  (
        <div className="parent">
           {/* <div className="container">
              <BarChart chartData={userData}/>
           </div>
           <div>
              <LineChart chartData={userData}/>
           </div>
           <div>
              <PieChart chartData={userData}/>
           </div> */}
           <div className="child">
              {/* <Doughnut chartData={userData} className="dough"/> */}
              <DoughnutMain chartData={userData} className="dough"/>
           </div>
           <div className="child">
              <PieChart chartData={userData} className="pie"/>
           </div>
        </div>
       
    )
}

export default ChartAnother