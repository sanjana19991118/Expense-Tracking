import React from "react";
import {useFormik} from 'formik'
// import { validationLoginSchema } from "../validationSchema";
import { signUpSchema } from './schema/trial'
import {useDispatch,useSelector} from "react-redux"
import { startLoginUser } from "../actions/userAction";
// import {Input,Button,Card} from "antd"
// import "../App.css"

const Login=(props)=>{
//   const {handleAuth}=props

//   const error=useSelector((state)=>{
//      return state.user.errors
//   })

  const dispatch=useDispatch()
  const initialValues={
    email:"",
    password:""

  }

  const {values,handleChange,handleSubmit,errors,touched}=useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values)=>{
      console.log(values)
  
    
    }

  })



  return(
    <div className="form">
      
      {/* <Card   style={{
      width: 400,
      backgroundColor:"skyblue",
    }}> */}
      <form onSubmit={handleSubmit}>

       <h1>Login Here</h1>
        
        <label>email</label><br/>
        <input type="text" value={values.email} name="email" onChange={handleChange}/><br/>
        {
              errors.email && touched.email ? <span>{errors.email} </span> : null
        }

        {/* {
          error && <span>{error.errors}</span>
        } */}

        <label>password</label><br/>
        <input type="text" value={values.password} name="password" onChange={handleChange}/><br/>
        {
              errors.password && touched.password ? <span>{errors.password} </span> : null
        }
        
        {/* {
          error && <span>{error.errors}</span>
        } */}
          <div className="logo" >
        <button  type="primary" htmlType="login"   >
        Login
      </button>
      </div>
      </form>
   
     
    </div>
 
  )
}
export default Login


// // Formik and Yup offer an easy, understandable, extensible solution to handling and validation forms in react and React Native
// import React from 'react'
// // import { useDispatch  } from 'react-redux'
// import { useFormik } from 'formik'
// import { signUpSchema } from './schema/trial'
// // import {  startLoginUser } from '../actions/userAction'



// const Login = (props) => {
//     // const {handleAuth} = props
//     // const error = useSelector((state) => {
//     //      return state.user.errors
//     // })

//     // const dispatch = useDispatch()
//     const initialValues = {
//     email: " ",
//     password: " "
// }
    
//     // const {handleSubmit , handleBlur , handleChange, touched , errors, values} = useFormik({
//     //     initialValues : initialValues,
//     //     validationSchema : signUpSchema,
//     //     onSubmit: (values) => {
//     //        console.log(values)
//     //     //    dispatch(startLoginUser(values, props.history.push, handleAuth))
//     //     //    action.resetForm();
//     //     }
//     // })
//     const {values , errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
//         initialValues: initialValues,
//         validationSchema: signUpSchema,
//         onSubmit : (values) => { 
//             console.log(
//                 values 
//             )
//             // dispatch(startGetUsers(values, props.history.push))
//         }
//     }) 
//     // console.log('formik ', Formik)
        
       
//     // console.log(Formik)
//    return (
//       <div className="back-ground">
//             <div className='center-register'>
//             <div className='card shadow border-warning card-body d-flex flex-column align-items-center'>
//          <form onSubmit = {handleSubmit}>
//                 <div>    
//                     <label htmlFor="email" >
//                      Email
//                     </label>
//                     <input 
//                      type="email"
//                      className="form-control border-success"
//                      placeholder="Enter Email"
//                      value={values.email}
//                      onChange={handleChange}
//                      onBlur={handleBlur}
//                      name="email" 
//                      />
//                      <br />
//                     {
//                         errors.email && touched.email  ? ( <p>{errors.email}</p> ) : null
//                      }
                      
//                     <label htmlFor="password" >
//                      Password 
//                     </label>
//                     <input 
//                      type = "password"
//                      className="form-control border-success"
//                      placeholder="Enter Password"
//                      value={values.password}
//                      onChange={handleChange}
//                      onBlur={handleBlur}
//                      name="password" 
//                      />
//                      <br />
//                      {
//                         errors.password && touched.password  ? ( <p>{errors.password }</p> ) : null
//                      }
//                      <input type="submit" className="btn btn-success"/>
//                 </div>
//             </form>
//            </div>
//            </div>
//       </div>
//    )
// }

// export default Login
