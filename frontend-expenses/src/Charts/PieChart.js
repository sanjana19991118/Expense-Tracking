import React from 'react'
import { Pie } from "react-chartjs-2"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js/auto'
import './style.css'
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)
const PieChart = ({chartData}) => {
     
    return <div>
             <div>
                <div className="card card-chart border-warning" style={{ width: "380px",  marginLeft : "250px", marginTop: "10px"}} >
                  <div className="card-header text-muted" style={{ backgroundColor: "#ffff99", fontWeight: "bold"}}>
                        Category wise split
                  </div>
                  <div className="card-body card-chart-body" style={{ marginLeft : "100px",width: "200px", height: "180px"}}>
                        <Pie data={chartData}  />
                  </div>
                </div>
              </div>
            </div>
    // <Bar data={chartData} options={{}} />;
}

export default PieChart



// import React from 'react'
// import { useSelector } from 'react-redux'
// import Chart from 'react-apexcharts'

// function PieChart() {
//     const categoryDetails = useSelector((state) => {
//          return state.category.category
//     })

//     const expenseDetails = useSelector((state) => {
//          return state.expense.expense
//     })

//     console.log('cccc', categoryDetails)
//     console.log('cccc', expenseDetails)
    
//     return  (
//         <div className="">
//         {/* <Chart 
//          type="pie"
//          width={600}
//          height={600}
//         ></Chart> */}
//         <div >
//            <div className="card card-chart border-warning" style={{ width: "380px",  marginLeft : "250px", marginTop: "10px"}} >
//                 <div className="card-header text-muted" style={{ backgroundColor: "#ffff99", fontWeight: "bold"}}>
//                       Category wise split
//                 </div>
//                 <div className="card-body card-chart-body" style={{ width: "200px", height: "180px"}}>
//                          <Chart  
//                           type="pie"
//                           width={600}
//                           height={600}
//                          ></Chart>
//                  </div>
//                  </div>
//                  </div>
//                </div>
        
//     )
// }

// export default PieChart


