import React from 'react'
// import AddProfile from "./AddProfile";
// import {useDispatch } from "react-redux"
// import { startGetUserProfile } from "../../actions/profileAction"
// import ProfileDetails from './ProfileDetails'
import ProfileData from './ProfileData'
// import '../Css/profile.css'

const ProfileInfo = () => {
   
//    const dispatch = useDispatch()
//    useEffect(() => {
//       dispatch(startGetUserProfile())
//    }, [dispatch])

    return (
        <div>
          <div   className="bg">

         </div>
         <div>
            <ProfileData />
         </div>
         {/* <AddProfile /> */}
         {/* <div  className="profile">
          <ProfileDetails/>     
         </div>  */}
      </div>
    )
}

export default ProfileInfo