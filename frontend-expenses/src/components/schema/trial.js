import * as Yup from 'yup'
 

export  const signUpSchema = Yup.object({
     name: Yup.string().min(2).max(25).required("please enter your name"),
     email: Yup.string().email().required("Please enter your email"),
     password: Yup.string().min(6).required("please Enter your password")
})