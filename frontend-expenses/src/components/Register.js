import React from 'react'
import { useDispatch } from 'react-redux'
import {useFormik} from 'formik'
import { signUpSchema  } from '../components/schema/trial' 
import { startGetUsers } from '../actions/userAction'
import '../components/Css/Homedesign.css'
import './Css/LoginandRegister.css'


const Register = (props) => {
    const dispatch = useDispatch()
    const initialValues = {
    name: " ",
    email: " ",
    password: " ",
}

    // handle form
    const {values , errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit : (values) => { 
            console.log(
                values 
            )
            dispatch(startGetUsers(values, props.history.push))
        }
    }) 
    // console.log(Formik)
    return (
        <div className='back-ground'>
            <div className='center-register'>
            <div className='card shadow border-warning card-body d-flex flex-column align-items-center'>
            <h2 className='card-title'> Welcome User !</h2>
            <h3 className='card-title text-success '> Register here </h3>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor="name" style={{ position: "left" }}>
                     Name 
                    </label>
                    <input 
                     type="name"
                     className="form-control border-success"
                     placeholder="Enter User Name"
                     value={values.name}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     name="name" 
                     />
                     <br />
                     {
                        errors.name && touched.name  ? ( <p>{errors.name}</p> ) : null
                     }
                    
                    <label htmlFor="email" >
                     Email
                    </label>
                    <input 
                     type="email"
                     className="form-control border-success"
                     placeholder="Enter Email"
                     value={values.email}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     name="email" 
                     />
                     <br />
                    {
                        errors.email && touched.email  ? ( <p>{errors.email}</p> ) : null
                     }
                      
                    <label htmlFor="password" >
                     Password 
                    </label>
                    <input 
                     type ="password"
                     className="form-control border-success"
                     placeholder="Enter Password"
                     value={values.password}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     name="password" 
                     />
                     <br />
                     {
                        errors.password && touched.password  ? ( <p>{errors.password }</p> ) : null
                     }
                     <input type ='submit' className="btn btn-success"/>
                </div>
            </form>
            </div>
            </div>

        </div>
    )
}

export default Register