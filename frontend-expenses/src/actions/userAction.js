import axios from 'axios'
import Swal from 'sweetalert2'
import { startCreateUserProfile } from './profileAction';


export const  startGetUsers =(formData, props) => {
    // console.log(formData)
    return(dispatch) => {
         axios.post('http://localhost:3088/api/users/register', formData)
           .then((response) => {
              const user = response.data
            //   console.log("register", user)
            //   Swal.fire('Registered successfully ')
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Registered successfully',
                showConfirmButton: false,
                timer: 1500
                })
              localStorage.setItem('token', user.token)
              dispatch(setUser())
              dispatch(startCreateUserProfile (user._id))
              props("/login")
           }) 
           .catch((err) => {
              console.log(err.message)
           })
        }
}

const setUser = (user) => {
   return {
      type: "SET_USER",
      payload: user
   }
}

export const startLoginUser = (formData, props) => {
    
     return(dispatch) => {
        console.log('inside startLoginUser', formData)
         axios.post('http://localhost:3088/api/users/login', formData)
           .then((response) => {
               const user = response.data
               console.log('login', user)
               if(user.hasOwnProperty('errors')) {
                 dispatch(setError(user))
               }
              else {
                // dispatch(setError({}))
                 Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'logged in successfully',
                showConfirmButton: false,
                timer: 1500
                })
                dispatch(setLoginUser())
                localStorage.setItem('token', user.token)
                props('/account')
                
                // handleAuth()
                
              }
           })
           .catch((err) => {
              console.log(err)
           })
     }
}

const setLoginUser = (loginuser) => {
   return {
      type: "LOGIN_USER",
      payload: loginuser
   }
}

const setError = (error) => {
     return {
         type: "SET_ERROR",
         payload : error
     }
}

export const startAccountUser = (accountDetails, props) => {
    return (dispatch) => {
         axios.get('http://localhost:3088/api/users/account', {
            headers: {
                'authorization' : localStorage.getItem("token")
            }
         })
         .then((response) => {
             const account = response.data
            //  console.log('account', account)
             dispatch(setAccount(account))
             
         })
         .catch((err) => {
             alert(err.message)
         })
    }
}


const setAccount = (detail) => {
   //  console.log('detail', detail)
     return {
        type : "SET_ACCOUNT",
        payload: detail
     }
}