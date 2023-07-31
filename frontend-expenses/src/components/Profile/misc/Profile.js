import React, { useEffect } from 'react'
import AddProfile from "./AddProfile";
import { useDispatch } from "react-redux"
import { startGetUserProfile } from "../../actions/profileAction"
import ProfileDetails from './ProfileDetails'



const Profile = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(startGetUserProfile())
   }, [dispatch])

   return (
      <div>
         <div   className="bg">

         </div>
         <AddProfile />
         <div  className="profile">
          <ProfileDetails/>     
         </div>
      </div>
   )
}

export default Profile