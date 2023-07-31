import React from 'react'
// import { useDispatch } from 'react-redux'
import Budget from '../Budget/Budget'
import Category from '../Categories/Category'
import CategoryList from '../Categories/CategoryList'



const Settings = (props) => {

    return (
         <div className="bg">
              <Budget />
          <div>
             <Category /> 
          </div>     
           <CategoryList />        
         </div>
    )
}

export default Settings 