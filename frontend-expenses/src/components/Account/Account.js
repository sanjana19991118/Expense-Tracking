import React, { useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startAccountUser } from '../../actions/userAction'
import { FaTrashAlt } from 'react-icons/fa';
import '../Css/LoginandRegister.css'

const Account = (props) => {
     const accountDetails = useSelector((state) => {
        // console.log(state.user.users)
         return state.user.users
     })
    //  console.log('aa',accountDetails)

     const dispatch = useDispatch()
      useEffect(() => {
         
         dispatch(startAccountUser(accountDetails, props.history.push))
       
    })
    // invoke a action creator 
    // any argument can be sent in the action creator 
    // in get request there is no argument 
    // in the post,put, delete  request  we may be sending the form data or the id 
    
    
    return (
        <div className='back-ground  '>
        <div className='center-register account'>
        <div className='card shadow border-warning card-body d-flex flex-column align-items-center'>
            <h3 className='card-title text-success'>Account Info</h3>
            <p className="text-success">Email :  <strong className="text-muted">{accountDetails.email} </strong></p>
            <p className="text-success">Username  : <strong className="text-muted">{accountDetails.name}</strong></p>

             <button className="btn btn-outline-success account-delete" style={{ marginLeft: '180px'}}> Delete Account <FaTrashAlt/> </button>
            </div>
            </div>
         
        
         </div>
         
    )
}

export default Account