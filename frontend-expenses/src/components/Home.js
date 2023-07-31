import React from 'react'
import About from './About'
// import { useSelector } from 'react-redux'
// import '../components/Css/Homedesign.css'

const Home = () => {
     // const details = useSelector((state) => {
     //    // console.log(state.user.users)
     //     return state.user.users
     // })
     return (
           <div className='bg'>
                
                 <div>

                    <About />
                 </div>
               
                   
               
               {/* <image src="src/components/Images/money.png" alt="etcetera"/> */}
          </div>
     )
}

export default Home