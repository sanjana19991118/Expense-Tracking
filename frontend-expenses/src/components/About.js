import React from 'react'
import { useSelector } from 'react-redux'


const About = () => {
     const details = useSelector((state) => {
        // console.log(state.user.users)
         return state.user.users
     })
     return (
         <div className="card card shadow border-warning card-body d-flex flex-column align-items-center text-muted"style={{padding : "30px", marginTop : "250px", marginLeft: "600px", position: "fixed", fontSize : "30px", marginRight : "25px"}}>
                    Welcome  {details.name} !!!
                    <p className="text-warning" style={{marginTop : "10px"}}>Do track your expenses and stay stress free</p> 
                    <hr style={{width : "250px"}}></hr>
                    <p className="text-success">User can enter their details and budget that they have in hand, track expenses under different categories, add and modify expenses.
                    <br/>
                    The chart gives statics of the budget and expenses made, also regarding categories under which purchases are made.
                    Users get to access expense data  and details about the finances by downloading the invoice.</p>
        </div>
     )
}

export default About 